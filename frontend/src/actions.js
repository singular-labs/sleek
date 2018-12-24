export const UPDATE_AVAILABLE_SCRIPTS = "UPDATE_AVAILABLE_SCRIPTS";
export const UPDATE_SCRIPTS_SEARCH = "UPDATE_SCRIPTS_SEARCH";
export const UPDATE_CHOSEN_SCRIPT = "UPDATE_CHOSEN_SCRIPT";
export const UPDATE_CHOSEN_SCRIPT_DETAILS = "UPDATE_CHOSEN_SCRIPT_DETAILS";
export const CHANGE_PARAM_VALUE = "CHANGE_PARAM_VALUE";


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
