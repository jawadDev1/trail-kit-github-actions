FROM node:20-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install
COPY . .

RUN pnpm run build
EXPOSE 4000 

CMD [ "pnpm", "run", "start" ]
