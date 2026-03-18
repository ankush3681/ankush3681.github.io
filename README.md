# Ankush Kumar — Portfolio Website

A single-page portfolio built with Create React App, Tailwind CSS, and Flowbite that highlights projects, skills, and the contact form of a Full Stack Developer.

## About Ankush Kumar
- **Title:** Full Stack Developer
- **Location:** Champa, Chhattisgarh, India
- **Bio:** Problem solver who thrives on working on every layer of a project, gaining new skills, and collaborating with teams on meaningful products.
- **Reach out:** `ankushkumar83623@gmail.com`, `+91-8878231626`, or DM through [GitHub](https://github.com/ankush3681), [LinkedIn](https://www.linkedin.com/in/ankush-kumar-227058171/), or WhatsApp (`https://wa.me/8878231626`).

## Getting started
### Prerequisites
- Node.js **18+** (the app uses React 18 and the latest tooling).
- npm (the project ships with a `package-lock.json` so install from that.)

### Install dependencies
```bash
npm install
```

### Run the app locally
```bash
npm start
```
- Starts the development server (powered by `react-scripts start`).
- Visit `http://localhost:3000` in your browser; the page reloads automatically when you edit files.

### Build & deploy
```bash
npm run build
npm run deploy
```
- `build` produces an optimized `build/` folder ready for production.
- `deploy` pushes the build to `gh-pages` (see the `homepage` field `https://ankush3681.github.io`).

### Test suite
```bash
npm test
```
- Runs the CRA test runner in watch mode.

## Project structure highlights
- `src/components` contains sections such as `Header` (hero message), `Contact` (EmailJS-powered form with client-side validation), and `Footer` (social links).
- `src/Email/Email.js` wraps EmailJS configuration for the contact form.
- Styling relies on Tailwind utility classes plus Flowbite components and data attributes (look for `data-aos` hooks for scroll animations).

## Environment variables
The contact form depends on EmailJS credentials. Create a `.env.local` or `.env` file (they are gitignored) with the keys that match the placeholders you see inside `src/Email/Email.js` so the form can send messages.

## Quick links
- **Resume:** `assets/Ankush_Kumar_Resume.pdf`
- **Portfolio homepage:** `https://ankush3681.github.io`
