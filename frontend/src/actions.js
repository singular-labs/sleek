export const UPDATE_AVAILABLE_SCRIPTS = "UPDATE_AVAILABLE_SCRIPTS";
export const UPDATE_SCRIPTS_SEARCH = "UPDATE_SCRIPTS_SEARCH";
export const UPDATE_CHOSEN_SCRIPT = "UPDATE_CHOSEN_SCRIPT";
export const UPDATE_CHOSEN_SCRIPT_DETAILS = "UPDATE_CHOSEN_SCRIPT_DETAILS";
export const CHANGE_PARAM_VALUE = "CHANGE_PARAM_VALUE";
export const RUN_SCRIPT = "RUN_SCRIPT";
export const UPDATE_SCRIPT_STATUS = "UPDATE_SCRIPT_STATUS";
export const SCRIPT_FINISHED = "SCRIPT_FINISHED";
export const CLEAN_RUNNING_SCRIPT_STATE = "CLEAN_RUNNING_SCRIPT_STATE";


export function updateAvailableScripts(availableScripts) {
    return {
        "type": UPDATE_AVAILABLE_SCRIPTS,
        "scripts": availableScripts
    }
}

export function updateScriptsSearch(searchString) {
    return {
        "type": UPDATE_SCRIPTS_SEARCH,
        "searchString": searchString
    }
}

export function updateChosenScript(scriptID) {
    return {
        "type": UPDATE_CHOSEN_SCRIPT,
        "scriptID": scriptID
    }
}

export function updateChosenScriptDetails(scriptDetails) {
    return {
        "type": UPDATE_CHOSEN_SCRIPT_DETAILS,
        "scriptDetails": scriptDetails
    }
}

export function changeParamValue(name, value) {
    return {
        "type": CHANGE_PARAM_VALUE,
        "name": name,
        "value": value
    }
}

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
