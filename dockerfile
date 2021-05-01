FROM node:14.15.1
WORKDIR /usr/app
COPY package.json .
RUN sh -c "npm install --quiet && npm rebuild bcrypt --build-from-source"
COPY . .
