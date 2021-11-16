export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker').then((response) => response.json()).then((json) => {
    const doacao = document.querySelector('.btc-preco');
    doacao.innerText = (1000 / json.BRL.sell).toFixed(4);
  }).catch((erro) => {
    console.log(Error(erro));
  });
}
