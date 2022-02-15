FROM node:14.18.1-alpine

WORKDIR /front-end 

ENV PATH /front-end/front-end/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]