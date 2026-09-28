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
      ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener">Code ↗</a>` : ""}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">${project.demoLabel || "Live demo"} ↗</a>` : ""}
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

// ---- The dog's corner: a game of fetch ----
// The dog lives in the bottom right corner. Every so often (or when you click
// it) the ball gets thrown, the dog chases it down, carries it back, and sits.
// After a few rounds with nobody playing, it naps.
const dog = document.getElementById("dog");
const ball = document.getElementById("ball");
const bubble = document.getElementById("dog-dialogue");
const yard = document.querySelector(".yard");

if (dog && ball && bubble && yard) {
  const DOG = 48;
  const BALL = 13;
  const MOUTH_Y = 16;
  const RUN_SPEED = 180; // px per second
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const throwLines = ["Fetch!", "Again! Again!", "Best game ever.", "Woof!", "Throw it further!"];
  const busyLines = ["I’m on it!", "Almost got it!", "Wait for me!"];
  const napLines = ["Zzz…", "Five more minutes…"];

  let yardW = yard.clientWidth;
  let homeX = yardW - DOG;
  let dogX = homeX;
  let facing = -1; // 1 = sprite's natural right, -1 = mirrored to look left
  let ballX = homeX - BALL - 2;
  let ballY = 0;
  let state = "home"; // home | wait | chase | carry | nap
  let stateAt = 0;
  let flight = null;
  let rounds = 0;
  let nextAuto = 0;
  let bubbleTimer;

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = list => list[Math.floor(Math.random() * list.length)];

  function setAnim(name) {
    dog.className = "dog " + name;
  }

  function say(text, ms = 1800) {
    bubble.textContent = text;
    bubble.classList.add("is-visible");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("is-visible"), ms);
  }

  function draw() {
    dog.style.transform = `translateX(${dogX}px) scaleX(${facing})`;
    ball.style.transform = `translate(${ballX}px, ${-ballY}px)`;
    const bw = bubble.offsetWidth || 80;
    bubble.style.left = `${Math.max(0, Math.min(dogX + DOG / 2 - bw / 2, yardW - bw))}px`;
  }

  function goHome(now) {
    state = "home";
    stateAt = now;
    facing = -1;
    dogX = homeX;
    ballX = homeX - BALL - 2;
    ballY = 0;
    setAnim("sit");
    nextAuto = now + rand(8000, 13000);
  }

  function throwBall(now) {
    const target = rand(6, yardW * 0.45);
    flight = { from: ballX, to: target, start: now };
    state = "wait";
    stateAt = now;
    setAnim("idle");
  }

  // Ball path: one high arc, two little bounces, then it rolls to a stop.
  function ballAt(t) {
    const { from, to } = flight;
    const roll = 12;
    const hops = [
      { dur: 0.7, h: 70, x0: from, x1: to },
      { dur: 0.26, h: 16, x0: to, x1: to - roll * 0.6 },
      { dur: 0.16, h: 5, x0: to - roll * 0.6, x1: to - roll }
    ];
    let acc = 0;
    for (const hop of hops) {
      if (t < acc + hop.dur) {
        const p = (t - acc) / hop.dur;
        return { x: hop.x0 + (hop.x1 - hop.x0) * p, y: 4 * hop.h * p * (1 - p), done: false };
      }
      acc += hop.dur;
    }
    return { x: to - roll, y: 0, done: true };
  }

  function onClick() {
    const now = performance.now();
    if (state === "home" || state === "nap") {
      rounds = 0;
      say(pick(throwLines));
      throwBall(now);
    } else {
      say(pick(busyLines), 1200);
    }
  }

  dog.addEventListener("click", onClick);
  ball.addEventListener("click", onClick);

  window.addEventListener("resize", () => {
    yardW = yard.clientWidth;
    homeX = yardW - DOG;
    if (state === "home" || state === "nap") {
      dogX = homeX;
      ballX = homeX - BALL - 2;
      draw();
    }
  });

  let last = performance.now();
  function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    if (flight) {
      const b = ballAt((now - flight.start) / 1000);
      ballX = b.x;
      ballY = b.y;
      if (b.done) flight.landed = true;
    }

    switch (state) {
      case "home":
        if (!reduceMotion && !document.hidden && now > nextAuto) {
          if (rounds >= 4) {
            state = "nap";
            stateAt = now;
            setAnim("sleep");
            say(pick(napLines), 2500);
          } else {
            rounds++;
            throwBall(now);
          }
        }
        break;

      case "wait":
        // A beat to watch the ball go before giving chase.
        if (now - stateAt > 350) {
          state = "chase";
          facing = -1;
          setAnim("run");
        }
        break;

      case "chase": {
        const goal = ballX - 2;
        dogX = Math.max(goal, dogX - RUN_SPEED * dt);
        if (dogX <= goal + 1 && flight && flight.landed) {
          flight = null;
          state = "carry";
          facing = 1;
        }
        break;
      }

      case "carry":
        dogX = Math.min(homeX, dogX + RUN_SPEED * dt);
        ballX = dogX + DOG - BALL - 4;
        ballY = MOUTH_Y;
        if (dogX >= homeX) goHome(now);
        break;

      case "nap":
        if (now - stateAt > 30000) {
          rounds = 0;
          goHome(now);
        }
        break;
    }

    draw();
    requestAnimationFrame(tick);
  }

  goHome(performance.now());
  draw();
  setTimeout(() => say("Click me to play fetch!", 2600), 2500);
  requestAnimationFrame(tick);
}

// Initial render
renderProjects();