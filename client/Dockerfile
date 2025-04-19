# Use an official Node.js image
FROM node:18.19.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
