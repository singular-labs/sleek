from flask import Flask, jsonify, request

from app import Sleek
from scripts.sample_script import sample_script, sample_script_2

app = Flask("Sleek")

sleek_app = Sleek("Singular")
sleek_app.register(sample_script, script_name="Sample Script :-)")
sleek_app.register(sample_script_2, script_name="Sample Script 2 :-)")


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/get_available_scripts")
def get_available_scripts():
    return jsonify(sleek_app.get_available_scripts())


@app.route("/api/get_script_details")
def get_script_details():
    script_id = request.args.get("script_id")
    if script_id is None:
        raise Exception("OMG")

    return jsonify(sleek_app.get_script_details(script_id))

