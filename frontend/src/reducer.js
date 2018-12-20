// import {TOGGLE_SIDE_MENU} from "./actions";


const initialState = {
    availableScripts: [
        {
            name: 'Simple Script',
            description: 'The most amazing simple script'
        }, {
            name: 'Simple Script 2.0',
            description: 'The most amazing simple script EVER!!'
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
