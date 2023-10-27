# FROM node:18.16.1
# FROM mysql:latest
# WORKDIR /app
# COPY package.json .
# RUN npm install 

# COPY src src
# COPY public public
# EXPOSE 3000 
# EXPOSE 5000
# CMD ["npm","start"]
# CMD ["node","src/server.js"]

# Use an official Node.js runtime as a parent image
FROM node:18.16.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that your React app will run on
EXPOSE 80
EXPOSE 3000 
EXPOSE 5000

# Command to start your React app
CMD ["npm", "start"]
CMD ["node", "src/server.js"]

