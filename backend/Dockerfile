FROM node:20-alpine3.18 as base
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN node ace build --ignore-ts-errors
WORKDIR /app/build
RUN yarn install --production
EXPOSE 3333
CMD ["node", "./bin/server.js"]