#!/usr/bin/env bash
if [ "$TRAVIS_BRANCH" == "dev" ]; then
      cd Frontend
      npm run build
      cd ../Backend
      npm install -g serverless;
      npm install;
      sls deploy --stage dev -v;
elif [ "$TRAVIS_EVENT_TYPE" == "push" ] && [ "$TRAVIS_BRANCH" == "master" ]
then
      cd Frontend
      npm run build
      cd ../Backend
      npm install -g serverless;
      npm install;
      sls deploy --stage prod;
fi