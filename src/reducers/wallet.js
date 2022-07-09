// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { KEY_OBJE_COINS } from '../actions';

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

    /// logica da 6 em construção
    //  case EXPENSES_WALLET:
    //   return {
    //     ...state,
    //   };

  default:
    return state;
  }
};
export default wallet;
