import click


@click.command(help="This is a boring script that just gets many params")
@click.argument("string")
@click.argument("int", type=int)
@click.argument("bool", type=bool)
@click.argument("float", type=float)
@click.argument("choice", type=click.Choice(['A', 'B', 'C']))
def many_params(**params):
    print("All params: %s" % str(params))
