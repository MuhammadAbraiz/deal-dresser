# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx on 8080 (OpenShift-friendly)
FROM nginx:stable-alpine

# Static site
COPY --from=builder /app/dist /usr/share/nginx/html

# Make nginx writable dirs for random UID & force listen on 8080
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
             /var/run/nginx \
  && chmod -R 0777 /var/cache/nginx /var/run/nginx \
  # replace default server to 8080 and SPA-friendly routing
  && printf 'server {\n  listen 8080;\n  listen [::]:8080;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
