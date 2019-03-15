FROM node:10.15-alpine AS intermediate
# set working directory
WORKDIR /app
# copy project file
COPY package*.json ./
# set npm proxy
RUN npm config set proxy "http://forwardproxy.extnp.national.com.au:3128/"
# install node packages
RUN npm set progress=false && \
    npm install

FROM node:10.15-alpine
# copy node_modules
COPY --from=intermediate /app/node_modules ./node_modules
# copy app sources
COPY . .
CMD npm run build
