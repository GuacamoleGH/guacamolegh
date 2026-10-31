# ==============================================================================
# GuacamoleGH Landing Portal - Production Dockerfile
# ==============================================================================
# Multi-stage build: Compiles React + Vite + Tailwind and serves via Nginx Alpine

# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies using clean install
COPY package*.json ./
RUN npm ci

# Copy project source code
COPY . .

# Build production distribution
RUN npm run build

# Stage 2: Production runner with lightweight Nginx
FROM nginx:alpine AS runner

# Remove default nginx distribution files
RUN rm -rf /usr/share/nginx/html/*

# Copy optimized nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose internal port
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/healthz || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
