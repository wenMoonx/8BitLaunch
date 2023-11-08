FROM node:18
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=2048
COPY . .

RUN yarn
RUN yarn global add @quasar/cli
RUN quasar build -m ssr

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]

