/** @odoo-module **/

import { Component, useState, useRef, useEffect } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { NavBar } from "@web/webclient/navbar/navbar";
import { patch } from "@web/core/utils/patch";

class HKSearchDialog extends Component {
    static template = "hk_search_record_name.SearchDialog";
    static props = { close: Function };

    setup() {
        this.orm = useService("orm");
        this.action = useService("action");
        this.searchInput = useRef("searchInput");

        this.state = useState({
            query: "",
            results: [],
            loading: false,
            selectedIndex: 0,
            allModels: [],          // всі моделі з Odoo
            activeModel: null,      // вибрана модель для фільтрації
        });

        this.searchTimeout = null;
        this._loadModels();

        useEffect(() => {
            setTimeout(() => {
                if (this.searchInput.el) {
                    this.searchInput.el.focus();
                }
            }, 50);
        });
    }

    // Завантажуємо всі моделі динамічно з ir.model
    async _loadModels() {
        try {
            const models = await this.orm.searchRead(
                "ir.model",
                [["transient", "=", false]],
                ["model", "name"],
                { limit: 500, order: "name asc" }
            );
            this.state.allModels = models;
        } catch(e) {
            console.error("HK Search: failed to load models", e);
        }
    }

    // Вибір моделі для фільтрації
    selectModel(model) {
        if (this.state.activeModel && this.state.activeModel.model === model.model) {
            this.state.activeModel = null;
        } else {
            this.state.activeModel = model;
        }
        if (this.state.query.length >= 2) {
            this.performSearch(this.state.query);
        }
    }

    // Скидаємо фільтр моделі
    clearModel() {
        this.state.activeModel = null;
        if (this.state.query.length >= 2) {
            this.performSearch(this.state.query);
        }
    }

    onInput(event) {
        const query = event.target.value;
        this.state.query = query;
        this.state.selectedIndex = 0;

        if (this.searchTimeout) clearTimeout(this.searchTimeout);

        if (query.length < 2) {
            this.state.results = [];
            return;
        }

        this.state.loading = true;
        this.searchTimeout = setTimeout(() => this.performSearch(query), 300);
    }

    async performSearch(query) {
        const results = [];

        // Якщо вибрана конкретна модель — шукаємо тільки по ній
        const modelsToSearch = this.state.activeModel
            ? [this.state.activeModel]
            : this.state.allModels;

        for (const modelInfo of modelsToSearch) {
            try {
                const records = await this.orm.searchRead(
                    modelInfo.model,
                    [["name", "ilike", query]],
                    ["id", "name"],
                    { limit: this.state.activeModel ? 20 : 5 }
                );
                for (const record of records) {
                    results.push({
                        id: modelInfo.model + "_" + record.id,
                        record_id: record.id,
                        name: record.name,
                        model: modelInfo.model,
                        model_name: modelInfo.name,
                    });
                }
            } catch (e) {}
        }
        this.state.results = results;
        this.state.loading = false;
    }

    async openRecord(result) {
        this.props.close();
        await this.action.doAction({
            type: "ir.actions.act_window",
            name: result.model_name,
            res_model: result.model,
            res_id: result.record_id,
            views: [[false, "form"]],
            target: "current",
        });
    }

    onKeyDown(event) {
        if (event.key === "ArrowDown") {
            this.state.selectedIndex = Math.min(
                this.state.selectedIndex + 1,
                this.state.results.length - 1
            );
        } else if (event.key === "ArrowUp") {
            this.state.selectedIndex = Math.max(this.state.selectedIndex - 1, 0);
        } else if (event.key === "Enter" && this.state.results.length > 0) {
            this.openRecord(this.state.results[this.state.selectedIndex]);
        } else if (event.key === "Escape") {
            this.props.close();
        }
    }
}

patch(NavBar.prototype, {
    setup() {
        super.setup();
        this.dialog = useService("dialog");
    },

    openHKSearch() {
        this.dialog.add(HKSearchDialog, {});
    },
});
