import click


@click.command(help="Computes the 4 basic arithmetic operations")
@click.argument("x", type=int)
@click.argument("y", type=int)
def arithmetic(x, y):
    # TODO: Have int params (for now, let it fail)
    x = int(x)
    y = int(y)

    print("x = %d" % x)
    print("y = %d" % y)
    print("x + y = %d" % (x + y))
    print("x - y = %d" % (x - y))
    print("x * y = %d" % (x * y))
    print("x / y = %d" % (x / y))


if __name__ == "__main__":
    arithmetic()
