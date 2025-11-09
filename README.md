# 📚 Assignment Hub v3.0

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Hope Bridge Style](https://img.shields.io/badge/design-Hope%20Bridge%20Hybrid-1976D2.svg)

> A professional, multi-tab platform for engineering students to access assignments, notes, and study resources across colleges and branches. Inspired by modern web design with Hope Bridge aesthetics.

## 🌟 Live Demo

**🔗 [Visit Assignment Hub](https://rishabhdhami.github.io/Assignments/)**

---

## 👨‍💻 Developer

**Rishabh Dhami**  
📧 Email: rishabhdhamI@gmail.com  
🎓 SPPU - Second Year ENTC  
💻 GitHub: [@RishabhDhami](https://github.com/RishabhDhami)

---

## ⚡ What's New in v3.0

### 🎨 **Hope Bridge Hybrid Design**
- Clean, professional blue color scheme (#1976D2)
- Verified resource badges
- Trust indicators throughout
- Modern card-based layouts
- Smooth animations and transitions

### 📑 **Multi-Tab Navigation**
- **Home**: Landing page with featured resources and stats
- **Browse**: Hierarchical filtering by college, branch, and subject
- **Resources**: Filter by resource type (Assignments, Notes, Lab Manuals)
- **My Collection**: View favorites, completed items, and recent views
- **About**: Project information and features

### 🎯 **Hierarchical Filtering**
- Filter by College/University (SPPU, MIT, VIT, Mumbai University)
- Filter by Branch (ENTC, CSE, IT, MECH, CIVIL)
- Filter by Subject (COA, DLM, DM, DSA, etc.)
- Filter by Resource Type (Assignments, Notes, Lab Manuals)

### 📈 **Enhanced Features**
- Multi-level resource categorization
- Smart collection management
- Recent views tracking
- Progress tracking per subject
- Verified resource indicators
- Mobile-responsive design

---

## ✨ Key Features

### 🎨 **Professional UI/UX**
- Hope Bridge-inspired design language
- Clean blue theme with accent colors
- Card-based layouts with shadows
- Verified badges on all resources
- Smooth animations and micro-interactions
- Fully responsive mobile-first design

### 🌓 **Advanced Dark Mode**
- Seamless theme switching
- LocalStorage persistence
- Optimized colors for both themes
- Eye-friendly for extended study sessions

### 🔍 **Smart Filtering System**
- **Level 1**: College/University selection
- **Level 2**: Branch selection
- **Level 3**: Subject selection
- **Level 4**: Resource type filtering
- Real-time results
- Empty state handling

### ⭐ **Collection Management**
- **Favorites**: One-click bookmarking
- **Completed**: Track finished assignments
- **Recent Views**: Last 10 accessed resources
- Persistent storage across sessions

### 📊 **Statistics Dashboard**
- Total resources counter
- Favorites tracking
- Subject count
- Completion progress
- Animated counters

### 📥 **Enhanced PDF Viewer**
- In-browser preview
- Modern modal design
- Direct download functionality
- Keyboard shortcuts (ESC to close)
- Loading states

### 💾 **Data Persistence**
- LocalStorage for preferences
- Favorites saved
- Completion status saved
- Recent views history
- Theme preference saved

### ♿ **Accessibility**
- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader friendly
- High contrast ratios
- Focus indicators

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

3. **Add your resources**
   - Create folder structure: `assignments/[SUBJECT]/`
   - Add PDF files
   - Update the `assignments` array in `script.js`

---

## 🎯 Usage Guide

### Navigation

1. **Home Tab**
   - View featured resources
   - See overall statistics
   - Quick access to browse

2. **Browse Tab**
   - Select college/university
   - Choose engineering branch
   - Filter by subject
   - Browse filtered results

3. **Resources Tab**
   - Filter by type (Assignments, Notes, Labs)
   - View all resources of selected type
   - Quick access to materials

4. **My Collection Tab**
   - View favorite resources
   - Check completed assignments
   - Access recently viewed items

5. **About Tab**
   - Learn about the platform
   - See key features
   - Contact information

### Adding New Resources

```javascript
const assignments = [
  {
    title: "Assignment Title",
    subject: "SUBJECT_CODE",
    file: "assignments/SUBJECT/filename.pdf",
    college: "SPPU",
    branch: "ENTC",
    type: "assignment" // or "notes", "lab"
  },
];
```

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.x
- **Design**: Hope Bridge Hybrid Theme
- **Storage**: LocalStorage API
- **Hosting**: GitHub Pages

---

## 🎨 Design Philosophy

### Hope Bridge Inspiration

- **Trust & Credibility**: Verified badges, clean layouts
- **Professional Aesthetics**: Blue color scheme, card-based design
- **User Experience**: Clear navigation, intuitive filtering
- **Accessibility**: High contrast, keyboard navigation

### Color Palette

- **Primary Blue**: `#1976D2`
- **Teal**: `#00BFA5`
- **Orange**: `#FF6F00`
- **Green**: `#4CAF50`

---

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Supported |
| Firefox | 88+     | ✅ Supported |
| Safari  | 14+     | ✅ Supported |
| Edge    | 90+     | ✅ Supported |

---

## 📄 License

MIT License - Copyright (c) 2025 Rishabh Dhami

---

## 💬 Contact

📧 rishabhdhamI@gmail.com  
🐛 [GitHub Issues](https://github.com/RishabhDhami/Assignments/issues)

---

<div align="center">

### ⭐ Star this repository if it helped you!

**Made with ❤️ by Rishabh Dhami**

</div>