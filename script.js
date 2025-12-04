// Project data – edit this array to update your Projects section.
const projects = [
  {
    title: "Aus Renewable Energy Analytics",
    tag: "data",
    badge: "Data Engineering",
    description:
      "End-to-end pipeline using public Australian energy datasets, PostgreSQL, and visual dashboards.",
    tech: ["Python", "PostgreSQL", "Streamlit", "MQTT", "Docker"],
    repo: "https://github.com/YOUR_GITHUB_USERNAME/aus-renewable-energy-analytics",
    demo: ""
  },
  {
    title: "Network Simulator",
    tag: "systems",
    badge: "Systems",
    description:
      "Simulated Go-Back-N ARQ and TCP Reno behaviour with visual outputs for teaching and experiments.",
    tech: ["Python", "NumPy", "Matplotlib"],
    repo: "https://github.com/YOUR_GITHUB_USERNAME/network-sim",
    demo: ""
  },
  {
    title: "Portfolio Website",
    tag: "web",
    badge: "Web",
    description:
      "This portfolio: responsive layout, dynamic projects, and a calm visual design.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io",
    demo: "https://YOUR_GITHUB_USERNAME.github.io"
  }
];

const grid = document.getElementById("project-grid");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.tag = project.tag;

  card.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${project.title}</h3>
      <span class="card-badge">${project.badge}</span>
    </div>
    <p class="card-desc">${project.description}</p>
    <div class="card-meta">
      ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
    </div>
    <div class="card-links">
      ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener">Code →</a>` : ""}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live demo →</a>` : ""}
    </div>
  `;

  return card;
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";
  const visible = projects.filter(p => filter === "all" || p.tag === filter);

  visible.forEach(project => {
    grid.appendChild(createProjectCard(project));
  });

  if (visible.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "section-text";
    emptyMsg.textContent = "No projects in this category yet. Stay tuned.";
    grid.appendChild(emptyMsg);
  }
}

// Filter behaviour
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    renderProjects(filter);
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Initial render
renderProjects();
