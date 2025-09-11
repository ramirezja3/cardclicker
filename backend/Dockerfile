# Use Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript (if using)
RUN npx tsc

# Expose backend port
EXPOSE 3000

# Start server
CMD ["node", "dist/index.js"]