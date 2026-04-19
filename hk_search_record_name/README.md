# HK Search Record Name

A powerful Odoo module that adds a global search button directly in the menu bar for quick access to any record in your system.

## 🎯 Features

- **Quick Search**: Global search button in the top menu bar
- **Fast Access**: Quickly find any record across all models
- **User-Friendly**: Intuitive interface integrated with Odoo backend
- **Seamless Integration**: Works with Odoo 17+ without additional configuration
- **No External Dependencies**: Uses standard Odoo web framework

## 📋 Requirements

- Odoo 17.0+
- Web module (included in Odoo core)
- Python 3.8+

## 📥 Installation

### Method 1: From Odoo App Store
1. Go to Apps menu in Odoo
2. Search for "HK Search Record Name"
3. Click Install

### Method 2: From Source
```bash
cd /path/to/odoo/addons
git clone https://github.com/yourusername/hk_search_record_name.git
cd hk_search_record_name
```

Then restart Odoo and install the module:
1. Open Odoo
2. Go to Apps > Update Apps List
3. Search for "HK Search Record Name"
4. Click Install

## 🚀 Usage

Once installed, you'll see a new search button in the top menu bar.

1. Click the search button (magnifying glass icon)
2. Type the record name or number you're looking for
3. Results will appear instantly
4. Click on a result to open the record

## 🔧 Technical Details

### File Structure
```
hk_search_record_name/
├── __init__.py
├── __manifest__.py
├── icon.png
└── static/
    └── src/
        ├── search_button.xml
        ├── search_button.js
        └── search_button.scss
```

### Assets
- **XML**: UI component template
- **JavaScript**: Search functionality and event handling
- **SCSS**: Styling for the search button

## 📝 License

This module is released under the LGPL-3 License.
See the LICENSE file for details.

## 👨‍💻 Author

**alwayspure**
- Email: prachyshyn@gmail.com


## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have feature requests, please:
1. Check existing issues first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Screenshots if applicable
   - Your Odoo version

## 📚 Documentation

For more information about Odoo module development:
- [Odoo Module Development](https://www.odoo.com/documentation/17.0/developer.html)
- [OCA Guidelines](https://github.com/OCA/maintainer-tools/blob/master/guidelines.md)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 💬 Support

Need help? Contact us at:
- Email: hk@example.com
- Documentation: https://example.com/docs
- GitHub Issues: https://github.com/yourusername/hk_search_record_name/issues

## 📄 Changelog

### Version 17.0.1.0.0 (Initial Release)
- Added global search button to menu bar
- Basic search functionality across all models
- Initial UI implementation

---

**Enjoy faster record searching! 🎉**
