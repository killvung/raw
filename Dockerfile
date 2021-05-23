FROM node:14-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development
RUN npm install --save rimraf

COPY . .

RUN npm run build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development . .

RUN npm prune --production

EXPOSE 3000

CMD ["node", "dist/main"]
