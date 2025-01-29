# Use an official Node.js runtime as the base image
FROM node:latest as node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
# Copy Tsconfig
COPY tsconfig.json ./
# Coppy nodemon.json
COPY nodemon.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build 

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]