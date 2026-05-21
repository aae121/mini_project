:root {
    --bg: #f8f6f1;
    --surface: #fffdf8;
    --card-bg: #ffffff;
    --ink: #1f1b1b;
    --muted: #5a5252;
    --accent: #e4572e;
    --accent-soft: #ffede7;
    --stroke: #1f1b1b;
    --ring: #ffcdbf;
    --header-bg: rgba(255, 253, 248, 0.9);
    --pattern-dot: rgba(31, 27, 27, 0.06);
    --g1: rgba(255, 170, 143, 0.45);
    --g2: rgba(255, 225, 145, 0.42);
    --g3: rgba(255, 195, 176, 0.45);
    --g4a: #f8f6f1;
    --g4b: #fff2e6;
    --success: #116a36;
    --error: #b21f1f;
    --max: 1140px;
    --radius: 18px;
    --shadow: 8px 8px 0 var(--stroke);
}

body[data-theme="dark"] {
    --bg: #111111;
    --surface: #1b1b1b;
    --card-bg: #242424;
    --ink: #f2efeb;
    --muted: #c2b9b3;
    --accent: #ff6f3f;
    --accent-soft: #3b271f;
    --stroke: #f2efeb;
    --ring: #ffb499;
    --header-bg: rgba(24, 24, 24, 0.88);
    --pattern-dot: rgba(255, 255, 255, 0.09);
    --g1: rgba(255, 111, 63, 0.25);
    --g2: rgba(255, 178, 102, 0.22);
    --g3: rgba(255, 133, 112, 0.23);
    --g4a: #161616;
    --g4b: #221915;
    --success: #59d98f;
    --error: #ff9d9d;
    --shadow: 8px 8px 0 #000000;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "IBM Plex Sans", sans-serif;
    color: var(--ink);
    background: radial-gradient(circle at 10% 20%, #fff2cf 0 20%, transparent 21%), radial-gradient(circle at 100% 0, #ffdcd1 0 23%, transparent 24%), var(--bg);
    line-height: 1.7;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

body::before {
    content: "";
    position: fixed;
    inset: -20% -10%;
    z-index: -2;
    background: radial-gradient(circle at 20% 20%, var(--g1), transparent 42%), radial-gradient(circle at 80% 30%, var(--g2), transparent 40%), radial-gradient(circle at 45% 80%, var(--g3), transparent 44%), linear-gradient(120deg, var(--g4a), var(--g4b) 45%, var(--g4a) 100%);
    background-size: 140% 140%;
    animation: liveGradient 18s ease-in-out infinite alternate;
    transform-origin: center;
}

body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image: radial-gradient(var(--pattern-dot) 0.7px, transparent 0.7px);
    background-size: 24px 24px;
    opacity: 0.35;
}

a {
    color: inherit;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 1rem;
    padding: 0.5rem 0.75rem;
    border: 2px solid var(--stroke);
    background: var(--card-bg);
    z-index: 9999;
}

.skip-link:focus {
    top: 1rem;
}

.container {
    width: min(var(--max), calc(100% - 2rem));
    margin: 0 auto;
}

.welcome-banner {
    margin: 0.8rem auto 0;
    width: min(var(--max), calc(100% - 2rem));
    padding: 0.6rem 0.8rem;
    border: 2px solid var(--stroke);
    border-radius: 12px;
    background: var(--card-bg);
    font-weight: 600;
}

.section {
    padding: 4rem 0;
}

.section-title {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    letter-spacing: -0.03em;
    margin-bottom: 0.75rem;
}

.section-subtitle {
    color: var(--muted);
    margin-bottom: 1.4rem;
    max-width: 65ch;
}

.section-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1rem;
}

header {
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--stroke);
    background: var(--header-bg);
    backdrop-filter: blur(8px);
}

.nav-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    gap: 0.5rem;
}

.brand {
    text-decoration: none;
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.menu-toggle,
.theme-toggle,
.btn,
.toggle-section,
.detail-btn,
.form-btn,
.add-skill-btn {
    border: 2px solid var(--stroke);
    background: var(--card-bg);
    border-radius: 12px;
    padding: 0.45rem 0.7rem;
    font-weight: 600;
    color: var(--ink);
    cursor: pointer;
}

.theme-toggle {
    min-width: 120px;
    box-shadow: 2px 2px 0 var(--stroke);
    display: inline-flex;
    gap: 0.45rem;
    align-items: center;
    justify-content: center;
}

.theme-toggle::before {
    content: "";
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-radius: 50%;
}

body[data-theme="dark"] .theme-toggle::before {
    border-radius: 50% 50% 50% 0;
    transform: rotate(-30deg);
}

.menu-toggle {
    display: none;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1.2rem;
    align-items: center;
}

nav a {
    text-decoration: none;
    font-weight: 500;
    padding: 0.35rem 0.6rem;
    border-radius: 10px;
    transition: background 0.2s ease;
}

nav a:hover,
nav a.active {
    background: var(--accent-soft);
}

.hero {
    padding: 4rem 0 3rem;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
    align-items: center;
}

.hero h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2.1rem, 5vw, 4rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
    max-width: 12ch;
    margin-bottom: 1rem;
}

