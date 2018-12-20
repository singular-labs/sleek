import {UPDATE_CHOSEN_SCRIPT, UPDATE_SCRIPTS_SEARCH} from "./actions";


const initialState = {
    availableScripts: [
        {
            id: 'simple_script',
            name: 'Simple Script',
            description: 'The most amazing simple script',
            output_type: 'excel',
            created_at: "2018-12-20",
            created_by: "Noa Hadar"
        }, {
            id: 'simple_script_2',
            name: 'Simple Script 2.0',
            description: 'The most amazing simple script EVER!! It does everything you ever wanted!',
            output_type: 'excel',
            created_at: "2018-12-21",
            created_by: "Itamar Hartstein"
        }
    ],
    filteredScripts: [
        {
            id: 'simple_script',
            name: 'Simple Script',
            description: 'The most amazing simple script',
            output_type: 'excel',
            created_at: "2018-12-20",
            created_by: "Noa Hadar"
        }, {
            id: 'simple_script_2',
            name: 'Simple Script 2.0',
            description: 'The most amazing simple script EVER!! It does everything you ever wanted!',
            output_type: 'excel',
            created_at: "2018-12-21",
            created_by: "Itamar Hartstein"
        }
    ],
    chosenScriptID: null,
    searchString: null
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
                chosenScriptID: action.scriptID
            };

        default:
            return state;
    }
}

export default reducer;
