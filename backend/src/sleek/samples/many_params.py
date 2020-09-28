import click


PARAM_COUNT = 8


@click.command(help="This is a boring script that just gets many params")
def many_params(**params):
    print("All params: %s" % str(params))


for i in range(PARAM_COUNT):
    many_params = click.argument("param%d" % (i + 1))(many_params)
