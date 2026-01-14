# Curandera Irydologia — landing page

Statyczny landing page zbudowany w React + Vite + Tailwind.

## Lokalne uruchomienie

Wymagania: Node.js

1. Instalacja zależności: `npm install`
2. Start dev servera: `npm run dev` (domyślnie `http://localhost:3002`)

## Build

- Build produkcyjny: `npm run build` (output do `dist/`)
- Typecheck: `npm run typecheck`

## Deploy (custom hosting)

Deploy jest robiony automatycznie przez GitHub Actions (workflow w `.github/workflows/deploy-server.yml`) po pushu na branch główny.

Wymagane sekrety w repo (Settings → Secrets and variables → Actions):

- `SSH_HOST`
- `SSH_PORT`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_TARGET_DIR` (np. `/home/srv66853/domains/irydologia.curandera.pl/public_html`)
