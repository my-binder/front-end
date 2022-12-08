FROM node:16.15-alpine
WORKDIR /usr/mybinder-frontend
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf /var/www/html/*
RUN mv /usr/mybinder-frontend/dist/* /var/www/html
WORKDIR /
RUN rm -rf /usr/mybinder-frontend