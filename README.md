# eResearch 2026 Conference Landing Page

![Next.js](https://img.shields.io/badge/Next.js-15.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css)

The official landing page for the **eResearch Australasia 2026 Conference**, scheduled for October 26–30, 2026, at the Melbourne Cricket Ground (MCG), Australia. This modern, high-performance web application serves as the primary gateway for conference information, sponsor profiles, and registration details.

## ✨ Features

- **Fully Responsive Design**: Hand-crafted CSS grids and flexbox layouts that adapt seamlessly across Mobile, Tablet, and Desktop screens.
- **Interactive Mobile Navigation**: A sleek, accessible dropdown menu tailored for smaller screens using `lucide-react` icons.
- **Custom Brand Theming**: A highly customized Tailwind v4 setup utilizing CSS variables (`globals.css`) to enforce the strict AeRO brand guidelines (Navy Blue, Purple, Teal).
- **Component-Driven Architecture**: Modular UI components (`Hero`, `Navbar`, `MainContent`, `Sponsors`, `WhoShouldAttend`, `ConferenceInfo`, `Footer`, `ImageCarousel`) for easy maintenance and scaling.
- **Comprehensive Page Ecosystem**: Additional dynamically generated pages for Speakers, Sponsor Profiles, Exhibitor Manual, Lead Management, and more.
- **SEO Optimized**: Built on Next.js App Router for optimal performance and search engine visibility.

## 🚀 Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v18.17 or higher)
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation & Setup Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/SocialOrangeGlobal/aero.git
   cd aero
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **View the application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```text
aero/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & Tailwind theme variables
│   │   ├── layout.tsx         # Root layout with Montserrat font configuration
│   │   ├── page.tsx           # Main landing page assembling all components
│   │   ├── abstract-submission/ # Abstract submission details
│   │   ├── accommodation/     # Accommodation and travel info
│   │   ├── exhibitor-manual/  # Comprehensive exhibitor and sponsor manual
│   │   ├── lead-management/   # Lead management tools and info
│   │   ├── presenter-guidelines/ # Guidelines for presenters
│   │   ├── program-overview/  # Event program overview
│   │   ├── registration/      # Registration info and pricing
│   │   ├── reviewer-guidelines/ # Guidelines for reviewers
│   │   ├── session-chair-guidelines/ # Guidelines for session chairs
│   │   ├── speakers/          # Main speakers listing page
│   │   ├── speaker/           # Dynamic route for individual speaker profiles
│   │   ├── sponsor-profiles/  # Profiles and modals for all sponsors
│   │   ├── sponsors-exhibitors-opportunities/ # Sponsorship tier packages
│   │   └── visit-melbourne/   # Information on exploring Melbourne
│   └── components/
│       ├── ConferenceInfo.tsx # Important dates and mailing list
│       ├── Footer.tsx         # Dark global footer with host/manager links
│       ├── Hero.tsx           # Full-bleed responsive background hero image
│       ├── ImageCarousel.tsx  # Dynamic slider for sponsor profile popups
│       ├── MainContent.tsx    # Invitation letter and co-chair profiles
│       ├── Navbar.tsx         # Responsive top navigation with mobile menu
│       ├── Sponsors.tsx       # Tiered grid of conference sponsors
│       └── WhoShouldAttend.tsx# Target audience demographics grid
├── public/                    # Static assets (favicons, etc.)
├── package.json               # Project dependencies and scripts
└── next.config.ts             # Next.js configuration
```

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts the production server using the built `.next` folder.
- `npm run lint`: Runs ESLint to catch syntax and styling errors.

## 🏗️ Built With

- **[Next.js](https://nextjs.org/)** - The React Framework for the Web
- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[Tailwind CSS v4](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## ☁️ Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. 

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
