# Static site served by nginx
FROM nginx:1.27-alpine

# Site content (only what the site actually needs)
COPY index.html dist.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY css/    /usr/share/nginx/html/css/
COPY js/     /usr/share/nginx/html/js/
COPY lib/    /usr/share/nginx/html/lib/

# nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost/healthz || exit 1
