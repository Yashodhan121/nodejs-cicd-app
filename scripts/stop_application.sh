#!/bin/bash

pm2 stop nodejs-cicd-app || true
pm2 delete nodejs-cicd-app || true

exit 0
