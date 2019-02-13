import click
import time


@click.command(help="Count down with the given number of seconds")
@click.argument("seconds")
def timer(seconds):
    seconds = int(seconds)

    for i in range(seconds):
        print("%d seconds remaining" % (seconds - i))
        time.sleep(1)
    print("Done!")


if __name__ == "__main__":
    timer()
