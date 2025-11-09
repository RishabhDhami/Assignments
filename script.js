// ============================
// Assignment Hub v3.0 - Enhanced JavaScript
// by Rishabh Dhami
// ============================

// ============================
// Enhanced Assignment Data with College & Branch
// ============================
const assignments = [
  { title: "COA Assignment 1", subject: "COA", file: "assignments/COA/COA Assignment  1.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "COA Assignment 2", subject: "COA", file: "assignments/COA/COA Assignment  2.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "COA Assignment 3", subject: "COA", file: "assignments/COA/COA Assignment  3.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "COA Assignment 4", subject: "COA", file: "assignments/COA/COA Assignment  4.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DLM Lab Practical 1", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 1.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 2", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 2.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 3", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 3.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 4", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 4.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 5", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 5.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 6", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 6.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 7", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 7.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Lab Practical 8", subject: "DLM", file: "assignments/DLM/DLM Lab Pratical 8.pdf", college: "SPPU", branch: "ENTC", type: "lab" },
  { title: "DLM Theory Assignment 1", subject: "DLM", file: "assignments/DLM/DLM Theory Assignment 1.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DLM Theory Assignment 2", subject: "DLM", file: "assignments/DLM/DLM Theory Assignment 2.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DLM Theory Assignment 3", subject: "DLM", file: "assignments/DLM/DLM Theory Assignment 3.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DLM Theory Assignment 4", subject: "DLM", file: "assignments/DLM/DLM Theory Assignment 4.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DLM Theory Assignment 5", subject: "DLM", file: "assignments/DLM/DLM Theory Assignment 5.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DM Assignment 2", subject: "DM", file: "assignments/DM/DM Assignment 2.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DM Assignment 3", subject: "DM", file: "assignments/DM/DM Assignment 3.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DM Assignment 4", subject: "DM", file: "assignments/DM/DM Assignment 4.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DM Assignment 5", subject: "DM", file: "assignments/DM/DM Assignment 5.pdf", college: "SPPU", branch: "ENTC", type: "assignment" },
  { title: "DSA Lab Assignment 1", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 1.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 2", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 2.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 3", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 3.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 4", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 4.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 5", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 5.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 6", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 6.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 7", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 7.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 8", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 8.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 9", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 9.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Lab Assignment 10", subject: "DSA", file: "assignments/DSA/DSA Lab Assignment 10.pdf", college: "SPPU", branch: "CSE", type: "lab" },
  { title: "DSA Theory Assignment 1", subject: "DSA", file: "assignments/DSA/DSA Theory Assignment 1.pdf", college: "SPPU", branch: "CSE", type: "assignment" },
  { title: "DSA Theory Assignment 2", subject: "DSA", file: "assignments/DSA/DSA Theory Assignment 2.pdf", college: "SPPU", branch: "CSE", type: "assignment" },
  { title: "DSA Theory Assignment 3", subject: "DSA", file: "assignments/DSA/DSA Theory Assignment 3.pdf", college: "SPPU", branch: "CSE", type: "assignment" },
  { title: "DSA Theory Assignment 4", subject: "DSA", file: "assignments/DSA/DSA Theory Assignment 4.pdf", college: "SPPU", branch: "CSE", type: "assignment" },
  { title: "DSA Theory Assignment 5", subject: "DSA", file: "assignments/DSA/DSA Theory Assignment 5.pdf", college: "SPPU", branch: "CSE", type: "assignment" },
];

// ============================
// State Management
// ============================
let state = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  completed: JSON.parse(localStorage.getItem('completed')) || [],
  recentViews: JSON.parse(localStorage.getItem('recentViews')) || [],
  currentTab: 'home',
  filters: {
    college: 'all',
    branch: 'all',
    subject: 'all',
    resourceType: 'all',
    collectionView: 'favorites'
  }
};

// ============================
// Helper Functions
// ============================
const $ = (id) => document.getElementById(id);
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// ============================
// Theme Management
// ============================
function applyTheme() {
  const body = $('body');
  const icon = $('themeIcon');
  
  if (state.darkMode) {
    body.classList.add('dark');
    icon.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    icon.textContent = '🌙';
  }
  save('darkMode', state.darkMode);
}

$('themeToggle')?.addEventListener('click', () => {
  state.darkMode = !state.darkMode;
  applyTheme();
});

// ============================
// Tab Navigation
// ============================
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  $(`${tabName}Tab`)?.classList.add('active');
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
  
  state.currentTab = tabName;
  
  // Render content based on tab
  if (tabName === 'home') renderFeatured();
  if (tabName === 'browse') renderBrowse();
  if (tabName === 'resources') renderResources();
  if (tabName === 'collection') renderCollection();
  
  // Close mobile menu
  $('mobileMenu')?.classList.add('hidden');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showTab = showTab;

