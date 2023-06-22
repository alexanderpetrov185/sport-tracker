FROM node:19-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest -g expo-cli@latest -g npx -g expo

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/sport-tracker-web
WORKDIR /opt/sport-tracker-web
COPY . .
RUN npm install

ENTRYPOINT ["npm", "run"]
CMD ["web"]



















# # ==== CONFIGURE =====
# # Use a Node 16 base image
# FROM node:19-alpine 
# # Set the working directory to /app inside the container
# WORKDIR /app
# # COPY package.json ./
# # COPY package-lock.json ./
# # COPY ./ ./
# RUN npm i
# # ==== RUN =======
# # Set the env to "production"
# ENV NODE_ENV production
# # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# EXPOSE 3000
# CMD ["npm", "run", "start"]