from flask import Flask, jsonify, request

app = Flask("Sleek")

@app.route("/")
def index():
    return app.send_static_file("index.html")
