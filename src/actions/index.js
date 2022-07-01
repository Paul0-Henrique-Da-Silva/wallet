// Coloque aqui suas actions
export const ENDERECO_EMAIL = 'ENDERECO_EMAIL';

export default function emailAction(email) {
  return {
    type: ENDERECO_EMAIL,
    email,
    // payload: payload,
  };
}
