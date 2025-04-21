# Use official Node.js image as the base image
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Production Nginx stage

FROM nginx:stable-alpine

RUN mkdir /usr/share/nginx/buffer

COPY --from=build /app/out /usr/share/nginx/html
COPY --from=build /app/public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir /usr/share/nginx/log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]