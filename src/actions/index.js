// Coloque aqui suas actions
export const ENDERECO_EMAIL = 'ENDERECO_EMAIL';
export const KEY_OBJE_BUT_NOT_USDT = 'KEY_OBJE_BUT_NOT_USD';

export function emailAction(email) {
  return {
    type: ENDERECO_EMAIL,
    email,
    // payload: payload,
  };
}

export function valueCurriesButNotUSDT(data) {
  return {
    type: KEY_OBJE_BUT_NOT_USDT,
    data,
  };
}

export default function asyncawesomeapi() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const KeyObjeButNotUSDT = Object.keys(response)
      .filter((currencies) => currencies !== 'USDT');
    dispatch(valueCurriesButNotUSDT(KeyObjeButNotUSDT));
  };
}
