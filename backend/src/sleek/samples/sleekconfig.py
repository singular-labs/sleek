import datetime

from sleek.app import Sleek

from arithmetic import arithmetic
from sierpinski import sierpinski
from timer import timer

app = Sleek("Singular")
app.register(
    arithmetic,
    script_name="Arithmetic",
    creating_user="Noa Hadar",
    creation_time=datetime.date(2020, 3, 6)
)
app.register(
    sierpinski,
    script_name="Sierpinski Triangle",
    creating_user="Itamar Hartstein",
    creation_time=datetime.date(2019, 9, 26)
)
app.register(
    timer,
    script_name="Countdown Timer"
)
