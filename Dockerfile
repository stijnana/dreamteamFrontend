FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@15
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
#FROM nginx:1.21.0-alpine
#COPY --from=build /app/dist/* /usr/share/nginx/html/
