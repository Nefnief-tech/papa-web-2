FROM alpine:3.18

ENV NODE_VERSION 22.1.0


RUN apk add git

RUN git clone https://github.com/Nefnief-tech/papa-web-2.git

WORKDIR papa-web-2

RUN npm install


COPY . .

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "node", ".output/server/index.mjs" ]
