# Contributing to Akku-Craft Web

Thanks for your interest in improving the Akku-Craft website. This repository is focused on the web presence for the project.

---

### Before anything else: check the context

Please take a quick look at the project documentation before editing files:

- [README.md](README.md)
- [AGENTS.md](AGENTS.md)

This helps keep the app structure, content tone, and implementation details consistent.

---

### Tooling and file expectations

This repository uses **Next.js 16** with the App Router.

- Main application code lives in `src/app/`
- Shared components live in `src/components/`
- Utilities and data helpers live in `src/lib/`
- Content and translations live in `src/content/` and `src/dictionaries/`

Please keep route and layout changes aligned with the existing app structure. If you are editing anything that reads local content files, remember that the root and wiki layouts need to stay on the Node.js runtime.

---

### What kind of contributions are useful

Typical high-value changes include:

- Content and translation improvements
- Accessibility fixes and semantic markup cleanup
- UI refinements for responsive behavior and readability
- SEO improvements such as metadata, sitemap, and robots updates
- Bug fixes in navigation, wiki rendering, or contact flows
- Performance or maintainability improvements in shared components and utilities

If you are planning a bigger structural change, open an issue or discuss first.

---

### Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

For production checks, use:

```bash
npm run build
npm run lint
```

---

### Environment variables

GitHub stats on the homepage use the GitHub REST API at render time.
Without authentication, GitHub's low anonymous rate limit is often exhausted quickly. But this isn't needed for development.

```bash
# .env.local
GITHUB_TOKEN=

# SEO Configuration
NEXT_PUBLIC_URL=https://jumpstone4477.de

# Contact page
CONTACT_EMAIL_1=contact+general@example.com
CONTACT_EMAIL_2=contact+projects@example.com
CONTACT_EMAIL_3=contact+security@example.com

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

---

### Pull request guidelines

When opening a PR, keep it focused and explain the engineering reason behind the change.

Please include:

- A short summary of what changed
- Why the change is needed
- Which files were touched
- Screenshots for UI changes when useful
- Lint and build status, or any known remaining issues with explanation

Small PRs are easier to review and merge quickly.

---

### Contact

The easiest way to coordinate is via **Discord**:

- **jumpstone4477** (preferred)
- **akku_craft**

If Discord is not an option, use the contact method listed in the Akku-Craft project channels.

---

### One last thing

Web changes have long tails: content, accessibility, performance, and deployment all depend on details. Please optimize for clarity, consistency, and reviewability.

If you're unsure whether an idea fits, ask early.

We look forward to your contribution.

— _The Akku-Craft Team_
