export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementoNumero(numero) {
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
  }

  animaNumero() {
    this.numeros.forEach((numero) => this.constructor.incrementoNumero(numero));
  }

  handleMutation(mutacao) {
    if (mutacao[0].target.classList.contains(this.observerClass)) {
      this.observa.disconnect();
      this.animaNumero();
    }
  }

  addMutationObserver() {
    this.observa = new MutationObserver(this.handleMutation);
    this.observa.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
