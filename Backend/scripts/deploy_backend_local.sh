#!/usr/bin/env bash
# Install Serverless
cd ../Backend;
npm install;
sls deploy --stage dev -v;
# Deploy rest API
cd ../rest_api;
npm install;
sls deploy --stage dev -v;
# Deploy analytics engine
cd ../analytics;
sls deploy --stage dev -v;