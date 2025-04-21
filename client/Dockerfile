# Use official Node.js image as the base image
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Production Nginx stage
FROM nginx:alpine

# Copy the build output to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# ✅ Copy custom Nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
