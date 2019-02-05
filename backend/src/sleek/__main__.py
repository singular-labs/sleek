"""
This file contains the implementation for sleek's command line interface.
It allows running a development server based on a configuration.
It is implemented in a __main__ file so both running "sleek" and "python -m sleek" will work.
"""
import importlib

import click
import os
import sys

from flask import Flask
from werkzeug.serving import run_simple

from sleek.api import sleek_blueprint
from sleek.app import Sleek


@click.group()
def cli():
    pass


@cli.command("run", help="Runs a sleek development server.\n\n"
                               "Supports any arguments that 'flask run' supports"
                               "(run 'flask run --help' for more details)")
@click.option("-c", "--config", "config_file", type=str, default="sleekconfig.py",
              help="Path to sleek configuration file")
@click.option("-h", "--host", type=str, default="localhost",
              help="Sleek server hostname")
@click.option("-p", "--port", type=int, default=5000,
              help="Sleek server port")
@click.option("-d", "--debug", type=bool, is_flag=True, default=False,
              help="Use flask debug flags")
def run(config_file, host, port, debug):
    if not os.path.exists(config_file):
        raise click.UsageError("Configuration file not found: %s" % config_file)

    script_dir = os.path.dirname(os.path.abspath(config_file))
    sys.path.append(script_dir)

    config_module_name = os.path.splitext(os.path.basename(config_file))[0]
    config_module = importlib.import_module(config_module_name)

    sleek_app = getattr(config_module, "app", None)
    if sleek_app is None:
        raise click.UsageError("Invalid sleek configuration - missing app!")
    if not isinstance(sleek_app, Sleek):
        raise click.UsageError("Invalid sleek configuration - app attribute is not a Sleek app!")

    flask_app = Flask("SleekApp")
    flask_app.register_blueprint(sleek_blueprint)
    flask_app.sleek_app = sleek_app

    run_simple(host, port, flask_app, use_reloader=debug, use_debugger=debug)


if __name__ == "__main__":
    cli(prog_name="sleek")
