FROM node:16.15-alpine
WORKDIR /usr/src/mybinder
COPY ./package*.json ./
COPY ./vite.config.ts ./
COPY ./tsconfig.json ./
COPY ./tsconfig.node.json ./
RUN npm install
COPY . .