# FROM node:latest
# WORKDIR /app
# COPY package*.json ./
# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y nodejs \
#     npm       
# COPY . .
# CMD ["npm", "start"]


# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the frontend code to the working directory
COPY . .

# Build the React app for production
RUN npm run build


# Expose the port on which your frontend app will run (typically 80 for HTTP)
EXPOSE 3000

# Serve the built React app using a simple web server
CMD ["npx", "serve", "-s", "build"]

# # Use the official Node.js image as the base
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app

# # Copy the package.json and package-lock.json files to the container
# COPY package*.json ./

# # Install frontend dependencies
# RUN npm install

# # Copy the frontend source code to the container
# COPY . .

# # Build the frontend app
# RUN npm run build

# # Expose the frontend app port
# EXPOSE 3000

# # Start the frontend server
# CMD ["npm", "start"]
