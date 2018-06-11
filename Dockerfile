# Angular App
FROM node:8.11 as angular6
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 4200
RUN $(npm bin)/ng build

# Express server app
FROM node:8.11 as express-server
WORKDIR /app
COPY package.json /app
COPY ./server /app/server
COPY ./bin /app/bin
RUN npm install


#Final image ========================================
FROM node:8.11 as mean-world
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular6 /app/dist /usr/src/app/dist
EXPOSE 3000
#ENV API_URL we-could-set-this-here-as-default
CMD [ "node", "bin/www.js" ]
