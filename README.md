# React Router v7 Framework Mode deployed to Cloudflare

Deployed app: [https://react-router-app.hoosierhuy.workers.dev](https://react-router-app.hoosierhuy.workers.dev)

100 percent server-side rendered, including data fetching and mutations (POST request), with TypeScript and TailwindCSS 4.x.

Now, you will need to create a free tier Cloudflare account,  and you have to set up Clouflare Wrangler to deploy this app easily from the command line.

YouTube video: https://youtu.be/xIXBA9JzYMM

## App Structure Overview

## App Structure Overview

```
react-router-v7-framework-mode-ssr/
├── .git/                          # Git repository
├── .react-router/                 # React Router build cache
├── .wrangler/                     # Cloudflare Wrangler cache
├── build/                         # Production build output
├── node_modules/                  # Dependencies
├── public/                        # Static assets
│   ├── .well-known/              # Well-known URIs
│   └── favicon.ico               # Site favicon
├── workers/                       # Cloudflare Workers
│   └── app.ts                     # Worker entry point
├── app/                           # Main application code
│   ├── app.css                    # Global styles
│   ├── entry.server.tsx           # SSR entry point
│   ├── root.tsx                   # Root layout component
│   ├── routes.ts                  # Route configuration
│   ├── components/                # Reusable components
│   │   └── Navbar.tsx            # Navigation component
│   ├── routes/                    # Route components
│   │   ├── index.tsx             # Home page (/)
│   │   ├── CatchAll.tsx          # 404/catch-all route (*)
│   │   └── products/             # Product routes
│   │       ├── index.tsx         # Products list (/products)
│   │       ├── [id].tsx          # Product detail (/products/:id)
│   │       └── new.tsx           # Add product form (/products/new)
│   └── types/                     # TypeScript definitions
│       └── product.ts            # Product type definitions
├── .gitignore                     # Git ignore rules
├── README.md                      # Project documentation
├── biome.json                     # Biome linter/formatter config
├── package.json                   # Package configuration
├── pnpm-lock.yaml                 # Package lock file
├── react-router.config.ts         # React Router configuration
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.cloudflare.json       # Cloudflare-specific TS config
├── tsconfig.node.json             # Node.js-specific TS config
├── vite.config.ts                 # Vite build configuration
├── worker-configuration.d.ts      # Worker type definitions
└── wrangler.jsonc                 # Cloudflare Wrangler config

If this repository helped you, please consider giving it a star ⭐️. And if you would like to contribute to my [coffee fund](https://www.paypal.com/donate/?business=XNPNP5FWN4B2A&no_recurring=0&item_name=I+provide+free+computer+science+training+to+everyone&currency_code=USD).  Thank you!
