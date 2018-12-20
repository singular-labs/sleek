export const UPDATE_SCRIPTS_SEARCH = "UPDATE_SCRIPTS_SEARCH";

export function updateScriptsSearch(searchString) {
    return {
        "type": UPDATE_SCRIPTS_SEARCH,
        "searchString": searchString
    }
}