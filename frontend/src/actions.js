export const UPDATE_SCRIPTS_SEARCH = "UPDATE_SCRIPTS_SEARCH";
export const UPDATE_CHOSEN_SCRIPT = "UPDATE_CHOSEN_SCRIPT";
export const CHANGE_PARAM_VALUE = "CHANGE_PARAM_VALUE";

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

export function changeParamValue(name, value) {
    return {
        "type": CHANGE_PARAM_VALUE,
        "name": name,
        "value": value
    }
}
