FROM node:carbon-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["start", "ng", "build", "test", "lint"]