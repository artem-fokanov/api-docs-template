FROM node:10-slim

WORKDIR /usr/src/app

#COPY package*.json ./
COPY package.json ./

RUN npm install --global gulp-cli \
    && npm install \
    && gulp --version

#RUN npm init -y \
#    && npm install --global gulp-cli \
#    && npm install node-bourbon gulp gulp-sass gulp-autoprefixer gulp-clean-css gulp-rename gulp-concat gulp-uglify -D \
#    && npm install jquery popper.js bootstrap \
#    && gulp --version

#RUN npm install gulp -g && npm install nodemon -g && npm install bower -g
#RUN cd /app/public && bower install  --allow-root

COPY gulpfile.js ./


CMD ["gulp"]

# docker build -t gulp_api .
# docker run --rm -it --name gulp_api_c -v ${pwd}\app\js\:/usr/src/app/app/js -v ${pwd}\app\css\:/usr/src/app/app/css -v ${pwd}\scss:/usr/src/app/scss gulp_api