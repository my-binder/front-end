FROM node:16.15-alpine
WORKDIR /usr/mybinder-frontend
COPY . .
RUN rm -rf /var/www/html/*
RUN npm install
RUN npm run build
RUN mv dist/* /var/www/html
WORKDIR /
RUN rm -rf /usr/mybinder-frontend