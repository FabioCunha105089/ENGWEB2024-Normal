FROM node
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 16000
CMD [ "npm", "start" ]
