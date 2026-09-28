// Project data – edit this array to update your Projects section.
const projects = [
  {
    title: "Footage to Video Pipeline",
    tag: "ai",
    badge: "AI",
    description:
      "Turns a folder of raw camera clips into finished 16:9 and 9:16 videos. An agent writes the edit as a plain data spec; deterministic ffmpeg code renders it, with Whisper-timed subtitles and music that ducks under dialogue.",
    tech: ["Python", "ffmpeg", "faster-whisper", "NumPy"],
    repo: "https://github.com/Razer256g4/footage-to-video-pipeline",
    demo: ""
  },
  {
    title: "Local-First RAG",
    tag: "ai",
    badge: "AI",
    description:
      "Document Q&A that never sends data to a third party. FastAPI, Chroma, and llama.cpp running Mistral 7B, with loaders for PDF, DOCX, HTML, and Markdown and a React frontend.",
    tech: ["FastAPI", "Chroma", "llama.cpp", "LangChain", "React"],
    repo: "https://github.com/Razer256g4/RAG_BE",
    demo: ""
  },
  {
    title: "SubtitleGen",
    tag: "ai",
    badge: "AI",
    description:
      "Offline desktop app that turns audio and video into SRT subtitles on a consumer GPU: source separation, loudness normalisation, and Whisper large-v3, with filters that stop the model hallucinating on silence.",
    tech: ["PySide6", "faster-whisper", "Demucs", "CUDA"],
    repo: "",
    demo: ""
  },
  {
    title: "Malaria Detection CNN",
    tag: "ai",
    badge: "AI",
    description:
      "TensorFlow CNN trained on the ~27.5K image NIH cell dataset, reaching over 90% validation accuracy, served through a Flask upload portal.",
    tech: ["TensorFlow", "Keras", "Flask"],
    repo: "https://github.com/Razer256g4/AI-project",
    demo: ""
  },
  {
    title: "PeerLink",
    tag: "web",
    badge: "Mobile",
    description:
      "Android student social app with friends, real-time chat, and a nearby students map. Student ID photos are verified on the phone with ML Kit, so the image never leaves the device.",
    tech: ["Kotlin", "Firebase", "ML Kit", "Google Maps"],
    repo: "https://github.com/Razer256g4/PeerLink",
    demo: ""
  },
  {
    title: "Hollis Park Cafe",
    tag: "web",
    badge: "Web",
    description:
      "Mobile-first cafe platform for customers and staff: menu, rewards with iPad QR check-in, role-based dashboards, and live staff chat.",
    tech: ["React", "Vite", "Firebase", "Tailwind"],
    repo: "",
    demo: ""
  },
  {
    title: "Restaurant POS",
    tag: "web",
    badge: "Web",
    description:
      "Cashier terminal and order backend, with Redux Toolkit for the cart, a FastAPI + PostgreSQL API in Docker Compose, and optional Razorpay payments.",
    tech: ["React", "Redux Toolkit", "FastAPI", "PostgreSQL"],
    repo: "",
    demo: ""
  },
  {
    title: "Australian NEM Energy Analytics",
    tag: "data",
    badge: "Data",
    description:
      "Near real-time pipeline over Australia's electricity market: 5 minute power and emissions readings for ~310 facilities published over MQTT, with a live Streamlit dashboard.",
    tech: ["Python", "MQTT", "Streamlit", "pandas"],
    repo: "https://github.com/Razer256g4/Aus-renewabl-energy-analytics",
    demo: ""
  },
  {
    title: "Diabetes Risk Classification",
    tag: "data",
    badge: "Data",
    description:
      "Five model families compared on imbalanced health survey data with repeated stratified cross-validation, scored on Macro-F1 rather than accuracy. XGBoost came out on top.",
    tech: ["R", "caret", "XGBoost"],
    repo: "https://github.com/Razer256g4/Final-report-stat",
    demo: ""
  },
  {
    title: "Parallel Matrix-Chain Multiplication",
    tag: "systems",
    badge: "Systems",
    description:
      "Three-matrix chain product in C with POSIX threads: lock-free row partitioning, a register-blocked inner kernel, and a benchmark sweep across sizes, thread counts, and precision.",
    tech: ["C", "pthreads", "pandas"],
    repo: "",
    demo: ""
  },
  {
    title: "Slime Down",
    tag: "games",
    badge: "Game",
    description:
      "GMTK Game Jam 2026 platformer where the countdown is your health bar. Placed in the top 15% for narrative and enjoyment out of ~10,500 entries, with an online leaderboard in the web build.",
    tech: ["Godot", "GDScript", "Firestore"],
    repo: "",
    demo: "https://razer256g5.itch.io/slime-down",
    demoLabel: "Play"
  },
  {
    title: "Squire",
    tag: "games",
    badge: "Game",
    description:
      "Top-down action game with an adaptive score and a 16 voice audio engine, deployed to itch.io as a WebAssembly build on every push.",
    tech: ["Godot", "GDScript", "GitHub Actions"],
    repo: "",
    demo: "https://razer256g5.itch.io/squire",
    demoLabel: "Play"
  },
  {
    title: "MathGame",
    tag: "games",
    badge: "Game",
    description:
      "Creature battler for desktop and Android where every attack is a maths question, generated answer first so every answer is a whole number.",
    tech: ["Java", "libGDX", "Gradle"],
    repo: "https://github.com/Razer256g4/MathGame",
    demo: ""
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
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">${project.demoLabel || "Live demo"} →</a>` : ""}
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
