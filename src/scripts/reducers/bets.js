const betsReducerDefaultState = [];

export default (state = betsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_BET':
            debugger;
            let bets = [...state.bets, action.bet];

            return Object.assign({}, state, {
                bets
            })

        case 'PLACE_BET':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'REMOVE_BET':
            debugger;
            let unFilteredBets = [...state.bets];
            let filteredBets = [];
            filteredBets = unFilteredBets.filter((entry) => {
                return entry.id !== action.id;
            });
        
            return Object.assign({}, state, {
                bets: filteredBets
            })

        default:
            return state;
    }
};