# Portfolio Next.js Application

This is the personal portfolio web application for **Karmit Patel** from [karmitp.com](https://karmitp.com), built with [Next.js](https://nextjs.org/). Karmit is a Frontend Developer & UI/UX Designer based in Toronto, Canada. The application provides an interactive and modern way to present professional profile, projects, skills, and services online.

## About This Application

This portfolio website is the source code for [karmitp.com](https://karmitp.com), a single-page application (SPA) that features a smooth scrolling navigation system with multiple sections:

- **Hero Section**: Introduction with professional title and call-to-action
- **About Section**: Personal background and professional journey
- **Technologies Section**: Showcases expertise in Angular, React, Vue.js, and other technologies
- **Services Section**: Highlights Frontend Development and UI/UX Design services
- **Projects Section**: Displays featured projects including Snazzy Chat and Shoppers Land
- **Contact Section**: Interactive contact form with Firebase integration for message storage

The application emphasizes modern web development practices with accessibility features, SEO optimization through structured data (JSON-LD), and a responsive design that works seamlessly across all devices.

## Features

- **Responsive Design**: Modern, mobile-first design that adapts to all screen sizes
- **Smooth Scrolling Navigation**: Section-based navigation with active tab highlighting
- **Interactive Contact Form**: Firebase-powered contact form with toast notifications
- **SEO Optimized**: Comprehensive meta tags and structured data (JSON-LD) for better search engine visibility
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Performance**: Optimized images with Next.js Image component and lazy loading
- **Type Safety**: Built with TypeScript for type-safe development
- **Modular Styling**: SCSS modules for component-scoped styling
- **Firebase Integration**: Backend services for contact form message storage
- **Loading Animations**: Custom loading curtain with animated cube loader

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Install dependencies

```bash
npm install
# or
yarn install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for production

```bash
npm run build
# or
yarn build
```

To start the production server after building:

```bash
npm start
# or
yarn start
```

### Deploy

This application can be easily deployed to [Vercel](https://vercel.com/) or any platform that supports Next.js. For Firebase hosting, ensure you have the Firebase CLI installed and configured:

```bash
firebase deploy
```

See `firebase.json` for hosting configuration.

## Project Structure

```
portfolio-next-v1/
├── components/          # Reusable UI components
│   ├── contact/        # Contact form component
│   ├── cta/            # Call-to-action button component
│   ├── footer/         # Footer with social links
│   ├── hero/           # Hero section component
│   ├── navbar/         # Navigation bar component
│   ├── project/        # Project showcase component
│   └── servicelanguage/ # Services and technologies display
├── pages/              # Next.js pages and API routes
│   └── index.tsx       # Main homepage with all sections
├── firebase/           # Firebase configuration and store
│   └── store.ts        # Firebase Firestore operations
├── models/             # TypeScript models and interfaces
├── public/             # Static assets (images, SVGs, icons)
│   └── assets/         # Images, SVGs, and other media files
├── styles/             # Global and modular SCSS styles
│   ├── colors.scss     # Color variables and themes
│   └── Home.module.scss # Home page styles
└── utils/              # Utility functions
    └── structured-data.ts # JSON-LD schema generation
```

## Key Technologies

- **Next.js 13**: React framework with server-side rendering and static generation
- **React 18**: UI library with hooks-based architecture
- **TypeScript**: Type-safe JavaScript for better development experience
- **SCSS/Sass**: CSS preprocessor with modular styling
- **Firebase**: Backend services for contact form message storage
- **Next.js Image**: Optimized image loading and rendering

## Customization
Edit the content in `components/` and `pages/` to personalize your portfolio. Update assets in `public/assets/` as needed.

## License
This project is open source and available under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
