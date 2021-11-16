export default function initAnimaNumeros() {
  function animaNumero() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;

      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  const observaTarget = document.querySelector('.numeros');
  let observa = new MutationObserver(handleMutation);
  observa.observe(observaTarget, { attributes: true });

  function handleMutation(mutacao) {
    if (mutacao[0].target.classList.contains('ativo')) {
      observa.disconnect();
      animaNumero();
    }
  }
}
