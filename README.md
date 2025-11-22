# Portfolio Next.js Application

This is a personal portfolio web application built with [Next.js](https://nextjs.org/). It showcases projects, skills, and contact information, providing an interactive and modern way to present your professional profile online. The application is styled with SCSS modules and integrates with Firebase for backend services.

## Features
- Responsive, modern design
- Project and service showcase
- Contact form
- Firebase integration
- Built with TypeScript and SCSS modules

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
- `components/` – Reusable UI components
- `pages/` – Next.js pages and API routes
- `firebase/` – Firebase configuration and store
- `models/` – TypeScript models and interfaces
- `public/` – Static assets
- `styles/` – Global and modular SCSS styles

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
