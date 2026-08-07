# Updating Yingzhe Zhu's Website

Most updates can be made directly on GitHub in the browser. After editing a file, commit the change to `main`; GitHub Pages will rebuild the site automatically.

## Update The Bio

Edit `content/_index.md`. The paragraphs there appear in the About section.

## Update Research Interests

Edit `data/research.yaml`. Add, remove, or reorder phrases under `interests`.

## Add A Research Project

Edit `data/research.yaml` and add a new item under `projects`:

```yaml
- title: "Project title"
  status: "Working paper"
  description: "One sentence about the project."
  methods:
    - "Interviews"
    - "Text analysis"
```

## Add A Paper

Edit `data/papers.yaml`. If you have a PDF, upload it to `static/files/` first.

```yaml
- title: "Paper Title"
  authors:
    - "Yingzhe Zhu"
  year: 2026
  status: "revise and resubmit"
  venue: "Social Science & Medicine"
  pdf: "/files/paper-title.pdf"
  link: ""
  abstract: "One-paragraph abstract."
  job_market_paper: false
  tags:
    - "Medical sociology"
```

When a paper becomes published, change `status` to `"published"` and add the journal or venue.

## Add A Job Market Paper

In `data/papers.yaml`, set `job_market_paper: true` for the relevant paper. Keep only one paper marked this way.

## Add Teaching

Edit `data/teaching.yaml`:

```yaml
- course: "Course Name"
  role: "Teaching Assistant"
  institution: "Northwestern University"
  term: "Fall 2026"
```

## Add Or Update Awards

Edit `data/awards.yaml`. Each award has a `year` and `name`.

## Add A Blog Post

Create a folder at `content/blog/your-post-title/`, then add an `index.md` file:

```markdown
---
title: "Post Title"
date: 2026-08-06
description: "One-sentence summary."
---

Write the post here.
```

## Add A CV

Upload the PDF to `static/files/cv.pdf`, then add a CV item to the menu in `hugo.yaml`:

```yaml
- name: "CV"
  url: "/files/cv.pdf"
  weight: 30
```

## Change The Photo

Upload a headshot to `static/images/photo.jpg`, then set this in `hugo.yaml`:

```yaml
photo: "/images/photo.jpg"
```