.hero p {
    max-width: 58ch;
    color: var(--muted);
}

.hero-tags,
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin: 1.2rem 0;
}

.tag,
.chip {
    background: var(--card-bg);
    border: 2px solid var(--stroke);
    border-radius: 999px;
    padding: 0.28rem 0.7rem;
    font-size: 0.82rem;
    font-weight: 600;
}

.hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.btn {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.detail-btn:hover,
.toggle-section:hover,
.form-btn:hover,
.add-skill-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--stroke);
}

.btn-primary,
.form-btn,
.add-skill-btn {
    background: var(--accent);
    color: #ffffff;
}

.hero-card,
.panel,
.contact-card {
    background: var(--surface);
    border: 2px solid var(--stroke);
    border-radius: var(--radius);
    padding: 1rem;
    box-shadow: var(--shadow);
}

.hero-card {
    transform: rotate(-1.2deg);
}

.hero-card img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid var(--stroke);
    margin-bottom: 0.9rem;
}

.grid-2,
.skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.panel h3 {
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 0.65rem;
    font-size: 1.15rem;
}

.timeline,
.projects,
.awards {
    display: grid;
    gap: 1rem;
}

.projects {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.timeline-item,
.project,
.award {
    background: var(--card-bg);
    border: 2px solid var(--stroke);
    border-radius: 14px;
    padding: 1rem;
}

.project {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.project-details {
    color: var(--muted);
}

.hidden {
    display: none !important;
}

.timeline-item .meta {
    color: var(--muted);
    font-size: 0.92rem;
    margin-bottom: 0.5rem;
}

.timeline-item ul {
    margin-left: 1rem;
}

.skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.skills-grid ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skills-grid li {
    border: 2px solid var(--stroke);
    border-radius: 12px;
    background: var(--card-bg);
    padding: 0.35rem 0.6rem;
    font-size: 0.85rem;
}

.add-skill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
}

.add-skill-row input,
.form-row input,
.form-row textarea {
    border: 2px solid var(--stroke);
    border-radius: 10px;
    background: var(--card-bg);
    color: var(--ink);
    padding: 0.55rem 0.65rem;
    font-family: inherit;
    min-height: 42px;
}

.add-skill-row input {
    flex: 1;
    min-width: 180px;
}

.contact-form {
    display: grid;
    gap: 0.8rem;
    margin-top: 0.8rem;
}

.form-row {
    display: grid;
    gap: 0.35rem;
}

.form-message {
    font-weight: 600;
    min-height: 1.2rem;
}

.form-message.error {
    color: var(--error);
}

.form-message.success {
    color: var(--success);
}

.api-panel {
    gap: 1rem;
}

.api-status {
    font-weight: 600;
    color: var(--muted);
}

.api-status.error {
    color: var(--error);
}

.api-status.success {
    color: var(--success);
}

.repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.8rem;
}

.repo-card {
    background: var(--card-bg);
    border: 2px solid var(--stroke);
    border-radius: 14px;
    padding: 0.9rem;
    display: grid;
    gap: 0.45rem;
}

.repo-card h4 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1rem;
}

.repo-meta {
    color: var(--muted);
    font-size: 0.88rem;
}

.repo-card a {
    text-decoration: none;
    font-weight: 600;
}

.repo-card a:hover {
    text-decoration: underline;
}

footer {
    padding: 2.2rem 0 3rem;
}

.footer-line {
    border-top: 2px solid var(--stroke);
    padding-top: 1rem;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.reveal {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.45s ease, transform 0.45s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

@keyframes liveGradient {
    0% {
        background-position: 0% 20%;
        transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
        background-position: 70% 45%;
        transform: translate3d(-1.2%, -0.8%, 0) scale(1.03);
    }

    100% {
        background-position: 100% 80%;
        transform: translate3d(1.2%, 0.8%, 0) scale(1.05);
    }
}

:focus-visible {
    outline: 3px solid var(--ring);
    outline-offset: 2px;
}

@media (max-width: 900px) {
    .hero-grid,
    .grid-2 {
        grid-template-columns: 1fr;
    }

    .hero-card {
        max-width: 420px;
    }
}

@media (max-width: 860px) {
    .menu-toggle {
        display: inline-block;
    }

    nav ul {
        position: absolute;
        left: 0;
        right: 0;
        top: 72px;
        border-bottom: 2px solid var(--stroke);
        background: var(--surface);
        padding: 0.8rem 1rem 1rem;
        flex-direction: column;
        align-items: flex-start;
        transform-origin: top;
        transform: scaleY(0);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    nav ul.open {
        transform: scaleY(1);
        opacity: 1;
        pointer-events: auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *, *::before, *::after {
        animation: none !important;
        transition: none !important;
    }
}
