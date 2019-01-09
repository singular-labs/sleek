import sys

from multiprocessing import Pipe, Process


class SubprocessRunner(object):
    def __init__(self, func, *args, **kwargs):
        self.func = func
        self.args = args
        self.kwargs = kwargs

        self.parent_conn, self.child_conn = Pipe()
        self.process = Process(target=self.subprocess_func, args=(self.child_conn, self.args, self.kwargs))

    def start(self):
        self.process.start()

    def read_output(self):
        output = ""
        while self.parent_conn.poll(timeout=0):
            output += self.parent_conn.recv()
        return output

    def subprocess_func(self, child_conn, args, kwargs):
        sys.stdout = sys.stderr = PipeOutput(child_conn)
        return self.func(*args, **kwargs)


class PipeOutput(object):
    def __init__(self, pipe):
        self.pipe = pipe

    def write(self, string):
        self.pipe.send(string)
