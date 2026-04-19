{
    'name': 'HK Search Record Name',
    'version': '17.0.1.0.0',
    'category': 'Custom',
    'summary': 'Global search button in menu bar to quickly find any record',
    'description': """
        HK Search Record Name
        ====================

        This module adds a powerful global search button directly in the Odoo menu bar.

        Features:
        - Quick access search button in the top menu
        - Search across all models and records
        - Fast and intuitive user interface
        - Seamless integration with Odoo backend

        Technical Details:
        - Compatible with Odoo 17+
        - Uses standard Odoo web framework
        - No external dependencies

        Installation:
        Simply install the module and the search button will appear in your menu bar.

        Support:
        For issues or feature requests, please contact the author.
    """,
    'author': 'alwayspure',
    'license': 'LGPL-3',
    'images': [
        'static/description/icon.png',
        'static/description/cover.png',
    ]
    'sequence': 100,
    'price': 0,
    'currency': 'EUR',
    'website': '',
    'support': '',
    'depends': [
        'web',
    ],
    'data': [],
    'assets': {
        'web.assets_backend': [
    'hk_search_record_name/static/src/search_button.js',
    'hk_search_record_name/static/src/search_button.xml',
    'hk_search_record_name/static/src/search_button.scss',
],
    },
    'external_dependencies': {
        'python': [],
        'bin': [],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'uninstall_hook': None,
    'post_init_hook': None,
    'pre_init_hook': None,
    'cloc_exclude': [
        'static/**/*',
    ],
}
