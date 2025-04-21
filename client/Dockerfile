# Use official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile


# Copy all files from the project directory
COPY . .


RUN npm run build


FROM nginx:alpine

# Copy the build output to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config into the container
COPY default.conf /etc/nginx/conf.d/default.conf


# Expose port 80 for the React app
EXPOSE 80


# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
