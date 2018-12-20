// import {TOGGLE_SIDE_MENU} from "./actions";


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
    ]
};


function reducer(state=initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;
