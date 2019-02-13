import click


def get_triangle(height):
    width = height * 2

    # Init
    array = []
    for i in range(height):
        array.append([" "] * width)

    # Sides
    for i in range(0, height):
        # Distance of current / from start (or \ from end)
        distance = height - i - 1
        array[i][distance] = "/"
        array[i][width - distance - 1] = "\\"

    # Base
    for j in range(1, width - 1):
        array[height - 1][j] = "_"

    return array


def get_sierpinski_triangle(base_height, depth):
    if depth == 0:
        return get_triangle(base_height)
    else:
        inner = get_sierpinski_triangle(base_height, depth - 1)
        inner_height = len(inner)

        # Top triangle
        result = []
        for i, row in enumerate(inner):
            result.append([" "] * inner_height + row + [" "] * inner_height)

        # Bottom triangles
        for row in inner:
            result.append(row + row)

        return result


def print_array(array):
    for row in array:
        row_str = "".join(row)
        print(row_str)


@click.command(help="Draws the sierpinski triangle")
@click.option("--base-height")
@click.option("--depth")
def sierpinski(base_height, depth):
    base_height = int(base_height)
    depth = int(depth)

    assert base_height >= 1
    assert depth >= 1

    sierpinski_triangle = get_sierpinski_triangle(base_height, depth)
    print_array(sierpinski_triangle)


if __name__ == "__main__":
    sierpinski()
