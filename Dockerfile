FROM node:8.15-alpine
# set working directory
WORKDIR /app
# copy project file
COPY package*.json ./
# set npm proxy
RUN npm config set proxy "http://forwardproxy.extnp.national.com.au:3128/"
# install node packages
RUN npm set progress=false && \
    npm install && \
    npm cache clean --force
# copy app sources
COPY . .
