#!/usr/bin/env bash

heroku container:push web --app sleek-py
heroku container:release web --app sleek-py
