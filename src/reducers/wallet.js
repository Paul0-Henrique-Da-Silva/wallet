// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { KEY_OBJE_BUT_NOT_USDT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

export default wallet = (state = INITIAL_STATE, action) => {
  if (action.type === KEY_OBJE_BUT_NOT_USDT) {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  return state;
};
