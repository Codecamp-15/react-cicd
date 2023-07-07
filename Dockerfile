FROM node:alpine

WORKDIR '/app'

COPY . '/app'

RUN npm install


CMD [ "npm","start" ]

#  docker build --tag react-cc14 .