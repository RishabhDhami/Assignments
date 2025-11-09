// ============================
// Static Assignment Data
// ============================
// You just edit this list whenever you add files
const assignments = [
  {
    "title": "COA Assignment  1",
    "subject": "COA",
    "file": "assignments/COA/COA Assignment  1.pdf"
  },
  {
    "title": "COA Assignment  2",
    "subject": "COA",
    "file": "assignments/COA/COA Assignment  2.pdf"
  },
  {
    "title": "COA Assignment  3",
    "subject": "COA",
    "file": "assignments/COA/COA Assignment  3.pdf"
  },
  {
    "title": "COA Assignment  4",
    "subject": "COA",
    "file": "assignments/COA/COA Assignment  4.pdf"
  },
  {
    "title": "DLM Lab Pratical 1",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 1.pdf"
  },
  {
    "title": "DLM Lab Pratical 2",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 2.pdf"
  },
  {
    "title": "DLM Lab Pratical 3",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 3.pdf"
  },
  {
    "title": "DLM Lab Pratical 4",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 4.pdf"
  },
  {
    "title": "DLM Lab Pratical 5",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 5.pdf"
  },
  {
    "title": "DLM Lab Pratical 6",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 6.pdf"
  },
  {
    "title": "DLM Lab Pratical 7",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 7.pdf"
  },
  {
    "title": "DLM Lab Pratical 8",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Lab Pratical 8.pdf"
  },
  {
    "title": "DLM Theory Assignment 1",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Theory Assignment 1.pdf"
  },
  {
    "title": "DLM Theory Assignment 2",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Theory Assignment 2.pdf"
  },
  {
    "title": "DLM Theory Assignment 3",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Theory Assignment 3.pdf"
  },
  {
    "title": "DLM Theory Assignment 4",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Theory Assignment 4.pdf"
  },
  {
    "title": "DLM Theory Assignment 5",
    "subject": "DLM",
    "file": "assignments/DLM/DLM Theory Assignment 5.pdf"
  },
  {
    "title": "DM Assignment 2",
    "subject": "DM",
    "file": "assignments/DM/DM Assignment 2.pdf"
  },
  {
    "title": "DM Assignment 3",
    "subject": "DM",
    "file": "assignments/DM/DM Assignment 3.pdf"
  },
  {
    "title": "DM Assignment 4",
    "subject": "DM",
    "file": "assignments/DM/DM Assignment 4.pdf"
  },
  {
    "title": "DM Assignment 5",
    "subject": "DM",
    "file": "assignments/DM/DM Assignment 5.pdf"
  },
  {
    "title": "DSA Lab Assignment 1",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 1.pdf"
  },
  {
    "title": "DSA Lab Assignment 10",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 10.pdf"
  },
  {
    "title": "DSA Lab Assignment 2",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 2.pdf"
  },
  {
    "title": "DSA Lab Assignment 3",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 3.pdf"
  },
  {
    "title": "DSA Lab Assignment 4",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 4.pdf"
  },
  {
    "title": "DSA Lab Assignment 5",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 5.pdf"
  },
  {
    "title": "DSA Lab Assignment 6",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 6.pdf"
  },
  {
    "title": "DSA Lab Assignment 7",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 7.pdf"
  },
  {
    "title": "DSA Lab Assignment 8",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 8.pdf"
  },
  {
    "title": "DSA Lab Assignment 9",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Lab Assignment 9.pdf"
  },
  {
    "title": "DSA Theory Assignment 1",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Theory Assignment 1.pdf"
  },
  {
    "title": "DSA Theory Assignment 2",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Theory Assignment 2.pdf"
  },
  {
    "title": "DSA Theory Assignment 3",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Theory Assignment 3.pdf"
  },
  {
    "title": "DSA Theory Assignment 4",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Theory Assignment 4.pdf"
  },
  {
    "title": "DSA Theory Assignment 5",
    "subject": "DSA",
    "file": "assignments/DSA/DSA Theory Assignment 5.pdf"
  }
];

// ============================
// DOM Elements
// ============================
const container = document.getElementById("container");
const searchBox = document.getElementById("searchBox");
const subjectFilter = document.getElementById("subjectFilter");
const themeToggle = document.getElementById("themeToggle");
const body = document.getElementById("body");

// ============================
// Theme Toggle
// ============================
let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
function applyTheme() {
  if (darkMode) {
    body.classList.add("dark", "bg-gray-900", "text-white");
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    body.classList.remove("dark", "bg-gray-900", "text-white");
    themeToggle.textContent = "🌙 Dark Mode";
  }
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme();
});
applyTheme();

// ============================
// Build Subject Filter
// ============================
function populateSubjects() {
  const subjects = [...new Set(assignments.map(a => a.subject))];
  subjects.forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
    subjectFilter.appendChild(opt);
  });
}
populateSubjects();

// ============================
// Render Assignments
// ============================
function renderAssignments() {
  const search = searchBox.value.toLowerCase();
  const subject = subjectFilter.value;
  container.innerHTML = "";

  const filtered = assignments.filter(a =>
    (subject === "all" || a.subject === subject) &&
    (a.title.toLowerCase().includes(search) || a.subject.toLowerCase().includes(search))
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p class='col-span-full text-center text-gray-500 text-lg'>No assignments found 😕</p>`;
    return;
  }

  filtered.forEach(a => {
    const card = document.createElement("div");
    card.className =
      "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 text-center transition transform hover:scale-105 hover:shadow-xl";
    card.innerHTML = `
      <div class="text-5xl mb-3">📄</div>
      <h3 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">${a.title}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">${a.subject}</p>
      <button onclick="openPDF('${a.file}', '${a.title}')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        📂 Open
      </button>
    `;
    container.appendChild(card);
  });
}

// ============================
// PDF Modal Logic
// ============================
const pdfModal = document.getElementById("pdfModal");
const pdfViewer = document.getElementById("pdfViewer");
const pdfTitle = document.getElementById("pdfTitle");
const downloadLink = document.getElementById("downloadLink");
const closeModal = document.getElementById("closeModal");

function openPDF(url, title) {
  pdfViewer.src = url;
  pdfTitle.textContent = title;
  downloadLink.href = url;
  pdfModal.classList.remove("hidden");
  pdfModal.classList.add("flex");
}

closeModal.addEventListener("click", () => {
  pdfModal.classList.add("hidden");
  pdfModal.classList.remove("flex");
  pdfViewer.src = "";
});

pdfModal.addEventListener("click", (e) => {
  if (e.target === pdfModal) {
    pdfModal.classList.add("hidden");
    pdfModal.classList.remove("flex");
    pdfViewer.src = "";
  }
});

// ============================
// Events
// ============================
searchBox.addEventListener("input", renderAssignments);
subjectFilter.addEventListener("change", renderAssignments);

// Initial render
renderAssignments();
