FROM alpine:3.14


RUN apk add nodejs

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
#RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]


