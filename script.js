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

// ---- The dog's corner: fetch, catches, petting, and a few secret tricks ----
// The dog lives in the bottom right corner. Click it (or drag and fling the
// ball) to play fetch; it sometimes leaps and catches the ball mid-air. Rub the
// mouse over it to pet it. Type "sit", "roll", "speak", "sleep" or "fetch"
// anywhere on the page for tricks. Left alone, it throws for itself, invites
// you to play a few times, and eventually naps.
const dog = document.getElementById("dog");
const ball = document.getElementById("ball");
const bubble = document.getElementById("dog-dialogue");
const alertMark = document.getElementById("dog-alert");
const yard = document.querySelector(".yard");

if (dog && ball && bubble && yard) {
  const DOG = 48;
  const BALL = 13;
  const MOUTH_Y = 16;
  const RUN_SPEED = 190; // px per second
  const GRAVITY = 900; // px per second squared
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = {
    throw: ["Fetch!", "Again! Again!", "Best game ever.", "Woof!", "Throw it further!"],
    busy: ["I’m on it!", "Almost got it!", "Wait for me!"],
    nap: ["Zzz…", "Five more minutes…"],
    catch: ["Nice throw!", "Got it!", "Did you see that?!"],
    invite: ["Wanna play?", "Psst… throw the ball!", "I’m a very good boy. Click me!", "You can drag the ball, you know.", "I know tricks! See “How to play”."],
    pet: ["♥", "Right there!", "Best human.", "More pets please."],
    hint: ["Psst… I know tricks. Try typing “roll”.", "Type “speak” and see what happens."],
    tricks: {
      sit: "Sitting! Treat?",
      roll: "Ta-da!",
      speak: "Woof! Woof!",
      sleep: "Zzz…",
      fetch: "Fetch? FETCH!"
    }
  };

  let yardW = yard.clientWidth;
  let homeX = yardW - DOG;

  // Dog and ball state, in yard coordinates (x from the left, y up from the ground).
  let dogX = homeX;
  let dogY = 0;
  let facing = -1; // 1 = sprite's natural right, -1 = mirrored to look left
  const b = { x: homeX - BALL - 2, y: 0, vx: 0, vy: 0, flying: false, rested: true };

  let state = "home"; // home | held | wait | chase | leap | carry | trick | nap
  let stateAt = 0;
  let catchPlanned = false;
  let rounds = 0;
  let nextAuto = 0;
  let played = false;
  let invites = 0;
  let nextInvite = performance.now() + 9000;
  let bubbleTimer;
  let alertTimer;

  const rand = (a, c) => a + Math.random() * (c - a);
  const pick = list => list[Math.floor(Math.random() * list.length)];
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  function setAnim(name) {
    dog.className = "dog " + name;
  }

  function setState(next, now = performance.now()) {
    state = next;
    stateAt = now;
  }

  function say(text, ms = 1800) {
    bubble.textContent = text;
    bubble.classList.add("is-visible");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("is-visible"), ms);
  }

  function markPlayed() {
    played = true;
    alertMark && alertMark.classList.remove("is-visible");
  }

  function draw() {
    dog.style.translate = `${dogX}px ${-dogY}px`;
    dog.style.scale = `${facing} 1`;
    ball.style.translate = `${b.x}px ${-b.y}px`;
    const bw = bubble.offsetWidth || 80;
    bubble.style.left = `${clamp(dogX + DOG / 2 - bw / 2, 0, yardW - bw)}px`;
    bubble.style.bottom = `${56 + dogY}px`;
    if (alertMark) {
      alertMark.style.left = `${dogX - 10}px`;
      alertMark.style.bottom = `${30 + dogY}px`;
    }
  }

  function restBall() {
    b.x = homeX - BALL - 2;
    b.y = 0;
    b.vx = b.vy = 0;
    b.flying = false;
    b.rested = true;
  }

  function goHome(now) {
    setState("home", now);
    facing = -1;
    dogX = homeX;
    dogY = 0;
    restBall();
    setAnim("sit");
    nextAuto = now + rand(8000, 13000);
  }

  function launch(vx, vy, now) {
    b.vx = vx;
    b.vy = vy;
    b.flying = true;
    b.rested = false;
    setState("wait", now);
    setAnim("idle");
  }

  // Throw from the dog's spot. A catchable throw hangs higher and lands closer,
  // so the dog has time to get underneath it.
  function autoThrow(now) {
    catchPlanned = Math.random() < 0.4;
    const vy = catchPlanned ? rand(430, 480) : rand(300, 380);
    const vx = -(catchPlanned ? rand(90, 140) : rand(140, 260));
    launch(vx, vy, now);
  }

  // Where the ball first touches the ground, ignoring wall bounces.
  function predictLanding() {
    const t = (b.vy + Math.sqrt(b.vy * b.vy + 2 * GRAVITY * b.y)) / GRAVITY;
    return clamp(b.x + b.vx * t, 0, yardW - BALL);
  }

  function stepBall(dt) {
    if (!b.flying) return;
    b.vy -= GRAVITY * dt;
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * 0.6; }
    if (b.x > yardW - BALL) { b.x = yardW - BALL; b.vx = -Math.abs(b.vx) * 0.6; }
    if (b.y > 260) { b.y = 260; b.vy = -Math.abs(b.vy) * 0.3; }
    if (b.y <= 0) {
      b.y = 0;
      b.vy = Math.abs(b.vy) * 0.45;
      b.vx *= 0.75;
      if (b.vy < 60) {
        b.vy = 0;
        b.vx *= 0.9;
        if (Math.abs(b.vx) < 12) {
          b.flying = false;
          b.vx = 0;
        }
      }
    }
  }

  function startLeap(now) {
    setState("leap", now);
    setAnim("leap");
    say(pick(lines.catch), 1400);
  }

  function pickUpAndCarry(now) {
    b.flying = false;
    setState("carry", now);
    facing = 1;
    setAnim("run");
  }

  // ---- Clicking the dog ----
  function onDogClick() {
    const now = performance.now();
    markPlayed();
    if (state === "home" || state === "nap" || state === "trick") {
      rounds = 0;
      say(pick(lines.throw));
      autoThrow(now);
    } else {
      say(pick(lines.busy), 1200);
    }
  }
  dog.addEventListener("click", onDogClick);

  dog.addEventListener("pointerenter", () => {
    if (!played && state === "home") {
      say("Click me! Or drag the ball!", 2200);
    }
  });

  // ---- Drag and fling the ball ----
  let samples = [];
  let dragMoved = 0;

  function ballFromPointer(e) {
    const r = yard.getBoundingClientRect();
    return {
      x: clamp(e.clientX - r.left - BALL / 2, 0, yardW - BALL),
      y: clamp(r.bottom - e.clientY - BALL / 2, 0, 240)
    };
  }

  ball.addEventListener("pointerdown", e => {
    if (!(state === "home" || state === "nap" || state === "trick")) {
      say(pick(lines.busy), 1200);
      return;
    }
    e.preventDefault();
    ball.setPointerCapture(e.pointerId);
    markPlayed();
    rounds = 0;
    setState("held");
    setAnim("idle");
    ball.classList.add("is-held");
    samples = [{ t: performance.now(), x: e.clientX, y: e.clientY }];
    dragMoved = 0;
  });

  ball.addEventListener("pointermove", e => {
    if (state !== "held") return;
    const p = ballFromPointer(e);
    b.x = p.x;
    b.y = p.y;
    const last = samples[samples.length - 1];
    dragMoved += Math.hypot(e.clientX - last.x, e.clientY - last.y);
    samples.push({ t: performance.now(), x: e.clientX, y: e.clientY });
    if (samples.length > 8) samples.shift();
  });

  function release(e) {
    if (state !== "held") return;
    ball.classList.remove("is-held");
    const now = performance.now();
    if (dragMoved < 6) {
      // A tap on the ball is just a normal throw.
      restBall();
      say(pick(lines.throw));
      autoThrow(now);
      return;
    }
    const recent = samples.filter(s => now - s.t < 100);
    const first = recent[0] || samples[0];
    const last = samples[samples.length - 1];
    const dt = Math.max((last.t - first.t) / 1000, 0.016);
    const vx = clamp((last.x - first.x) / dt, -900, 900);
    const vy = clamp(-(last.y - first.y) / dt, -300, 900);
    catchPlanned = Math.random() < 0.5;
    say(Math.hypot(vx, vy) > 500 ? "WHOA!" : pick(lines.throw), 1200);
    launch(vx, vy, now);
  }
  ball.addEventListener("pointerup", release);
  ball.addEventListener("pointercancel", release);

  // ---- Petting: rub the pointer back and forth over the dog ----
  let rub = 0;
  let lastRubAt = 0;
  let lastHeartAt = 0;
  let pets = 0;

  function heart() {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "♥";
    h.style.left = `${dogX + rand(8, DOG - 16)}px`;
    h.style.bottom = `${dogY + 36}px`;
    yard.appendChild(h);
    setTimeout(() => h.remove(), 1000);
  }

  dog.addEventListener("pointermove", e => {
    if (!(state === "home" || state === "nap" || state === "trick")) return;
    const now = performance.now();
    if (now - lastRubAt > 600) rub = 0;
    rub += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0);
    lastRubAt = now;
    if (rub > 90 && now - lastHeartAt > 220) {
      lastHeartAt = now;
      heart();
      markPlayed();
      if (state === "nap") goHome(now);
      setState("trick", now);
      setAnim("idle happy");
      pets++;
      if (pets % 6 === 1) say(pick(lines.pet), 1400);
      if (pets === 14) say(pick(lines.hint), 3200);
    }
  });

  // ---- Secret keyboard tricks ----
  let typed = "";
  document.addEventListener("keydown", e => {
    const el = document.activeElement;
    if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
    if (e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-8);
    const trick = Object.keys(lines.tricks).find(word => typed.endsWith(word));
    if (!trick) return;
    typed = "";
    doTrick(trick);
  });

  function doTrick(name) {
    const now = performance.now();
    markPlayed();
    if (!(state === "home" || state === "nap" || state === "trick")) {
      say(pick(lines.busy), 1200);
      return;
    }
    if (state === "nap") goHome(now);
    say(lines.tricks[name], 2000);
    if (name === "fetch") {
      rounds = 0;
      autoThrow(now);
      return;
    }
    setState("trick", now);
    if (name === "sit") setAnim("sit");
    if (name === "roll") setAnim("idle rolling");
    if (name === "speak") setAnim("idle barking");
    if (name === "sleep") {
      setState("nap", now);
      setAnim("sleep");
    }
  }

  // ---- Looks at your cursor while sitting ----
  document.addEventListener("pointermove", e => {
    if (state !== "home") return;
    const r = dog.getBoundingClientRect();
    facing = e.clientX > r.left + r.width / 2 + 20 ? 1 : -1;
  });

  // ---- "How to play" card ----
  const helpBtn = document.getElementById("dog-help-btn");
  const help = document.getElementById("dog-help");
  if (helpBtn && help) {
    const setHelp = open => {
      help.hidden = !open;
      helpBtn.setAttribute("aria-expanded", String(open));
    };
    helpBtn.addEventListener("click", e => {
      e.stopPropagation();
      setHelp(help.hidden);
    });
    help.addEventListener("click", e => e.stopPropagation());
    document.addEventListener("click", () => setHelp(false));
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") setHelp(false);
    });
  }

  // ---- Inviting people to play ----
  function invite(now) {
    invites++;
    nextInvite = now + 25000;
    say(pick(lines.invite), 3000);
    if (alertMark) {
      alertMark.classList.add("is-visible");
      clearTimeout(alertTimer);
      alertTimer = setTimeout(() => alertMark.classList.remove("is-visible"), 3000);
    }
  }

  window.addEventListener("resize", () => {
    yardW = yard.clientWidth;
    homeX = yardW - DOG;
    if (state === "home" || state === "nap" || state === "trick") {
      dogX = homeX;
      restBall();
      draw();
    }
  });

  // ---- Main loop ----
  let last = performance.now();
  function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    stepBall(dt);

    if (!played && invites < 4 && now > nextInvite && state === "home" && !document.hidden) {
      invite(now);
    }

    switch (state) {
      case "home":
        if (!reduceMotion && !document.hidden && now > nextAuto) {
          if (rounds >= 4) {
            setState("nap", now);
            setAnim("sleep");
            say(pick(lines.nap), 2500);
          } else {
            rounds++;
            autoThrow(now);
          }
        }
        break;

      case "wait":
        // A beat to watch the ball go before giving chase.
        if (now - stateAt > 300) {
          setState("chase", now);
          setAnim("run");
        }
        break;

      case "chase": {
        // Run to where the ball will land (or to the ball once it has).
        const target = b.flying ? predictLanding() : b.x;
        const goal = clamp(target - (DOG - BALL) / 2, 0, homeX);
        const step = RUN_SPEED * dt;
        const dir = Math.sign(goal - dogX);
        if (Math.abs(goal - dogX) > step) {
          dogX += dir * step;
          facing = dir;
        } else {
          dogX = goal;
        }
        const ballMid = b.x + BALL / 2;
        const dogMid = dogX + DOG / 2;
        if (catchPlanned && b.flying && b.vy < 0 && b.y > 18 && b.y < 70 && Math.abs(ballMid - dogMid) < 22) {
          startLeap(now);
        } else if (!b.flying && dogX === goal) {
          pickUpAndCarry(now);
        }
        break;
      }

      case "leap": {
        // A short hop that meets the ball, then lands with it in the mouth.
        const p = Math.min((now - stateAt) / 450, 1);
        dogY = 4 * 30 * p * (1 - p);
        b.flying = false;
        b.x = facing > 0 ? dogX + DOG - BALL - 4 : dogX + 4;
        b.y = dogY + MOUTH_Y;
        if (p >= 1) {
          dogY = 0;
          pickUpAndCarry(now);
        }
        break;
      }

      case "carry":
        dogX = Math.min(homeX, dogX + RUN_SPEED * dt);
        b.x = dogX + DOG - BALL - 4;
        b.y = MOUTH_Y;
        if (dogX >= homeX) goHome(now);
        break;

      case "trick":
        if (now - stateAt > 2200) goHome(now);
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
  setTimeout(() => {
    if (!played) say("Click me to play fetch!", 2600);
  }, 2500);
  requestAnimationFrame(tick);
}

// Initial render
renderProjects();