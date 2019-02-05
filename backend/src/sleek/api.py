from flask import jsonify, request, Blueprint, current_app

sleek_blueprint = Blueprint("Sleek", __name__)


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

    script = sleek_app.get_script(script_id)
    return jsonify(script.run(param_values))
