from flask import Flask, jsonify, request

from sleek.app import Sleek
from sleek.scripts.sample_script import sample_script, sample_script_2

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

    script = sleek_app.get_script(script_id)
    return jsonify(script.details)


@app.route("/api/run_script", methods=["POST"])
def run_script():
    request_data = request.json
    script_id = request_data.get("script_id")
    param_values = request_data.get("param_values")
    if script_id is None or param_values is None:
        raise Exception("OMG: script_id=%s, param_values=%s" % (script_id, param_values))

    script = sleek_app.get_script(script_id)
    return jsonify(script.run(param_values))
