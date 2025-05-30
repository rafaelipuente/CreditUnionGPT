# CreditUnionGPT

## About

An AI-powered platform designed specifically for credit unions, providing intelligent solutions for member services, financial coaching, and operational efficiency.

## Getting Started

```
npm install
npm run dev
```

### Dependencies

This project uses the following libraries and frameworks:

- [React](https://react.dev/learn) - JavaScript UI library
- [Vite](https://vitejs.dev/guide/) - Frontend build tool
- [React-Router](https://reactrouter.com/en/main) - Routing library for React
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/docs) - React component library built with Tailwind and Radix UI

### Key Files and Directories

- `src/` - Contains all the source code for the project
  - `components/` - Contains all the UI components
  - `pages/` - Contains all the pages
  - `lib/` - Contains utilities and helper functions
- `public/` - Contains all the static assets
- `index.html` - The main HTML file

## Deployment

### How can I deploy my project?

There are a few options:

#### Option 1: Use a service like Vercel or Netlify

1. Push your code to a git repository (Github, Gitlab, etc.)
2. Connect your repository to Vercel or Netlify
3. Configure the build settings
4. Deploy

#### Option 2: Manual Deployment

Build the project for production:

```
npm run build
```

Deploy the contents of the `dist` folder to your web server.
