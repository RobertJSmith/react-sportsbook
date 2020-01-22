import {createStore, combineReducers} from 'redux';
import betsReducer from '../reducers/bets';

const testBets = [{
  id: 1,
  target: 'Santas little helper',
  betType: 'To Win',
  oddsOffered: 'SP'
}, 
{
  id: 2,
  target: 'Chelsea',
  betType: 'Most Goals in First Half',
  oddsOffered: '2/6'
}, 
{
  id: 3,
  target: 'Sea biscuit',
  betType: 'Each Way',
  oddsOffered: '8/1'
}];

const initialState = {
  bets: []
}

export default () => {
    //Store creation
    const store = createStore(
      betsReducer,
      //combineReducers({
      //    expenses: expensesReducer,
      //    filters: filtersReducer
      //}), 
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};