FROM node:10.15-alpine AS intermediate
# set working directory
WORKDIR /app
# copy project file
COPY package*.json ./
# install node packages
RUN npm set progress=false && \
    npm install

FROM alpine:3.5
RUN apk add --no-cache nodejs
# copy node_modules
COPY --from=intermediate /app/node_modules ./node_modules
# copy app sources
COPY . .
CMD npm run build
