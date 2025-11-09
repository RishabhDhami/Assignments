# 📚 Assignment Hub

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

> A modern, feature-rich web portal for organizing and accessing engineering assignments with PDF preview, dark mode, and intelligent filtering.

## 🌟 Live Demo

**🔗 [Visit Assignment Hub](https://rishabhdhami.github.io/Assignments/)**

---

## 👨‍💻 Developer

**Rishabh Dhami**  
📧 Email: rishabhdhamI@gmail.com  
🎓 SPPU - Second Year Engineering  
💻 GitHub: [@RishabhDhami](https://github.com/RishabhDhami)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- Glassmorphism design with smooth gradients
- Bento grid layout for optimal content organization
- Fluid animations and micro-interactions
- Professional color-coded subject badges
- Responsive mobile-first design

### 🌓 **Advanced Dark Mode**
- Seamless theme switching with localStorage persistence
- Eye-friendly color schemes for extended study sessions
- Automatic preference saving

### 🔍 **Intelligent Search & Filter**
- Real-time fuzzy search across assignments
- Multi-level filtering (All Subjects, Favorites, Completed)
- Instant results with smooth transitions
- Search highlighting

### ⭐ **Favorites & Bookmarks**
- One-click favorite marking
- Persistent storage across sessions
- Quick access to important assignments
- Visual favorite indicators

### 📊 **Statistics Dashboard**
- Total assignments counter
- Favorites tracking
- Subject-wise distribution
- Animated progress indicators

### 📥 **Advanced PDF Management**
- In-browser PDF preview with modern modal
- Direct download functionality
- Responsive PDF viewer
- Keyboard shortcuts (ESC to close)

### 📈 **Progress Tracking**
- Mark assignments as completed
- Visual completion status
- Progress persistence
- Quick status toggle

### ♿ **Accessibility**
- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### 💾 **Data Persistence**
- LocalStorage for user preferences
- Automatic state saving
- Cross-session continuity

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for CDN resources

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RishabhDhami/Assignments.git
   cd Assignments
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve
   ```

3. **Add your assignments**
   - Create an `assignments/` folder structure
   - Organize PDFs by subject: `assignments/[SUBJECT]/[FILE].pdf`
   - Update the `assignments` array in `script.js`

---

## 📁 Project Structure

```
Assignments/
│
├── index.html              # Main HTML structure
├── script.js               # Core JavaScript functionality
├── style.css               # Custom styles & animations
├── package.json            # Project metadata
├── README.md               # Documentation
├── .gitignore             # Git ignore rules
│
└── assignments/           # PDF files organized by subject
    ├── COA/
    ├── DLM/
    ├── DM/
    ├── DSA/
    └── [OTHER_SUBJECTS]/
```

---

## 🎯 Usage Guide

### Adding New Assignments

1. Place PDF files in the appropriate subject folder
2. Update the `assignments` array in `script.js`:

```javascript
const assignments = [
  {
    "title": "Your Assignment Title",
    "subject": "SUBJECT_CODE",
    "file": "assignments/SUBJECT_CODE/filename.pdf"
  },
  // Add more assignments...
];
```

### Keyboard Shortcuts

- `ESC` - Close PDF modal
- `Tab` - Navigate through elements
- `Enter` - Open selected assignment
- `Space` - Toggle favorites (when focused)

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.x (CDN)
- **Icons**: Unicode Emojis & Custom Icons
- **Storage**: LocalStorage API
- **Hosting**: GitHub Pages

---

## 🎨 Customization

### Color Scheme

Edit the Tailwind classes in `index.html` or add custom CSS in `style.css`:

```css
:root {
  --primary-color: #2563eb;    /* Blue */
  --secondary-color: #10b981;  /* Green */
  --accent-color: #f59e0b;     /* Amber */
}
```

### Adding New Subjects

The portal automatically detects subjects from your assignments array. Just add assignments with new subject codes!

---

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |
| Opera   | 76+     | ✅ Fully Supported |

---

## 🐛 Known Issues

- None currently! 🎉

---

## 🔮 Future Enhancements

- [ ] Cloud sync for favorites & progress
- [ ] Assignment deadline notifications
- [ ] Collaborative notes feature
- [ ] Assignment submission tracking
- [ ] Integration with Google Drive/Dropbox
- [ ] PWA support for offline access
- [ ] Multi-language support
- [ ] Assignment sharing via QR codes
- [ ] Advanced analytics dashboard
- [ ] Calendar integration

---

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Rishabh Dhami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💬 Feedback & Support

If you have any questions, suggestions, or issues:

- 📧 Email: rishabhdhamI@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/RishabhDhami/Assignments/issues)
- ⭐ Star this repo if you find it helpful!

---

## 🙏 Acknowledgments

- Tailwind CSS for the amazing utility-first framework
- GitHub Pages for free hosting
- The open-source community for inspiration

---

<div align="center">

### ⭐ Star this repository if it helped you!

**Made with ❤️ by Rishabh Dhami**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=RishabhDhami.Assignments)

</div>