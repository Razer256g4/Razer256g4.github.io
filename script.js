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
// ---- Running dog sprite: movement + bouncing + "pet" dialogue ----
const dog = document.getElementById("dog-runner");
const dogDialogue = document.getElementById("dog-dialogue");

if (dog) {
  let x = 40;
  let y = 40;


// Base velocity (px per frame)
  const BASE_VX = 1.8;
  const BASE_VY = 1.2;

  // Current velocity
  let vx = BASE_VX;
  let vy = BASE_VY;

  const frameSize = 16;
  const scale = 3;
  const dogSize = frameSize * scale;

  const petLines = [
    "Thanks for the pats! 🐾",
    "Woof! That feels nice.",
    "Best dev ever.",
    "More pets, please.",
    "I’ll run faster for you!"
  ];

  let hideBubbleTimeout;
  let sitTimeout;
  let isSitting = false;
  function showBubble(text) {
    if (!dogDialogue) return;
    dogDialogue.textContent = text;
    dogDialogue.classList.add("is-visible");

    if (hideBubbleTimeout) clearTimeout(hideBubbleTimeout);
    hideBubbleTimeout = setTimeout(() => {
      dogDialogue.classList.remove("is-visible");
    }, 2000);
  }

  function updateDogPosition() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
      // Only move if not sitting
    if (!isSitting) {
    x += vx;
    y += vy;

    

    // Bounce on left/right edges
    if (x < 0) {
      x = 0;
      vx = Math.abs(vx);
      dog.classList.remove("is-left"); // face right
    } else if (x > vw - dogSize) {
      x = vw - dogSize;
      vx = -Math.abs(vx);
      dog.classList.add("is-left"); // face left
    }

    // Bounce on top/bottom edges
    if (y < 0) {
      y = 0;
      vy = Math.abs(vy);
    } else if (y > vh - dogSize - 40) {
      y = vh - dogSize - 40;
      vy = -Math.abs(vy);
    }

    dog.style.left = `${x}px`;
    dog.style.bottom = `${y}px`;

    // Keep bubble near the dog
    if (dogDialogue) {
      dogDialogue.style.left = `${x}px`;
      dogDialogue.style.bottom = `${y + dogSize + 8}px`;
    }
    }
    requestAnimationFrame(updateDogPosition);
  }

  // Click = pet: small speed boost + dialogue
  dog.addEventListener("click", () => {
    // speed boost
 if (isSitting) return;

    isSitting = true;

    // stop movement
    vx = 0;
    vy = 0;

    // switch to sitting animation
    dog.classList.add("is-sitting");

    // little dialogue
    const line = petLines[Math.floor(Math.random() * petLines.length)];
    showBubble(line);

    if (sitTimeout) clearTimeout(sitTimeout);
    sitTimeout = setTimeout(() => {
      // stand up and run again
      isSitting = false;
      dog.classList.remove("is-sitting");

      // restore base speed in the direction dog is currently facing
      const facingLeft = dog.classList.contains("is-left");
      vx = facingLeft ? -BASE_VX : BASE_VX;

      // small vertical speed so it keeps bouncing
      vy = BASE_VY;
    }, 5000); // sit for 5 seconds
  });
  requestAnimationFrame(updateDogPosition);
}



// Initial render
renderProjects();
