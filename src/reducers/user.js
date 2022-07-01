// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ENDERECO_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'adaLoveLance@jupiter.com',
};

const user = (state = INITIAL_STATE, action) => {
  if (action.type === ENDERECO_EMAIL) {
    return {
      ...state,
      email: action.email.email,
    };
    /// com um argumento a mai .email.email ou payload.email
    /// a mais ele n atribui outro obj como filho
  }
  return {
    ...state,
  };
};

export default user;
