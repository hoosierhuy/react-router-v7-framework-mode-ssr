# React Router v7 Framework Mode deployed to Cloudflare

Deployed app: [https://react-router-app.hoosierhuy.workers.dev](https://react-router-app.hoosierhuy.workers.dev)

100 percent server-side rendered, including data fetching and mutations (POST request), with TypeScript and TailwindCSS 4.x.

Now, you will need to create a free tier Cloudflare account,  and you have to set up Clouflare Wrangler to deploy this app easily from the command line.

A YouTube video to accompany this project is coming soon.

## App Structure Overview

react-router-v7-framework-mode-ssr/
├── 📁 .git/                          # Git repository data
├── 📁 .react-router/                 # React Router build cache
├── 📁 .wrangler/                     # Cloudflare Wrangler cache
├── 📁 build/                         # Production build output
├── 📁 node_modules/                  # Dependencies
├── 📁 workers/                       # Cloudflare Workers
│   └── 📄 app.ts                     # Worker entry point
├── 📁 public/                        # Static assets
│   ├── 📁 .well-known/              # Well-known URIs
│   └── 🖼️ favicon.ico               # Site favicon
├── 📁 app/                           # Main application code
│   ├── 📄 app.css                    # Global styles
│   ├── 📄 entry.server.tsx           # SSR entry point
│   ├── 📄 root.tsx                   # Root layout component
│   ├── 📄 routes.ts                  # Route configuration
│   ├── 📁 components/                # Reusable components
│   │   └── 📄 Navbar.tsx            # Navigation component
│   ├── 📁 routes/                    # Route components
│   │   ├── 📄 index.tsx             # Home page (/)
│   │   ├── 📄 CatchAll.tsx          # 404/catch-all route (*)
│   │   └── 📁 products/             # Product routes
│   │       ├── 📄 index.tsx         # Products list (/products)
│   │       ├── 📄 [id].tsx          # Product detail (/products/:id)
│   │       └── 📄 new.tsx           # New product (/products/new)
│   └── 📁 types/                     # TypeScript type definitions
│       └── 📄 product.ts            # Product type definitions
├── 📄 .gitignore                     # Git ignore rules
├── 📄 README.md                      # Project documentation
├── 📄 biome.json                     # Biome linter/formatter config
├── 📄 package.json                   # Package configuration
├── 📄 pnpm-lock.yaml                 # Package lock file
├── 📄 react-router.config.ts         # React Router configuration
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tsconfig.cloudflare.json       # Cloudflare-specific TS config
├── 📄 tsconfig.node.json             # Node.js-specific TS config
├── 📄 vite.config.ts                 # Vite build configuration
├── 📄 worker-configuration.d.ts      # Worker type definitions
└── 📄 wrangler.jsonc                 # Cloudflare Wrangler config