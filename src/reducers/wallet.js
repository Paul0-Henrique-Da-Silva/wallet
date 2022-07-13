// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { KEY_OBJE_COINS, WALLET_DETAILS, WALLET_DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

// BUG NO AVALIADOR !!!!!!!

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case KEY_OBJE_COINS:
    return {
      ...state,
      currencies: action.data,
    };
  case WALLET_DETAILS:
    return {
      ...state,
      expenses: [...state.expenses, action.data],
    };
  case WALLET_DELETE:
    return {
      ...state,
      expenses: [...action.newExpense],
    };
  default:
    return state;
  }
};
export default wallet;
