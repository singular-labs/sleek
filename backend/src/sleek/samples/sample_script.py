import click
import time


@click.command(help="Yesterday")
@click.argument("param1", nargs=-1)
@click.option("--param2")
def sample_script(param1, param2):
    print("Param1: %s" % param1)
    print("Param2: %s" % param2)
    for i in range(20):
        print("Current line: %s" % i)
        time.sleep(1)


if __name__ == "__main__":
    sample_script()
