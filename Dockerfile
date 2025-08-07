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

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Pre-create & open-perm nginx cache and run dirs for non-root UIDs
RUN mkdir -p /var/cache/nginx/client_temp /var/run/nginx \
    && chmod -R 0777 /var/cache/nginx /var/run/nginx

# Expose HTTP port
EXPOSE 80

# Launch Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
