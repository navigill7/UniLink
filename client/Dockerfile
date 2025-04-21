# Build stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# Build the React app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the React build output to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

ENV BACKEND_URL=http://backend-service:3001
# Copy the Nginx configuration template
COPY default.conf /etc/nginx/conf.d/default.conf

RUN cat /etc/nginx/conf.d/default.conf

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Expose port 80
EXPOSE 80

# Use the entrypoint script to generate config and start Nginx
CMD ["/entrypoint.sh"]
