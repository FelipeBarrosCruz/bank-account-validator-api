FROM mhart/alpine-node:latest

RUN apk add --update \
    git \
    make \
    gcc \
    g++ \
    python

WORKDIR /src

COPY / ./

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]