# Use an official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package.json package-lock.json ./

# Remove bcrypt and reinstall everything inside the container
RUN npm cache clean --force \
    && rm -rf node_modules package-lock.json \
    && npm install \
    && npm rebuild bcrypt --build-from-source

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
