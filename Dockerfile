# build stage
FROM node:16-alpine AS builder

WORKDIR /opt/webapp

# config files copy
COPY package.json /opt/webapp/package.json
COPY package-lock.json /opt/webapp/package-lock.json
COPY tsconfig.json /opt/webapp/tsconfig.json
COPY tsconfig.node.json /opt/webapp/tsconfig.node.json
COPY tailwind.config.cjs /opt/webapp/tailwind.config.cjs
COPY postcss.config.cjs /opt/webapp/postcss.config.cjs
COPY vite.config.ts /opt/webapp/vite.config.ts

# install dependencies
RUN npm install

# source files copy
COPY index.html /opt/webapp/index.html
COPY src/ /opt/webapp/src/

RUN npm run build

# Execute stage
FROM nginx:alpine

# nginx conf file required to handle React router
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/webapp/dist/ /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]