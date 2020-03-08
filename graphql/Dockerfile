FROM node:13-alpine

WORKDIR /app

ADD . /app

RUN npm i

RUN npm run build

CMD npm start