# Sri Thrayi Facility — Premium Corporate Website

> **“Trust to Deliver. Committed to Excellence.”**
> Professional Integrated Facility Management Services based in Hyderabad, Telangana.

This is a bespoke, production-ready corporate website built for **Sri Thrayi Facility**, designed to present a dependable, disciplined, and safety-conscious brand identity for commercial towers, residential communities, corporate workplaces, retail arcades, and institutions.

---

## 🏛️ Business Profile & Registered Address

- **Company Name:** Sri Thrayi Facility
- **Business Category:** Professional Facility Management Services
- **Registered Address:**  
  Plot No. 22/A, 5th Floor,  
  Sri Venkateswara Nilayam,  
  Salivahana Colony, JNTU 9th Phase,  
  Hyderabad – 500085, Telangana, India.
- **Direct Phone:** +91 79955 56988
- **WhatsApp Desk:** +91 79955 56988
- **Inquiries Email:** info@srithrayifacility.com

---

## 🛠️ Core Services

1. **Security Services** (`/services/security`) — Entrance and exit monitoring, visitor guidance, access-control support, patrol rounds, incident escalation, and vigilant front-of-house presence.
2. **Electrical Services** (`/services/electrical`) — Routine visual inspections, minor electrical maintenance, lighting & fixture support, fault reporting, and preventive maintenance.
3. **Plumbing Services** (`/services/plumbing`) — Leak inspection, tap and fixture maintenance, drainage clearing, water supply checks, and scheduled preventive upkeep.
4. **Landscaping & Gardening** (`/services/landscaping`) — Lawn mowing, plant care, hedge trimming, weed removal, seasonal plant planning, and manicured green presentation.
5. **Housekeeping Services** (`/services/housekeeping`) — Common-area cleaning, workstation upkeep, washroom sanitization, floor care, and hygienic waste management.

---

## 💻 Tech Stack

- **Framework:** [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router 6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Typography:** DM Serif Display (Headings) & Manrope (Body & UI) via Google Fonts
- **Icons:** [Lucide React](https://lucide.dev/)
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Animation:** [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Form Management:** [React Hook Form](https://react-hook-form.com/) with validation, anti-spam honeypot, and mailto/WhatsApp fallback
- **SEO & Structured Data:** JSON-LD schema for LocalBusiness/ProfessionalService, Open Graph, Twitter Cards, canonical tags, `robots.txt`, and `sitemap.xml`.

---

## 📂 Project Structure

```
SRI THRAYI FACILITY/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo/              # Cropped brand logos (full lockup, emblem mark, webp & png)
│       ├── services/          # High-resolution service photography
│       ├── environments/      # Commercial sector environment imagery
│       └── *.jpg              # Hero and operational close-ups
├── src/
│   ├── components/
│   │   ├── common/            # SEO, GoldDivider, SectionHeader, FloatingActions, SiteAssessmentModal
│   │   └── layout/            # Navbar, Footer, Layout
│   ├── data/
│   │   ├── config.ts          # Centralized company data (phone, WhatsApp, email, address)
│   │   ├── services.ts        # Detailed scopes, challenges, and approaches for 5 services
│   │   ├── navigation.ts      # Menu routes and dropdown items
│   │   ├── values.ts          # Mission, vision, core values, operational principles
│   │   └── environments.ts    # Supported property sectors
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── sections/
│   │   └── home/              # 8 modular homepage sections (Hero, Intro, Services, WhyUs, etc.)
│   ├── styles/
│   │   └── index.css          # Tailwind directives, architectural patterns, custom scrollbars
│   ├── App.tsx                # Routing, Lenis provider, ScrollToTop
│   └── main.tsx               # Entry point
├── index.html                 # Fonts, metadata, JSON-LD
├── tailwind.config.js         # Obsidian, charcoal, gold, and ivory palette configuration
└── package.json
```

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
This runs TypeScript validation and outputs optimized production assets into the `dist/` directory.

### 4. Production Preview
```bash
npm run preview
```

---

## ⚙️ Updating Contact Details

All company contact details, telephone numbers, WhatsApp numbers, email addresses, and office coordinates are centralized in:
`src/data/config.ts`

To update the phone number or email across the entire website, simply edit that single file.
