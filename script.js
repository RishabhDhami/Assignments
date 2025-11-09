// ============================
// Assignment Hub - Advanced JavaScript
// by Rishabh Dhami
// Version 2.0.0
// ============================

// ============================
// Static Assignment Data
// ============================
const assignments = [
  { "title": "COA Assignment 1", "subject": "COA", "file": "assignments/COA/COA Assignment  1.pdf" },
  { "title": "COA Assignment 2", "subject": "COA", "file": "assignments/COA/COA Assignment  2.pdf" },
  { "title": "COA Assignment 3", "subject": "COA", "file": "assignments/COA/COA Assignment  3.pdf" },
  { "title": "COA Assignment 4", "subject": "COA", "file": "assignments/COA/COA Assignment  4.pdf" },
  { "title": "DLM Lab Practical 1", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 1.pdf" },
  { "title": "DLM Lab Practical 2", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 2.pdf" },
  { "title": "DLM Lab Practical 3", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 3.pdf" },
  { "title": "DLM Lab Practical 4", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 4.pdf" },
  { "title": "DLM Lab Practical 5", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 5.pdf" },
  { "title": "DLM Lab Practical 6", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 6.pdf" },
  { "title": "DLM Lab Practical 7", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 7.pdf" },
  { "title": "DLM Lab Practical 8", "subject": "DLM", "file": "assignments/DLM/DLM Lab Pratical 8.pdf" },
  { "title": "DLM Theory Assignment 1", "subject": "DLM", "file": "assignments/DLM/DLM Theory Assignment 1.pdf" },
  { "title": "DLM Theory Assignment 2", "subject": "DLM", "file": "assignments/DLM/DLM Theory Assignment 2.pdf" },
  { "title": "DLM Theory Assignment 3", "subject": "DLM", "file": "assignments/DLM/DLM Theory Assignment 3.pdf" },
  { "title": "DLM Theory Assignment 4", "subject": "DLM", "file": "assignments/DLM/DLM Theory Assignment 4.pdf" },
  { "title": "DLM Theory Assignment 5", "subject": "DLM", "file": "assignments/DLM/DLM Theory Assignment 5.pdf" },
  { "title": "DM Assignment 2", "subject": "DM", "file": "assignments/DM/DM Assignment 2.pdf" },
  { "title": "DM Assignment 3", "subject": "DM", "file": "assignments/DM/DM Assignment 3.pdf" },
  { "title": "DM Assignment 4", "subject": "DM", "file": "assignments/DM/DM Assignment 4.pdf" },
  { "title": "DM Assignment 5", "subject": "DM", "file": "assignments/DM/DM Assignment 5.pdf" },
  { "title": "DSA Lab Assignment 1", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 1.pdf" },
  { "title": "DSA Lab Assignment 2", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 2.pdf" },
  { "title": "DSA Lab Assignment 3", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 3.pdf" },
  { "title": "DSA Lab Assignment 4", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 4.pdf" },
  { "title": "DSA Lab Assignment 5", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 5.pdf" },
  { "title": "DSA Lab Assignment 6", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 6.pdf" },
  { "title": "DSA Lab Assignment 7", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 7.pdf" },
  { "title": "DSA Lab Assignment 8", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 8.pdf" },
  { "title": "DSA Lab Assignment 9", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 9.pdf" },
  { "title": "DSA Lab Assignment 10", "subject": "DSA", "file": "assignments/DSA/DSA Lab Assignment 10.pdf" },
  { "title": "DSA Theory Assignment 1", "subject": "DSA", "file": "assignments/DSA/DSA Theory Assignment 1.pdf" },
  { "title": "DSA Theory Assignment 2", "subject": "DSA", "file": "assignments/DSA/DSA Theory Assignment 2.pdf" },
  { "title": "DSA Theory Assignment 3", "subject": "DSA", "file": "assignments/DSA/DSA Theory Assignment 3.pdf" },
  { "title": "DSA Theory Assignment 4", "subject": "DSA", "file": "assignments/DSA/DSA Theory Assignment 4.pdf" },
  { "title": "DSA Theory Assignment 5", "subject": "DSA", "file": "assignments/DSA/DSA Theory Assignment 5.pdf" },
];

// ============================
// DOM Elements
// ============================
const $ = (id) => document.getElementById(id);
const $$ = (selector) => document.querySelectorAll(selector);

const body = $('body');
const container = $('assignmentsGrid');
const emptyState = $('emptyState');
const searchBox = $('searchBox');
const subjectFilter = $('subjectFilter');
const statusFilter = $('statusFilter');
const viewFilter = $('viewFilter');
const sortBy = $('sortBy');
const themeToggle = $('themeToggle');
const themeIcon = $('themeIcon');
const themeText = $('themeText');

// Statistics
const totalCount = $('totalCount');
const favCount = $('favCount');
const subjectCount = $('subjectCount');
const completedCount = $('completedCount');
const headerTotal = $('headerTotal');

// PDF Modal
const pdfModal = $('pdfModal');
const pdfViewer = $('pdfViewer');
const pdfTitle = $('pdfTitle');
const downloadLink = $('downloadLink');
const closeModal = $('closeModal');
const pdfLoading = $('pdfLoading');

// ============================
// State Management
// ============================
let state = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  completed: JSON.parse(localStorage.getItem('completed')) || [],
  searchTerm: '',
  selectedSubject: 'all',
  selectedStatus: 'all',
  selectedView: 'all',
  sortOrder: 'default'
};

// ============================
// LocalStorage Helper
// ============================
const storage = {
  save: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  get: (key) => JSON.parse(localStorage.getItem(key)),
};

// ============================
// Theme Management
// ============================
function applyTheme() {
  if (state.darkMode) {
    body.classList.add('dark');
    themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Light';
  } else {
    body.classList.remove('dark');
    themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Dark';
  }
  storage.save('darkMode', state.darkMode);
}

themeToggle?.addEventListener('click', () => {
  state.darkMode = !state.darkMode;
  applyTheme();
});

// ============================
// Favorites Management
// ============================
function toggleFavorite(index) {
  const idx = state.favorites.indexOf(index);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
  } else {
    state.favorites.push(index);
  }
  storage.save('favorites', state.favorites);
  updateStatistics();
  renderAssignments();
}

function isFavorite(index) {
  return state.favorites.includes(index);
}

// ============================
// Completion Management
// ============================
function toggleCompleted(index) {
  const idx = state.completed.indexOf(index);
  if (idx > -1) {
    state.completed.splice(idx, 1);
  } else {
    state.completed.push(index);
  }
  storage.save('completed', state.completed);
  updateStatistics();
  renderAssignments();
}

function isCompleted(index) {
  return state.completed.includes(index);
}

// ============================
// Subject Filter Population
// ============================
function populateSubjects() {
  const subjects = [...new Set(assignments.map(a => a.subject))].sort();
  subjects.forEach(sub => {
    const opt = document.createElement('option');
    opt.value = sub;
    opt.textContent = `📚 ${sub}`;
    subjectFilter.appendChild(opt);
  });
}

// ============================
// Statistics Update
// ============================
function updateStatistics() {
  const subjects = new Set(assignments.map(a => a.subject)).size;
  
  // Animate counter
  animateValue(totalCount, 0, assignments.length, 1000);
  animateValue(favCount, 0, state.favorites.length, 1000);
  animateValue(subjectCount, 0, subjects, 1000);
  animateValue(completedCount, 0, state.completed.length, 1000);
  
  if (headerTotal) {
    headerTotal.textContent = assignments.length;
  }
}

function animateValue(element, start, end, duration) {
  if (!element) return;
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ============================
// Fuzzy Search Implementation
// ============================
function fuzzyMatch(str, pattern) {
  const strLower = str.toLowerCase();
  const patternLower = pattern.toLowerCase();
  let patternIdx = 0;
  
  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === patternLower[patternIdx]) {
      patternIdx++;
    }
    if (patternIdx === patternLower.length) return true;
  }
  
  return patternIdx === patternLower.length;
}

// ============================
// Filter & Sort Logic
// ============================
function getFilteredAssignments() {
  let filtered = assignments.map((a, idx) => ({ ...a, index: idx }));
  
  // Search filter
  if (state.searchTerm) {
    filtered = filtered.filter(a => 
      fuzzyMatch(a.title, state.searchTerm) || 
      fuzzyMatch(a.subject, state.searchTerm)
    );
  }
  
  // Subject filter
  if (state.selectedSubject !== 'all') {
    filtered = filtered.filter(a => a.subject === state.selectedSubject);
  }
  
  // Status filter
  if (state.selectedStatus === 'completed') {
    filtered = filtered.filter(a => isCompleted(a.index));
  } else if (state.selectedStatus === 'pending') {
    filtered = filtered.filter(a => !isCompleted(a.index));
  }
  
  // View filter
  if (state.selectedView === 'favorites') {
    filtered = filtered.filter(a => isFavorite(a.index));
  }
  
  // Sorting
  switch (state.sortOrder) {
    case 'title-asc':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'title-desc':
      filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'subject-asc':
      filtered.sort((a, b) => a.subject.localeCompare(b.subject));
      break;
  }
  
  return filtered;
}

// ============================
// Render Assignments
// ============================
function renderAssignments() {
  const filtered = getFilteredAssignments();
  container.innerHTML = '';
  
  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  
  filtered.forEach((a, displayIdx) => {
    const card = document.createElement('div');
    card.className = 'assignment-card';
    card.style.animationDelay = `${displayIdx * 0.05}s`;
    
    const isFav = isFavorite(a.index);
    const isComp = isCompleted(a.index);
    
    card.innerHTML = `
      <div class="completed-checkbox ${isComp ? 'completed' : ''}" 
           onclick="event.stopPropagation(); toggleCompleted(${a.index});"
           title="${isComp ? 'Mark as pending' : 'Mark as completed'}">
        ${isComp ? '✓' : ''}
      </div>
      
      <div class="favorite-btn ${isFav ? 'active' : ''}" 
           onclick="event.stopPropagation(); toggleFavorite(${a.index});"
           title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
        ${isFav ? '⭐' : '☆'}
      </div>
      
      <div class="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
        📄
      </div>
      
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
        ${a.title}
      </h3>
      
      <span class="subject-badge ${a.subject} mb-4 inline-block">
        ${a.subject}
      </span>
      
      <button 
        onclick="openPDF('${a.file}', '${a.title.replace(/'/g, "\\'")}')"
        class="btn-primary w-full mt-auto">
        📂 Open Assignment
      </button>
    `;
    
    container.appendChild(card);
  });
}

// ============================
// PDF Modal Management
// ============================
function openPDF(url, title) {
  pdfTitle.textContent = title;
  downloadLink.href = url;
  downloadLink.download = title + '.pdf';
  
  pdfModal.classList.remove('hidden');
  pdfModal.classList.add('flex');
  pdfLoading.classList.remove('hidden');
  
  pdfViewer.src = url;
  
  pdfViewer.onload = () => {
    setTimeout(() => {
      pdfLoading.classList.add('hidden');
    }, 500);
  };
  
  // Prevent body scroll
  body.style.overflow = 'hidden';
}

function closePDF() {
  pdfModal.classList.add('hidden');
  pdfModal.classList.remove('flex');
  pdfViewer.src = '';
  body.style.overflow = 'auto';
}

closeModal?.addEventListener('click', closePDF);

pdfModal?.addEventListener('click', (e) => {
  if (e.target === pdfModal) {
    closePDF();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !pdfModal.classList.contains('hidden')) {
    closePDF();
  }
});

// ============================
// Event Listeners
// ============================
searchBox?.addEventListener('input', (e) => {
  state.searchTerm = e.target.value;
  renderAssignments();
});

subjectFilter?.addEventListener('change', (e) => {
  state.selectedSubject = e.target.value;
  renderAssignments();
});

statusFilter?.addEventListener('change', (e) => {
  state.selectedStatus = e.target.value;
  renderAssignments();
});

viewFilter?.addEventListener('change', (e) => {
  state.selectedView = e.target.value;
  renderAssignments();
});

sortBy?.addEventListener('change', (e) => {
  state.sortOrder = e.target.value;
  renderAssignments();
});

// ============================
// Initialization
// ============================
function init() {
  console.log('🚀 Assignment Hub v2.0.0 by Rishabh Dhami');
  console.log('📊 Total Assignments:', assignments.length);
  
  applyTheme();
  populateSubjects();
  updateStatistics();
  renderAssignments();
  
  // Add fade-in animation to body
  setTimeout(() => {
    body.style.opacity = '1';
  }, 100);
}

// ============================
// Performance Optimization
// ============================
// Debounce search input
let searchTimeout;
const originalSearchListener = searchBox?.oninput;
searchBox?.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    state.searchTerm = e.target.value;
    renderAssignments();
  }, 300);
});

// ============================
// Window Load Event
// ============================
window.addEventListener('DOMContentLoaded', init);

// ============================
// Service Worker Registration (for future PWA)
// ============================
if ('serviceWorker' in navigator) {
  // Uncomment when you add a service worker
  // navigator.serviceWorker.register('/sw.js');
}

// ============================
// Global Functions (for inline onclick handlers)
// ============================
window.toggleFavorite = toggleFavorite;
window.toggleCompleted = toggleCompleted;
window.openPDF = openPDF;
window.closePDF = closePDF;