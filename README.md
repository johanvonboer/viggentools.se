# viggentools.se

A small collection of tools for the AJS 37 Viggen in DCS (quick-reference docs and
an RWR tone generator). Static site — `index.html` plus the `dist.js` bundle.

## Deployment

Served by nginx in a container, managed with Docker Compose.

```sh
# build and start (defaults to http://localhost:8080)
docker compose up -d --build

# choose a different host port
HTTP_PORT=9000 docker compose up -d --build

# logs / status
docker compose logs -f
docker compose ps

# stop
docker compose down
```

- `Dockerfile` — copies the site into `nginx:1.27-alpine`.
- `nginx/default.conf` — gzip, static-asset caching, security headers, `/healthz`.
- `compose.yml` — one `web` service, `HTTP_PORT` (default `8080`) → container `80`,
  `restart: unless-stopped`, container healthcheck on `/healthz`.
