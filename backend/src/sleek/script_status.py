import attr


@attr.s
class ScriptStatus(object):
    run_state = attr.ib(type=bool)
    logs = attr.ib(type=str)
    result = attr.ib(default=None)
