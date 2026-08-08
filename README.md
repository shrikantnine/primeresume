# PrimeResume

AI-powered resume builder with ATS-friendly templates, AI chat-based building, and job scoring.

## Project Structure

```
├── src/                    # Svelte landing page + marketing site
│   ├── lib/                # Shared components (Navbar, Footer, SignInPopup, etc.)
│   ├── pages/              # Page components (Home, Dashboard, Pricing, etc.)
│   ├── sections/           # Home page sections (Hero, Templates, Features, etc.)
│   └── stores/             # Svelte stores (modal state)
├── reactive-resume/        # Reactive Resume v5.2.5 — the actual resume builder
│   ├── apps/web/           # React frontend (Vite)
│   ├── apps/server/        # Hono backend server
│   └── packages/           # Shared packages
├── package.json            # Svelte app dependencies
└── vite.config.js          # Vite config with proxy to reactive-resume
```

## Quick Start

### 1. Install & run the landing page (Svelte)

```bash
npm install
npm run dev
```

The landing page runs at **http://localhost:5173**

### 2. Run the resume builder (Reactive Resume)

Reactive Resume v5 requires Docker with PostgreSQL, Redis, and SeaweedFS:

```bash
cd reactive-resume

# Start all services + the app
docker compose -f compose.dev.yml up -d

# Or run just the infrastructure and start the app manually:
docker compose -f compose.dev.yml up -d postgres redis seaweedfs seaweedfs_create_bucket

# Then install deps and run dev (requires pnpm):
pnpm install
pnpm run dev
```

The resume builder runs at **http://localhost:3000**

### 3. Access the dashboard

- Visit **http://localhost:5173** for the landing page
- Click "Get Started Free" → "Dev Sign In (Skip Auth)" to go directly to **/dashboard**
- The dashboard embeds the Reactive Resume builder via iframe

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/dashboard` | Resume builder (embeds Reactive Resume) |
| `/pricing` | Pricing page |
| `/about` | About page |
| `/blog` | Blog |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/data-policy` | Data Policy |
| `/affiliate` | Affiliate Program |

## Environment Variables

Copy and configure for Reactive Resume:

```bash
cp reactive-resume/.env.example reactive-resume/.env.local
```

Key variables:
- `DATABASE_URL` — PostgreSQL connection string
- `REDIS_URL` — Redis connection string
- `S3_ENDPOINT` — SeaweedFS/Object storage endpoint
- `ACCESS_TOKEN_SECRET` / `REFRESH_TOKEN_SECRET` — JWT signing secrets
