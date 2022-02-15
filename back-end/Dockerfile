FROM node:14.18.1-alpine

WORKDIR /back-end

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY . ./

EXPOSE 3001

CMD ["npm", "start"]