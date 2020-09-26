import {
    CHANGE_PARAM_VALUE,
    UPDATE_SCRIPT_STATUS,
    SCRIPT_FINISHED, CLEAN_RUNNING_SCRIPT_STATE
} from "./actions";

const initialState = {
    paramValues: {},
    scriptStatus: {
        scriptRunID: null,
        isDone: false,
        logs: ""
    },
    scriptResult: null
};


function reducer(state=initialState, action) {
    switch (action.type) {
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
