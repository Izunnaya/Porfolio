# Michael Ugorji — Portfolio

A modern, dark-themed portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Fonts

The project uses Google Fonts (loaded via CSS):
- **Cormorant Garamond** — Display headings
- **DM Sans** — Body text
- **JetBrains Mono** — Code labels, tags, nav items

## Customization

### Update personal info
All content is colocated in each component file. No CMS or config file needed.

- `components/Hero.tsx` — Name, bio, social links
- `components/About.tsx` — Narrative, expertise areas
- `components/Projects.tsx` — Projects array at the top of the file
- `components/Skills.tsx` — Tech stack categories
- `components/Experience.tsx` — Work history
- `components/Contact.tsx` — Contact links

### Update portrait
Replace `public/portrait.jpg` with your updated photo. The Image component will handle optimization automatically.

### Deploy
```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for any Node host
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Base styles, CSS variables, fonts
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Page composition
├── components/
│   ├── Navigation.tsx     # Fixed nav with scroll state
│   ├── Hero.tsx           # Two-column hero with portrait
│   ├── About.tsx          # Bio + expertise traits
│   ├── Projects.tsx       # Case-study project cards
│   ├── Skills.tsx         # Tech stack grid
│   ├── Experience.tsx     # Work history timeline
│   └── Contact.tsx        # CTA + contact links
└── public/
    └── portrait.jpg       # Your portrait photo
```
