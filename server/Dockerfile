# FROM node:latest
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD ["npm","start"]

# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the backend code to the working directory
COPY . .

# Expose the port on which your backend server will run
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
