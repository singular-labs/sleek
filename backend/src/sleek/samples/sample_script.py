import click


@click.command(help="Yesterday")
@click.argument("param1", nargs=-1)
@click.option("--param2")
def sample_script(param1, param2):
    print(param1)
    print(param2)


if __name__ == "__main__":
    sample_script()
