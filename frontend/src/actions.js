export const RUN_SCRIPT = "RUN_SCRIPT";
export const UPDATE_SCRIPT_STATUS = "UPDATE_SCRIPT_STATUS";
export const SCRIPT_FINISHED = "SCRIPT_FINISHED";
export const CLEAN_RUNNING_SCRIPT_STATE = "CLEAN_RUNNING_SCRIPT_STATE";


export function runScript(scriptID, paramValues) {
    return {
        "type": RUN_SCRIPT,
        "scriptID": scriptID,
        "paramValues": paramValues
    }
}

export function updateScriptStatus(scriptRunID, isDone, logs) {
    return {
        "type": UPDATE_SCRIPT_STATUS,
        "scriptRunID": scriptRunID,
        "isDone": isDone,
        "logs": logs
    }
}

export function scriptFinished(scriptID, result) {
    return {
        "type": SCRIPT_FINISHED,
        "scriptID": scriptID,
        "result": result
    }
}

export function cleanRunningScriptState() {
    return {
        "type": CLEAN_RUNNING_SCRIPT_STATE
    }
}
