// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

export default wallet = (state = INITIAL_STATE, action) => {
  if (action.type) {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  return state;
};
