# Pascal Editor — Setup

## Prerequisites

- [Bun](https://bun.sh/) 1.3+ (or Node.js 18+)

## Quick Start

```bash
bun install
bun dev
```

The editor will be running at **http://localhost:3000**.

## Windows Installation

### 1. Install Bun

Open **PowerShell** and run:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Or install via [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/):

```powershell
winget install Oven-sh.Bun
```

Restart your terminal after installation so `bun` is available in `PATH`.

### 2. Clone and run

```powershell
git clone https://github.com/pascalorg/editor.git
cd editor
bun install
bun dev
```

The editor will be running at **http://localhost:3000**.

### Notes for Windows users

- **Git**: Install [Git for Windows](https://git-scm.com/download/win) if you don't have it.
- **Node.js alternative**: If you prefer Node.js, install it from [nodejs.org](https://nodejs.org/) and replace `bun` with `npm` or `npx turbo` in the commands above.
- **Long paths**: If you encounter path-length errors, enable long paths in Windows:
  ```powershell
  # Run as Administrator
  git config --system core.longpaths true
  ```

## Environment Variables (optional)

Copy `.env.example` to `.env` if you need:

```bash
# macOS / Linux
cp .env.example .env
```

```powershell
# Windows (PowerShell)
Copy-Item .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | Enables address search in the editor |
| `PORT` | No | Dev server port (default: 3000) |

The editor works fully without any environment variables.

## Monorepo Structure

```
├── apps/
│   └── editor/          # Next.js editor application
├── packages/
│   ├── core/            # @pascal-app/core — Scene schema, state, systems
│   ├── viewer/          # @pascal-app/viewer — 3D rendering
│   └── ui/              # Shared UI components
└── tooling/             # Build & release tooling
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start the development server |
| `bun build` | Build all packages |
| `bun check` | Lint and format check (Biome) |
| `bun check:fix` | Auto-fix lint and format issues |
| `bun check-types` | TypeScript type checking |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on submitting PRs and reporting issues.
