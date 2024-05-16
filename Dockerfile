# Start from a Node.js 14-slim image
FROM node:14-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy all files from your host to the current location (i.e., /usr/src/app) in the image
COPY . .

# Change into the client directory, install dependencies, and build the React app
WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

# Move the build output folder into the server folder
RUN mv build ../server

# Change into the server directory, install dependencies, and build the server
WORKDIR /usr/src/app/server
RUN npm install
RUN npm run build
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run your app using CMD which keeps the container running
CMD ["pm2", "start", "src/server.js", "--no-daemon"]