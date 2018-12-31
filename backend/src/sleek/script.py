import click


class SleekScript(object):
    def __init__(self, click_command, name=None):
        """
        :param click_command:
         :type click_command: click.core.Command
        :param name:
         :type name: str
        """
        self.click_command = click_command
        self._name = name

    @property
    def id(self):
        return self.click_command.name

    @property
    def name(self):
        return self._name or self.id

    @property
    def description(self):
        return self.click_command.help

    @property
    def params(self):
        return [{"name": param.name, "type": self._get_param_type(param.type)} for param in self.click_command.params]

    @property
    def info(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description
        }

    @property
    def details(self):
        return {
            "name": self.name,
            "params": self.params
        }

    @staticmethod
    def _get_param_type(click_type):
        if click_type == click.STRING:
            return "string"
        raise Exception("OMG")
