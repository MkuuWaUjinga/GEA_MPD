#!/usr/bin/env bash
cd ../Frontend
npm run build
cd ../Backend
serverless deploy --aws-profile mpd -v
