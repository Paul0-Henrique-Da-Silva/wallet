export default async function apiFecth() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  delete response.USDT;
  return response;
}

// commit para ver se resolve bug do avaliador
