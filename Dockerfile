FROM node:16.15
WORKDIR /usr/src/mybinder
COPY ./package*.json ./
RUN npm install
COPY . .