// Coloque aqui suas actions
export const ENDERECO_EMAIL = 'ENDERECO_EMAIL';
export const KEY_OBJE_COINS = 'KEY_OBJE_COINS';
export const EXPENSES_WALLET = 'EXPENSES_WALLET';

export function emailAction(email) {
  return {
    type: ENDERECO_EMAIL,
    email,
    // payload: payload,
  };
}

export function valueCurries(data) {
  return {
    type: KEY_OBJE_COINS,
    data,
  };
}

// export function valueCurriesExpences(expense) {
//   return {
//     type: EXPENSES_WALLET,
//     expense: { ...expense },
//   };
// }

export default function asyncawesomeapiNotDolar() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const KeyObjeButNotUSDT = Object.keys(response)
      .filter((currencies) => currencies !== 'USDT');
    dispatch(valueCurries(KeyObjeButNotUSDT));
  };
}

export function CurrenceSomeApi() {
  return async () => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencieData = await request.json();
    return currencieData;
  };
}
