# Stage 1: Use a lightweight web server image (e.g., node:20-slim)
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Install the lightweight HTTP server (serve)
RUN npm install -g serve

# Copy only the built files (public folder)
COPY ./public /app/public

# Expose the port to serve the app
EXPOSE 8000

# Command to serve the built files
CMD ["serve", "-s", "public", "-l", "8000"]
