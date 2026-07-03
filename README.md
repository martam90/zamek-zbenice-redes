# Zbenice Castle – Website

A modern redesign of the Zbenice Castle website built with [Astro](https://astro.build).

This project is a redesign of a website originally created as part of the Czechitas Digital Academy Web program in 2021. The original version was built with Gatsby and included features such as email submission, a photo gallery, page routing, and dark/light mode switching.

The goal of this redesign was to create a clean, modern, and maintainable one-page website with a strong focus on user experience, accessibility, performance, and code quality.

---

## Features

- Responsive one-page layout
- Historical timeline section
- LightGallery image gallery
- Contact section with embedded map
- Custom TypeScript animations
- Accessibility-focused design
- Keyboard navigation support
- Skip-to-content link
- Optimized performance with Astro

## Project Overview

The website presents the history of Zbenice Castle, a photo gallery, contact information, location details, and other essential visitor information in a simple and visually appealing format.

The redesign focuses on:

- Clean and intuitive navigation
- Modern visual design
- Responsive layout across devices
- Accessibility best practices
- Maintainable and scalable codebase
- Performance optimization

---

## 🚀 Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- LightGallery
- ESLint
- Stylelint
- Prettier
- Husky
- lint-staged
- Fallow

---

## Why Astro?

The original project was built with Gatsby. For this redesign, Astro was chosen because it is a lightweight framework that fits small content-focused websites better and ships minimal client-side JavaScript.

Its Islands Architecture enables interactive components to load only when needed, resulting in better performance, simpler maintenance, and a faster user experience.

---

## Design Process

The visual concept was initially generated with ChatGPT. The design was then transferred into Figma using a Cursor plugin, where it was refined before implementation.

---

## Accessibility

Accessibility was an important part of the project from the beginning.

Implemented accessibility features include:

- Semantic HTML structure
- Sufficient color contrast
- Keyboard-friendly navigation
- Skip-to-content link
- Responsive typography and layouts
- Accessibility-focused typography using **Atkinson Hyperlegible** and **Lexend**


Accessibility was continuously reviewed using the Wave browser extension.

---

### Gallery

The photo gallery is powered by LightGallery, providing image previews, navigation, and a smooth browsing experience.

### Animations

All animations were implemented using custom TypeScript code without relying on external animation libraries.

### Map Integration

The location map is embedded directly using a Mapy.com.

---

## Code Quality

Maintaining a clean and reliable codebase was a key objective of the project.

The following tools are used to ensure code quality and consistency:

- ESLint for JavaScript and TypeScript linting
- Stylelint for CSS validation
- Prettier for consistent code formatting
- Fallow for static code analysis
- Husky for Git hooks
- lint-staged for running checks only on staged files before commits

Husky and lint-staged work together as a pre-commit workflow, automatically running formatting and linting checks before code is committed. This helps prevent common issues from entering the repository while keeping the codebase clean and consistent.

---

## 🚀 Available Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `npm install`             | Install project dependencies                                |
| `npm run dev`             | Start the local development server at `localhost:4321`      |
| `npm run build`           | Build the production-ready site into `./dist/`              |
| `npm run preview`         | Preview the production build locally                        |
| `npm run astro ...`       | Run Astro CLI commands such as `astro add` or `astro check` |
| `npm run astro -- --help` | Display Astro CLI help information                          |

---

## 🚀 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utility/
├── astro.config.mjs
├── eslint.config.mjs
├── stylelint.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```
