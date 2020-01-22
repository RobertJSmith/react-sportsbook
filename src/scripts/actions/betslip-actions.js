export const addBet = ({id = 0,target='',betType='',oddsOffered=0}) => ({
    type: 'ADD_BET',
    bet: {
        id,
        target,
        betType,
        oddsOffered
    }
});

export const removeBet = (id) => ({
    type: 'REMOVE_BET',
    id
});

export const placeBet = ({id} = {}) => ({
    type: 'PLACE_BET',
    id
});