import click


@click.command(help="Amazing grace")
@click.argument("param1", nargs=-1)
@click.option("--param2")
def sample_script(param1, param2):
    print(param1)
    print(param2)


@click.command(help="How sweet")
@click.argument("param3", nargs=-1)
@click.option("--param4")
@click.option("--param5")
def sample_script_2(param3, param4, param5):
    print(param3)
    print(param4)
    print(param5)


if __name__ == "__main__":
    sample_script()
