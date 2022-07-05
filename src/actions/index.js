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

export function valueCurriesButNotUSDT(currienciesTypes) {
  return {
    type: KEY_OBJE_BUT_NOT_USDT,
    curriencies: currienciesTypes,
  };
}
