import {TOGGLE_SIDE_MENU} from "./actions";


const initialState = {
    isSideMenuOpen: true,
};


function reducer(state=initialState, action) {
    switch (action.type) {

        case TOGGLE_SIDE_MENU:
            return {
                ...state,
                isSideMenuOpen: action.shouldOpen
            };

        default:
            return state;
    }
}

export default reducer;
