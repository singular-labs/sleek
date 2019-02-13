import {
    UPDATE_CHOSEN_SCRIPT,
    UPDATE_SCRIPTS_SEARCH,
    CHANGE_PARAM_VALUE,
    UPDATE_AVAILABLE_SCRIPTS,
    UPDATE_CHOSEN_SCRIPT_DETAILS,
    UPDATE_SCRIPT_STATUS,
    SCRIPT_FINISHED, CLEAN_RUNNING_SCRIPT_STATE
} from "./actions";

const initialState = {
    availableScripts: [],
    filteredScripts: [],
    searchString: null,
    chosenScriptID: null,
    chosenScriptDetails: null,
    paramValues: {},
    scriptStatus: {
        scriptRunID: null,
        isDone: false,
        logs: ""
    },
    scriptResult: null
};


function filterScripts(scripts, filterString) {
    if (filterString === null) {
        return scripts
    } else {
        const searchableScriptAttributes = ['name', 'description'];
        const lowerFilterString = filterString.toLowerCase();

        return scripts.filter((script) => {
            return searchableScriptAttributes.some((scriptAttr) => {
                    return script[scriptAttr].toLowerCase().indexOf(lowerFilterString) > -1
                }
            )
        })

    }
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_AVAILABLE_SCRIPTS:
            return {
                ...state,
                availableScripts: action.scripts,
                filteredScripts: action.scripts
            };

        case UPDATE_SCRIPTS_SEARCH:
            const availableScripts = state.availableScripts.slice();

            return {
                ...state,
                searchString: action.searchString,
                filteredScripts: filterScripts(availableScripts, action.searchString)
            };

        case UPDATE_CHOSEN_SCRIPT:
            return {
                ...state,
                chosenScriptID: action.scriptID,
                paramValues: {}
            };

        case UPDATE_CHOSEN_SCRIPT_DETAILS:
            return {
                ...state,
                chosenScriptDetails: action.scriptDetails
            };

        case CHANGE_PARAM_VALUE:
            return {
                ...state,
                paramValues: {
                    ...state.paramValues,
                    [action.name]: action.value
                }
            };

        case UPDATE_SCRIPT_STATUS:
            return {
                ...state,
                scriptStatus: {
                    scriptRunID: action.scriptRunID,
                    isDone: action.isDone,
                    logs: state.scriptStatus.logs + action.logs
                }
            };

        case SCRIPT_FINISHED:
            return {
                ...state,
                scriptResult: action.result
            };

        case CLEAN_RUNNING_SCRIPT_STATE:
            return {
                ...state,
                scriptStatus: {
                    scriptRunID: null,
                    isDone: false,
                    logs: ""
                },
                scriptResult: null
            };

        default:
            return state;
    }
}

export default reducer;
