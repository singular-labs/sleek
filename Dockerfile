# Dockerfile for installing sleek on Heroku
FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python3-pip python-dev build-essential
RUN DEBIAN_FRONTEND="noninteractive" TZ="Europe/London" apt-get install -y npm
COPY . /app
WORKDIR /app/backend
RUN ./build_static.sh
RUN pip3 install -r requirements.txt
RUN pip3 install -e .
WORKDIR /app/backend/src/sleek/samples
ENTRYPOINT ["python3", "-m", "sleek", "run", "-d", "-h", "0.0.0.0"]
