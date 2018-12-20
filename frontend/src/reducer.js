const initialState = {

};

function reducer(state=initialState, action) {
    switch (action.type) {
        case CLICK_CELL:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[state.stepNumber];
            const xIsNext = (state.stepNumber % 2 === 0);

            const squares = performMove(current.squares, action.row, action.col, xIsNext);
            if (!squares) {
                // Game over
                return state;
            }

            return {
                ...state,
                history: history.concat([{
                    squares: squares,
                    lastMoveRow: action.row,
                    lastMoveCol: action.col
                }]),
                stepNumber: state.stepNumber + 1
            };

        case JUMP_TO_MOVE:
            return {
                ...state,
                stepNumber: action.stepIndex
            };

        case CHANGE_MOVES_ORDER:
            return {
                ...state,
                movesAscending: action.ascending
            };

        default:
            return state;
    }
}

export default reducer;
