import six

from collections import OrderedDict

from sleek.script import SleekScript


class Sleek(object):
    def __init__(self, name):
        self.name = name
        self.scripts = OrderedDict()

    def register(self, click_command, script_name=None):
        script = SleekScript(click_command, script_name)
        self.scripts[script.id] = script

    def get_available_scripts(self):
        return [script.info for script in six.itervalues(self.scripts)]

    def get_script(self, script_id):
        if script_id not in self.scripts:
            raise Exception("OMG")

        return self.scripts[script_id]
