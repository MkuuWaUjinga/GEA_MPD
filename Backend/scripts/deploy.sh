#!/usr/bin/env bash
if [ "$TRAVIS_BRANCH" == "dev" ]; then
      cd Frontend;
      npm install;
      npm run build;
      cd ../Backend;
      npm install -g serverless;
      cd web_hosting;
      npm install;
      sls deploy --stage dev -v;
      cd ../rest_api;
      npm install;
      sls deploy --stage dev -v;
elif [ "$TRAVIS_EVENT_TYPE" == "push" ] && [ "$TRAVIS_BRANCH" == "master" ]
then
      cd Frontend;
      npm install;
      npm run build;
      cd ../Backend;
      npm install -g serverless;
      cd web_hosting;
      npm install;
      sls deploy --stage prod;
      cd ../rest_api;
      npm install;
      sls deploy --stage prod -v;
fi