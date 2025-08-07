# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx on an unprivileged port
FROM nginx:stable-alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Ensure cache & run dirs are writable, and switch Nginx to listen on 8080
RUN mkdir -p /var/cache/nginx/client_temp /var/run/nginx \
    && chmod -R 0777 /var/cache/nginx /var/run/nginx \
    && sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf \
    && sed -i 's/listen \[::\]:80;/listen [::]:8080;/' /etc/nginx/conf.d/default.conf

# Expose the unprivileged HTTP port
EXPOSE 8080

# Launch Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
