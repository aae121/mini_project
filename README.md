# Ahmed Elkhodary — AI-assisted Portfolio

This repository contains a personal CV/portfolio website implemented with AI assistance.

## Local preview
Open `index.html` in a browser or serve the folder using a simple static server.

Using Python 3 built-in server:

```bash
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## Deployment (GitHub Pages)
1. Create a new repository on GitHub and push these files.
2. In repository settings, enable GitHub Pages from the `main` branch (root).
3. The site will be available at `https://<your-username>.github.io/<repo-name>`.

## Notes
- The "Live GitHub Projects" section fetches public repositories from `https://api.github.com/users/aae121/repos`.
- If GitHub API requests fail due to rate limits, use a personal access token or host the site behind a server-side proxy.

