import click


class SleekScript(object):
    UNKNOWN_AUTHOR_STRING = 'Unknown Author'
    UNKNOWN_DATE_STRING = 'Unknown Date'

    def __init__(self, click_command, name=None, creation_time=None, creating_user=None):
        """
        :param click_command:
         :type click_command: click.core.Command

        :param name:
         :type name: str

        :param creation_time: the time which the script was first introduced to the app
         :type creation_time: datetime.date

        :param creating_user: the user who created it
         :type creating_user: str
        """
        self.click_command = click_command
        self._name = name
        self._creation_time = creation_time
        self._creating_user = creating_user

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
    def creation_time(self):
        return self._creation_time.strftime('%b %d, %Y') if self._creation_time else self.UNKNOWN_DATE_STRING

    @property
    def creating_user(self):
        return self._creating_user or self.UNKNOWN_AUTHOR_STRING

    @property
    def info(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "creation_time": self.creation_time,
            "creating_user": self.creating_user
        }

    @property
    def details(self):
        return {
            "id": self.id,
            "name": self.name,
            "params": self.params
        }

    def run(self, param_values):
        return self.click_command.callback(**param_values)

    @staticmethod
    def _get_param_type(click_type):
        if click_type == click.STRING:
            return "string"
        raise Exception("OMG")
