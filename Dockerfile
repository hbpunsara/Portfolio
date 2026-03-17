# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and lock file (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the React/Vite app for production
RUN npm run build

# Serve stage using Nginx
FROM nginx:alpine

# Copy custom Nginx configuration to support React Router (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
