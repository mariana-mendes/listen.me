FROM node:11
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm rebuild node-sass --force
RUN npm install -g cordova ionic && cordova telemetry off 
COPY . ./app
CMD ["ionic","serve"]
