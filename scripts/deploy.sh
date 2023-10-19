#!/bin/bash
set -e

echo "Deploying application ..."

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

npm -v
# Pull the latest changes from GitHub
cd ..
git pull

# Move into the client directory and build the React app
ls
cd client
npm install
npm run build

# Move into the server directory and build the Node.js app
# cd ../server
# npm install
# npm run build

# Move back to the root directory and start the Docker containers
cd ..
docker compose up -d

echo "🚀 Application deployed!"

