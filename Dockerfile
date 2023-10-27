FROM node:18.16.1
WORKDIR /app
COPY package.json .
RUN npm install 

COPY src src
COPY public public
EXPOSE 3000 
EXPOSE 5000
CMD ["npm","start"]
CMD ["node","src/server.js"]