#!/usr/bin/env bash
# Start Frontend
cd Frontend;
npm install;
npm run build;
# Install Serverless
cd ../Backend;
npm install -g serverless;
# Deploy Website
cd web_hosting;
npm install;
sls deploy --stage dev -v;
# Deploy rest API
cd ../rest_api;
npm install;
sls deploy --stage dev -v;
# Deploy analytics engine
cd ../analytics;
sls deploy --stage dev -v;