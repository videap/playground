FROM node:14-slim
COPY . /app
WORKDIR /app
RUN npm i
CMD ["node", "error.js", "&&", "sleep", "infinity"]
