FROM node:10.21.0

RUN mkdir /pokeapp
WORKDIR /pokeapp

COPY package.json /pokeapp
RUN npm install --no-optional

COPY . /pokeapp
