from sleek.app import Sleek

from sample_script import sample_script
from sample_script_2 import sample_script_2

app = Sleek("Singular")
app.register(sample_script, script_name="Sample Script :-)")
app.register(sample_script_2, script_name="Sample Script 2 :-)")
