# Dockerfile for installing sleek on Heroku
FROM python:3.8.6-slim-buster AS builder

RUN apt-get update -y
RUN DEBIAN_FRONTEND="noninteractive" TZ="Europe/London" apt-get install -y npm
COPY . /app
WORKDIR /app/backend
RUN ./build_static.sh
RUN pip3 install -r requirements.txt
RUN python3 setup.py sdist bdist_wheel

FROM python:3.8.6-slim-buster

ENV WHEEL_FILENAME sleek-0.1-py3-none-any.whl

COPY --from=builder /app/backend/dist/$WHEEL_FILENAME /$WHEEL_FILENAME
COPY --from=builder /app/backend/src/sleek/samples /sample-app

RUN pip3 install /$WHEEL_FILENAME

WORKDIR /sample-app
CMD sh -c "sleek run -h 0.0.0.0 -p ${PORT:=5000}"
