import click


@click.command(help="Hey Jude")
@click.argument("param3", nargs=-1)
@click.option("--param4")
@click.option("--param5")
def sample_script_2(param3, param4, param5):
    print(param3)
    print(param4)
    print(param5)


if __name__ == "__main__":
    sample_script_2()
