FROM node:latest

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8000


CMD [ "yarn", "migration:up", "yarn", "dev" ]