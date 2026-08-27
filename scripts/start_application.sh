#!/bin/bash

cd /var/www/nodejs-cicd-app

pm2 start server.js --name nodejs-cicd-app

pm2 save

exit 0
