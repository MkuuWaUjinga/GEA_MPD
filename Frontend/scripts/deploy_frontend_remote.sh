#!/usr/bin/env bash
cd Frontend;
npm install;
npm run build;
cd ../Backend/web_hosting;
npm install;
sls deploy --stage dev -v;