from sleek.app import Sleek

from arithmetic import arithmetic
from sierpinski import sierpinski
from timer import timer

app = Sleek("Singular")
app.register(arithmetic, script_name="Arithmetic")
app.register(sierpinski, script_name="Sierpinski Triangle")
app.register(timer, script_name="Countdown Timer")
