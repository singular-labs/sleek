"""
This file contains the implementation for sleek's command line interface.
It allows running a development server based on a configuration.
It is implemented in a __main__ file so both running "sleek" and "python -m sleek" will work.
"""

import click


@click.group()
def cli():
    pass


@cli.command("runserver", help="Runs a sleek development server")
def run():
    pass


if __name__ == "__main__":
    cli(prog_name="sleek")
