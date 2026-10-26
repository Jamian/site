# jamieianwest.com

Personal portfolio and technical blog of **Jamie West** - Cloud Engineering, DevOps & Security.

Built with [Astro](https://astro.build/) and deployed automatically to GitHub Pages via GitHub Actions.

---

## Local Development

```bash
# Local dev
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Writing a New Blog Post

To publish a new article:

1. Create a new `.mdx` file inside `src/content/blog/` (e.g. `src/content/blog/my-new-post.md`).
2. Add standard frontmatter metadata:

```markdown
---
title: "Your Post Title Here"
description: "A 1-2 sentence summary for search snippets and preview cards."
pubDate: 2026-10-18
tags: ["foo", "bar"]
---
```

## Deployment
1. Merge into `main` — GitHub Actions will automatically run the build and publish to your custom domain `jamieianwest.com`.
