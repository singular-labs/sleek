export const UPDATE_SCRIPTS_SEARCH = "UPDATE_SCRIPTS_SEARCH";
export const UPDATE_CHOSEN_SCRIPT = "UPDATE_CHOSEN_SCRIPT";

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