FROM node:9.3.0

MAINTAINER Les1ie me@les1ie.com

WORKDIR /gitbook

RUN npm --registry https://registry.npm.taobao.org install gitbook-cli -g

RUN gitbook init

EXPOSE 4000
