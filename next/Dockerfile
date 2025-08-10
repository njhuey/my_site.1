FROM node:22-alpine
WORKDIR /next
COPY . .
RUN yarn install
RUN yarn upgrade
RUN yarn add --dev typescript
RUN yarn add --dev @types/react
EXPOSE 3000