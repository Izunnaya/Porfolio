# Michael Ugorji Developer Portfolio
<img width="3650" height="1932" alt="image" src="https://github.com/user-attachments/assets/4b3e4eda-317f-40b4-ba5c-d4417ac3c8f5" />



A production-grade personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed from scratch with a dark editorial aesthetic inspired by Vercel, Linear, and Stripe developer pages.

Live: [Live Demo](https://ugji-michael.vercel.app)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Cormorant Garamond · DM Sans · JetBrains Mono |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Design tokens, base styles, Google Fonts
│   ├── layout.tsx          # Root layout and SEO metadata
│   └── page.tsx            # Page composition
│
├── components/
│   ├── Hero/
│   │   ├── index.tsx           # Layout entry point
│   │   ├── HeroText.tsx        # Status badge, name, bio, CTAs, socials
│   │   ├── HeroPortrait.tsx    # Portrait image, glow, floating badges
│   │   ├── HeroBackground.tsx  # Radial glow effects
│   │   └── HeroScrollIndicator.tsx
│   ├── Navigation.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
│
├── public/
│   ├── portrait.jpg
│   └── cv.pdf
│
└── utils/
    └── HeroSocialLinks.tsx
```

---

## Design System

All design tokens are defined as CSS variables in `globals.css` and mapped into Tailwind via `tailwind.config.ts`.

```css
--bg: #08080f
--surface: #0f0f1a
--border: #1a1a2e
--gold: #d4a843
--text: #e8e4da
--muted: #6b6880
```

**Typography** uses three deliberate pairings:
- `Cormorant Garamond` for display headings. Thin weight, high contrast, editorial feel.
- `DM Sans` for body text. Clean, readable, modern.
- `JetBrains Mono` for labels, tags, and navigation items. Developer-native.

---

## Features

- Scroll-reveal animations via Framer Motion `useInView`
- Staggered entrance animations on hero text
- Rotating decorative ring on portrait
- Floating badges with delayed entrance
- Fixed navigation with scroll-state background blur
- Animated scroll indicator
- Project cards with hover lift and border glow
- Experience timeline
- CV download from hero section
- Mobile-first responsive layout
- Noise texture overlay for depth
- Grid background pattern on hero
- SEO metadata via Next.js `generateMetadata`

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Izunnaya/Porfolio.git
cd Porfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

The project is deployed on Vercel with automatic deployments on push to `main`.

```bash
# Deploy manually
npx vercel
```

To update the CV, replace `public/cv.pdf` with the new file and push.

---

## Sections

- **Hero** — Name, bio, CTAs, portrait, CV download
- **About** — Background narrative, expertise areas
- **Projects** — Six production projects presented as case studies with problem/solution framing
- **Skills** — Categorized tech stack with current learning
- **Experience** — Work history at Oceanwave, Metchain, and Trusoft
- **Contact** — Email, GitHub, LinkedIn, Blog

---

## License

This project is open source. Feel free to use it as inspiration but please don't deploy it as your own portfolio without significant changes.
