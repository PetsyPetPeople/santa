FROM node:lts-buster-slim AS base

WORKDIR /app

COPY package.json yarn.lock ./

FROM base as build
RUN export NODE_ENV=production
RUN yarn

COPY . .
RUN yarn build



FROM base as prod-build

RUN yarn install --production
RUN cp -R node_modules prod_node_modules


FROM base as prod

COPY --from=prod-build /app/prod_node_modules /app/node_modules
COPY --from=build  /app/.next /app/.next

EXPOSE 3000
CMD ["yarn", "start:prod"]