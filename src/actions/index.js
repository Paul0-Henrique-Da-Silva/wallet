// Coloque aqui suas actions
export const ENDERECO_EMAIL = 'ENDERECO_EMAIL';
export const KEY_OBJE_COINS = 'KEY_OBJE_COINS';
export const WALLET_DETAILS = 'WALLET_DETAILS';

export function emailAction(email) {
  return {
    type: ENDERECO_EMAIL,
    email,
    // payload: payload,
  };
}

// d=action coin currebce ustd, btc..
export function valueCurries(data) {
  return {
    type: KEY_OBJE_COINS,
    data,
  };
}

export function valueCurriesExpences(data) {
  return {
    type: WALLET_DETAILS,
    data,
  };
}

export function asyncawesomeApi() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    delete response.USDT;
    const KeyObjeButNotUSDT = Object.keys(response);
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
