# MyHealthDr

Your care, connected. A responsive, interactive public healthcare demo, prepared for GitHub Pages.

## Explore the app

- Patient, doctor, receptionist and administrator preview roles.
- Six Lahore hospitals, 12 fictional doctor profiles, 18 fictional patient profiles and six fictional receptionists.
- Appointment requests, rescheduling, confirmation, check-in, completion and cancellation.
- Medicine reminders with daily taken/undo tracking.
- Hospital and doctor search, patient and staff directories, clinic settings and activity views.
- Responsive layouts, accessible dialogs, reduced-motion support and GSAP animations.

## Public demo and private workspace

The GitHub Pages version runs entirely in the browser. All people, fees, appointments and medicine examples are fictional. Changes reset on refresh. No records are sent to a hospital and no real patient information is included. Hospital directory details are public reference information, checked on 30 September 2026; no affiliation is implied.

The **Set up a clinic** links open the existing authenticated workspace at:

https://myhealthdr-care.mujahid-zareen.chatgpt.site/workspace

That separately hosted workspace provides sign-in, server-enforced roles and database storage. GitHub Pages does not host this backend. This repository contains the public frontend; its client-side preview role selector is for demonstration, not an authentication mechanism.

The care guide offers predefined navigation help, not medical diagnosis or a live AI service. SMS, email and background push are not connected. Reminder notices work while the app is open.

## Develop

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

## Build and publish updates

```bash
npm run build
```

This type-checks the app and writes the production website to `docs/`. Commit the changed source, lockfile and `docs/` output together.

In GitHub **Settings → Pages**, use **Deploy from a branch**, select **main** and **/docs**, then save. The committed `.nojekyll` file allows the built assets to be served directly. Relative asset paths support a project site such as `/myhealthdr/` without broken styles or scripts.

## Technology

React, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide icons, GSAP and Sonner. No API keys are required for the public demo.
