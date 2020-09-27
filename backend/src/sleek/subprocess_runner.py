import sys
import datetime
import traceback

from multiprocessing import Pipe, Process


SLEEP_INTERVAL = 0.1
TIMESTAMP_FORMAT = "%A, %d %b %Y %I:%M:%S %p"


class SubprocessRunner(object):
    SCRIPT_RUN_STATE_SUCCESS = "success"
    SCRIPT_RUN_STATE_FAILURE = "failure"
    SCRIPT_RUN_STATE_RUNNING = "running"

    def __init__(self, func, *args, **kwargs):
        self.func = func
        self.args = args
        self.kwargs = kwargs

        self.parent_conn, self.child_conn = Pipe()
        self.process = Process(target=self.subprocess_func, args=(self.child_conn, self.args, self.kwargs))

    def start(self):
        self.process.start()

    def get_result(self):
        return self.process.exitcode

    def run_state(self):
        if self.process.exitcode == 0:
            return self.SCRIPT_RUN_STATE_SUCCESS
        if self.process.exitcode and self.process.exitcode != 0:
            return self.SCRIPT_RUN_STATE_FAILURE
        return self.SCRIPT_RUN_STATE_RUNNING

    def read_output(self):
        output = ""
        while self.parent_conn.poll(timeout=SLEEP_INTERVAL):
            timestamp, string = self.parent_conn.recv()
            if string == "\n":
                continue

            for line in string.splitlines():
                # TODO: Custom log formatting?
                output += "[%s] %s\n" % (timestamp.strftime(TIMESTAMP_FORMAT), line)
        return output

    def subprocess_func(self, child_conn, args, kwargs):
        sys.stdout = sys.stderr = PipeOutput(child_conn)

        try:
            return self.func(*args, **kwargs)
        except:
            print("An exception occured while running the script!")
            print("Traceback:")
            traceback.print_exc()
            sys.exit(1)


class PipeOutput(object):
    def __init__(self, pipe):
        self.pipe = pipe

    def write(self, string):
        timestamp = datetime.datetime.now()
        self.pipe.send((timestamp, string))
