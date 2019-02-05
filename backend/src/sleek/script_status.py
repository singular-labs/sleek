import attr


@attr.s
class ScriptStatus(object):
    is_done = attr.ib(type=bool)
    logs = attr.ib(type=str)
