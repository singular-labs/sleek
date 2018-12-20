from flask import Flask, jsonify, request

app = Flask("Sleek")


AVAILABLE_SCRIPTS = [
    {
        "id": 'simple_script',
        "name": 'Simple Script',
        "description": 'The most amazing simple script',
        "output_type": 'excel',
        "created_at": "2018-12-20",
        "created_by": "Noa Hadar"
    }, {
        "id": 'simple_script_2',
        "name": 'Simple Script 2.0',
        "description": 'The most amazing simple script EVER!! It does everything you ever wanted!',
        "output_type": 'excel',
        "created_at": "2018-12-21",
        "created_by": "Itamar Hartstein"
    }
]


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/get_available_scripts")
def get_available_scripts():
    return jsonify(AVAILABLE_SCRIPTS)
