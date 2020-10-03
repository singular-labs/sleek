import attr
import os
from flask import jsonify, request, Blueprint, current_app

STATIC_FOLDER_PATH = os.path.abspath(os.path.join(__file__, "../static"))

sleek_blueprint = Blueprint("Sleek", "sleek", static_folder=STATIC_FOLDER_PATH, static_url_path="/static/")


@sleek_blueprint.route("/")
def index():
    return sleek_blueprint.send_static_file("index.html")


@sleek_blueprint.route("/api/get_available_scripts")
def get_available_scripts():
    sleek_app = getattr(current_app, "sleek_app")
    if sleek_app is None:
        raise Exception("Sleek app not defined!")

    return jsonify(sleek_app.get_available_scripts())


@sleek_blueprint.route("/api/get_script_details")
def get_script_details():
    sleek_app = getattr(current_app, "sleek_app")
    if sleek_app is None:
        raise Exception("Sleek app not defined!")

    script_id = request.args.get("script_id")
    if script_id is None:
        raise Exception("OMG")

    script = sleek_app.get_script(script_id)
    return jsonify(script.details)


@sleek_blueprint.route("/api/run_script", methods=["POST"])
def run_script():
    sleek_app = getattr(current_app, "sleek_app")
    if sleek_app is None:
        raise Exception("Sleek app not defined!")

    request_data = request.json
    script_id = request_data.get("script_id")
    param_values = request_data.get("param_values")
    if script_id is None or param_values is None:
        raise Exception("OMG: script_id=%s, param_values=%s" % (script_id, param_values))

    script_run_id = sleek_app.run_script(script_id, param_values)
    return jsonify({"script_run_id": script_run_id})


@sleek_blueprint.route("/api/get_script_status")
def get_script_status():
    sleek_app = getattr(current_app, "sleek_app")
    if sleek_app is None:
        raise Exception("Sleek app not defined!")

    script_run_id = request.args.get("script_run_id")
    if script_run_id is None:
        raise Exception("OMG")

    script_status = sleek_app.get_script_status(script_run_id)
    return jsonify(attr.asdict(script_status))
