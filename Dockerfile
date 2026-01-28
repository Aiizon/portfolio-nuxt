FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=false

COPY . .

RUN yarn build

FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache wget

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=true

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
