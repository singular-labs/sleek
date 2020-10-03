#!/usr/bin/env bash

pushd ../frontend

npm install
npm run build-prod

popd