// ============================
// Mobile Menu Toggle
// ============================
$('mobileMenuBtn')?.addEventListener('click', () => {
  $('mobileMenu')?.classList.toggle('hidden');
});

// ============================
// Statistics Update
// ============================
function updateStats() {
  const subjects = new Set(assignments.map(a => a.subject)).size;
  
  // Update all stat displays
  ['totalCountHome'].forEach(id => {
    const el = $(id);
    if (el) el.textContent = assignments.length;
  });
  
  ['favCountHome', 'favCountCollection'].forEach(id => {
    const el = $(id);
    if (el) el.textContent = state.favorites.length;
  });
  
  ['subjectCountHome'].forEach(id => {
    const el = $(id);
    if (el) el.textContent = subjects;
  });
  
  ['completedCountHome', 'completedCountCollection'].forEach(id => {
    const el = $(id);
    if (el) el.textContent = state.completed.length;
  });
  
  // Update resource type counts
  const typeCounts = {
    all: assignments.length,
    assignment: assignments.filter(a => a.type === 'assignment').length,
    notes: assignments.filter(a => a.type === 'notes').length,
    lab: assignments.filter(a => a.type === 'lab').length
  };
  
  Object.entries(typeCounts).forEach(([type, count]) => {
    const el = $(`count${type.charAt(0).toUpperCase() + type.slice(1)}`);
    if (el) el.textContent = `${count} items`;
  });
}

// ============================
// Favorites & Completion
// ============================
function toggleFavorite(index) {
  const idx = state.favorites.indexOf(index);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
  } else {
    state.favorites.push(index);
  }
  save('favorites', state.favorites);
  updateStats();
  renderCurrentView();
}

function toggleCompleted(index) {
  const idx = state.completed.indexOf(index);
  if (idx > -1) {
    state.completed.splice(idx, 1);
  } else {
    state.completed.push(index);
  }
  save('completed', state.completed);
  updateStats();
  renderCurrentView();
}

function addToRecent(index) {
  state.recentViews = state.recentViews.filter(i => i !== index);
  state.recentViews.unshift(index);
  state.recentViews = state.recentViews.slice(0, 10);
  save('recentViews', state.recentViews);
}

window.toggleFavorite = toggleFavorite;
window.toggleCompleted = toggleCompleted;

// ============================
// Create Resource Card
// ============================
function createResourceCard(assignment, index) {
  const isFav = state.favorites.includes(index);
  const isComp = state.completed.includes(index);
  
  const typeIcons = {
    assignment: '📝',
    notes: '📖',
    lab: '🔬',
    default: '📄'
  };
  
  const icon = typeIcons[assignment.type] || typeIcons.default;
  
  return `
    <div class="resource-card" onclick="openPDF('${assignment.file}', '${assignment.title.replace(/'/g, "\\'")}'', ${index})">
      <div class="verified-badge">
        <span class="text-green-600 dark:text-green-400">✓</span>
        <span>Verified</span>
      </div>
      
      <div class="favorite-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${index});">
        ${isFav ? '⭐' : '☆'}
      </div>
      
      ${isComp ? '<div class="completion-badge">✓ Completed</div>' : ''}
      
      <div class="text-6xl mb-4 text-center">${icon}</div>
      
      <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">${assignment.title}</h3>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="subject-badge ${assignment.subject}">${assignment.subject}</span>
        <span class="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">${assignment.branch}</span>
      </div>
      
      <button class="btn-primary w-full" onclick="event.stopPropagation(); openPDF('${assignment.file}', '${assignment.title.replace(/'/g, "\\'")}'', ${index});">
        📂 Open Resource
      </button>
    </div>
  `;
}

// ============================
// Render Functions
// ============================
function renderFeatured() {
  const container = $('featuredGrid');
  if (!container) return;
  
  const featured = assignments.slice(0, 6);
  container.innerHTML = featured.map((a, i) => createResourceCard(a, i)).join('');
}

function renderBrowse() {
  const container = $('browseGrid');
  const empty = $('browseEmpty');
  if (!container) return;
  
  // Apply filters
  let filtered = assignments.map((a, idx) => ({ ...a, index: idx }));
  
  if (state.filters.college !== 'all') {
    filtered = filtered.filter(a => a.college === state.filters.college);
  }
  if (state.filters.branch !== 'all') {
    filtered = filtered.filter(a => a.branch === state.filters.branch);
  }
  if (state.filters.subject !== 'all') {
    filtered = filtered.filter(a => a.subject === state.filters.subject);
  }
  
  if (filtered.length === 0) {
    container.innerHTML = '';
    empty?.classList.remove('hidden');
  } else {
    empty?.classList.add('hidden');
    container.innerHTML = filtered.map(a => createResourceCard(a, a.index)).join('');
  }
}

