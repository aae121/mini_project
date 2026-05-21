// Cache DOM references once to keep event logic fast and readable.
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = Array.from(document.querySelectorAll("nav a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const welcomeBanner = document.getElementById("welcomeBanner");
const sectionButtons = Array.from(document.querySelectorAll(".toggle-section"));
const projectDetailButtons = Array.from(document.querySelectorAll(".detail-btn"));
const addSkillButton = document.getElementById("addSkillButton");
const addSkillInput = document.getElementById("addSkillInput");
const customSkillsList = document.getElementById("customSkillsList");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const githubRepoStatus = document.getElementById("githubRepoStatus");
const githubReposContent = document.getElementById("githubReposContent");
const refreshReposBtn = document.getElementById("refreshReposBtn");
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (welcomeBanner) {
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";
    welcomeBanner.textContent = greeting + " and welcome to my interactive portfolio page.";
}

// Theme defaults to OS preference, with user override saved in localStorage.
const osThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const getSystemTheme = () => (osThemeMedia.matches ? "dark" : "light");

const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    if (!themeToggle) {
        return;
    }

    themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
};

const savedTheme = localStorage.getItem("themePreference");
setTheme(savedTheme || getSystemTheme());

osThemeMedia.addEventListener("change", (event) => {
    if (!localStorage.getItem("themePreference")) {
        setTheme(event.matches ? "dark" : "light");
    }
});

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") || getSystemTheme();
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("themePreference", nextTheme);
    });
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (mainNav) {
            mainNav.classList.remove("open");
        }
        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

const activateSection = () => {
    const threshold = window.scrollY + window.innerHeight * 0.35;
    let currentId = "";

    sections.forEach((section) => {
        if (threshold >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + currentId;
        link.classList.toggle("active", isActive);
    });
};

window.addEventListener("scroll", activateSection, { passive: true });
activateSection();

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Generic show/hide toggles for content sections.
sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const target = document.getElementById(targetId);
        if (!target) {
            return;
        }

        const hidden = target.classList.toggle("hidden");
        button.textContent = hidden ? "Show " + button.dataset.label : "Hide " + button.dataset.label;
        button.setAttribute("aria-expanded", String(!hidden));
    });
});

// Per-project details toggling without page reload.
projectDetailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const detailsId = button.getAttribute("data-details");
        const details = document.getElementById(detailsId);
        if (!details) {
            return;
        }

        const hidden = details.classList.toggle("hidden");
        button.textContent = hidden ? "Show details" : "Hide details";
        button.setAttribute("aria-expanded", String(!hidden));
    });
});

const addSkill = () => {
    if (!addSkillInput || !customSkillsList) {
        return;
    }

    const skillValue = addSkillInput.value.trim();
    if (!skillValue) {
        addSkillInput.focus();
        return;
    }

    const normalizedValue = skillValue.toLowerCase();
    const exists = Array.from(customSkillsList.querySelectorAll("li")).some((li) => li.textContent.trim().toLowerCase() === normalizedValue);
    if (exists) {
        addSkillInput.focus();
        addSkillInput.select();
        return;
    }

    const item = document.createElement("li");
    item.textContent = skillValue;
    customSkillsList.appendChild(item);
    addSkillInput.value = "";
    addSkillInput.focus();
};

if (addSkillButton && addSkillInput && customSkillsList) {
    addSkillButton.addEventListener("click", addSkill);
    addSkillInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addSkill();
        }
    });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Standardize form feedback rendering.
const showFormMessage = (type, message) => {
    if (!formMessage) {
        return;
    }

    formMessage.textContent = message;
    formMessage.className = "form-message" + (type ? " " + type : "");
};

if (contactForm && formMessage) {
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactText");

    const clearValidationState = () => {
        [nameInput, emailInput, messageInput].forEach((input) => {
            if (input) {
                input.setAttribute("aria-invalid", "false");
            }
        });
    };

    [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) {
            input.addEventListener("input", () => {
                input.setAttribute("aria-invalid", "false");
                if (formMessage.classList.contains("error")) {
                    showFormMessage("", "");
                }
            });
        }
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        clearValidationState();

        if (!name || !email || !message) {
            if (!name) {
                nameInput.setAttribute("aria-invalid", "true");
            }
            if (!email) {
                emailInput.setAttribute("aria-invalid", "true");
            }
            if (!message) {
                messageInput.setAttribute("aria-invalid", "true");
            }
            showFormMessage("error", "Please fill in all required fields.");
            return;
        }

        if (!emailRegex.test(email)) {
            emailInput.setAttribute("aria-invalid", "true");
            showFormMessage("error", "Please enter a valid email address.");
            return;
        }

        showFormMessage("success", "Message sent successfully. Thank you for contacting me.");
        contactForm.reset();
        clearValidationState();
    });
}

const renderRepoCard = (repo) => {
    const card = document.createElement("article");
    card.className = "repo-card";

    const title = document.createElement("h4");
    title.textContent = repo.name;

    const description = document.createElement("p");
    description.textContent = repo.description || "No description provided.";

    const meta = document.createElement("p");
    meta.className = "repo-meta";
    const language = repo.language || "Not specified";
    meta.textContent = "Language: " + language + " | Stars: " + repo.stargazers_count;

    const link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View repository";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(link);
    return card;
};

const setRepoStatus = (message, statusType) => {
    if (!githubRepoStatus) {
        return;
    }

    githubRepoStatus.textContent = message;
    githubRepoStatus.className = "api-status" + (statusType ? " " + statusType : "");
};

const loadGithubRepositories = async () => {
    if (!githubReposContent || !githubRepoStatus) {
        return;
    }

    githubReposContent.innerHTML = "";
    setRepoStatus("Loading repositories...", "");

    try {
        const response = await fetch("https://api.github.com/users/aae121/repos?sort=updated&per_page=8");
        if (!response.ok) {
            throw new Error("Unable to fetch repository data right now.");
        }

        const repos = await response.json();
        if (!Array.isArray(repos) || repos.length === 0) {
            setRepoStatus("No repositories available to display.", "error");
            return;
        }

        repos.forEach((repo) => {
            githubReposContent.appendChild(renderRepoCard(repo));
        });
        setRepoStatus("Repositories loaded successfully.", "success");
    } catch (error) {
        setRepoStatus("Failed to load repositories. Please try again.", "error");
    }
};

if (refreshReposBtn) {
    refreshReposBtn.addEventListener("click", () => {
        loadGithubRepositories();
    });
}

loadGithubRepositories();

// Download / print CV button handler: opens print dialog so users can save as PDF.
const downloadCvBtn = document.getElementById("downloadCvBtn");
if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
        window.print();
    });
}
