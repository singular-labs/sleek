import uuid

import six

from collections import OrderedDict

from sleek.script import SleekScript
from sleek.script_status import ScriptStatus
from sleek.subprocess_runner import SubprocessRunner


class Sleek(object):
    def __init__(self, name):
        self.name = name
        self.scripts = OrderedDict()

        self.running_scripts = {}

    def register(self, click_command, script_name=None, creation_time=None, creating_user=None):
        script = SleekScript(click_command, script_name, creation_time, creating_user)
        self.scripts[script.id] = script

    def get_available_scripts(self):
        return [script.info for script in six.itervalues(self.scripts)]

    def get_script(self, script_id):
        if script_id not in self.scripts:
            raise Exception("OMG")

        return self.scripts[script_id]

    def run_script(self, script_id, param_values):
        script = self.get_script(script_id)
        runner = SubprocessRunner(script.run, param_values=param_values)

        script_run_id = str(uuid.uuid4())
        runner.start()

        self.running_scripts[script_run_id] = runner

        return script_run_id

    def get_script_status(self, script_run_id):
        if script_run_id not in self.running_scripts:
            raise Exception("Invalid script run id: %s" % script_run_id)

        runner = self.running_scripts[script_run_id]

        run_state = runner.run_state()
        logs = runner.read_output()
        result = runner.get_result()

        return ScriptStatus(run_state, logs, result)
