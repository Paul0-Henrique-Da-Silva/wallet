export default async function asyncawesomeaapi() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  const KeyObjeButNotUSDT = Object.keys(response)
    .filter((currencies) => currencies !== 'USDT');
  return KeyObjeButNotUSDT;
}
