FROM node:14 as base
# here u can add any pre-required actions, that will be shared between development and production



FROM base as development
# here u read from the base stage which is the same for both development and production
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm","run", "start-dev"]


FROM base as production
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm","start"]
