FROM node:24-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install
COPY . .

RUN pnpm run build
EXPOSE 3000 

CMD [ "pnpm", "run", "preview" ]

