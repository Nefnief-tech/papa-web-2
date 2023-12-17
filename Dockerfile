FROM node:16-alpine

RUN apk install --no-cache git

RUN git clone https://github.com/Nefnief-tech/papa-web-2.git
RUN cd papa-web-2


RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app



COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "node", ".output/server/index.mjs" ]