function renderResources() {
  const container = $('resourcesGrid');
  if (!container) return;
  
  let filtered = assignments.map((a, idx) => ({ ...a, index: idx }));
  
  if (state.filters.resourceType !== 'all') {
    filtered = filtered.filter(a => a.type === state.filters.resourceType);
  }
  
  container.innerHTML = filtered.map(a => createResourceCard(a, a.index)).join('');
}

function renderCollection() {
  const container = $('collectionGrid');
  const empty = $('collectionEmpty');
  if (!container) return;
  
  let filtered = [];
  
  if (state.filters.collectionView === 'favorites') {
    filtered = state.favorites.map(idx => ({ ...assignments[idx], index: idx }));
  } else if (state.filters.collectionView === 'completed') {
    filtered = state.completed.map(idx => ({ ...assignments[idx], index: idx }));
  } else if (state.filters.collectionView === 'recent') {
    filtered = state.recentViews.map(idx => ({ ...assignments[idx], index: idx }));
  }
  
  if (filtered.length === 0) {
    container.innerHTML = '';
    empty?.classList.remove('hidden');
  } else {
    empty?.classList.add('hidden');
    container.innerHTML = filtered.map(a => createResourceCard(a, a.index)).join('');
  }
}

function renderCurrentView() {
  if (state.currentTab === 'home') renderFeatured();
  if (state.currentTab === 'browse') renderBrowse();
  if (state.currentTab === 'resources') renderResources();
  if (state.currentTab === 'collection') renderCollection();
}

// ============================
// Filter Functions
// ============================
function populateSubjectFilter() {
  const select = $('subjectFilterBrowse');
  if (!select) return;
  
  const subjects = [...new Set(assignments.map(a => a.subject))].sort();
  subjects.forEach(sub => {
    const opt = document.createElement('option');
    opt.value = sub;
    opt.textContent = sub;
    select.appendChild(opt);
  });
}

$('collegeFilter')?.addEventListener('change', (e) => {
  state.filters.college = e.target.value;
  renderBrowse();
});

$('branchFilter')?.addEventListener('change', (e) => {
  state.filters.branch = e.target.value;
  renderBrowse();
});

$('subjectFilterBrowse')?.addEventListener('change', (e) => {
  state.filters.subject = e.target.value;
  renderBrowse();
});

function filterResourceType(type) {
  state.filters.resourceType = type;
  
  document.querySelectorAll('.resource-type-card').forEach(card => {
    card.classList.remove('active');
  });
  document.querySelector(`[data-type="${type}"]`)?.classList.add('active');
  
  renderResources();
}

window.filterResourceType = filterResourceType;

function showCollectionView(view) {
  state.filters.collectionView = view;
  
  document.querySelectorAll('.collection-view-card').forEach(card => {
    card.classList.remove('active');
  });
  document.querySelector(`[data-view="${view}"]`)?.classList.add('active');
  
  renderCollection();
}

window.showCollectionView = showCollectionView;

// ============================
// PDF Modal
// ============================
function openPDF(url, title, index) {
  $('pdfTitle').textContent = title;
  $('downloadLink').href = url;
  $('downloadLink').download = title + '.pdf';
  $('pdfViewer').src = url;
  
  $('pdfModal').classList.remove('hidden');
  $('pdfModal').classList.add('flex');
  
  addToRecent(index);
  document.body.style.overflow = 'hidden';
}

function closePDF() {
  $('pdfModal').classList.add('hidden');
  $('pdfModal').classList.remove('flex');
  $('pdfViewer').src = '';
  document.body.style.overflow = 'auto';
}

window.openPDF = openPDF;
window.closePDF = closePDF;

$('closeModal')?.addEventListener('click', closePDF);
$('pdfModal')?.addEventListener('click', (e) => {
  if (e.target === $('pdfModal')) closePDF();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePDF();
});

// ============================
// Initialization
// ============================
function init() {
  console.log('🚀 Assignment Hub v3.0 initialized');
  console.log('📚 Total resources:', assignments.length);
  
  applyTheme();
  populateSubjectFilter();
  updateStats();
  renderFeatured();
}

window.addEventListener('DOMContentLoaded', init);