FROM node:latest

WORKDIR /usr/src/app

#COPY . /usr/src/app

RUN npm install --global gulp-cli
RUN npm install gulp -D

#RUN npm install gulp -g && npm install nodemon -g && npm install bower -g

RUN cd /usr/src/app
RUN npm install
#RUN cd /app/public && bower install  --allow-root

CMD ["gulp"]