export default class Funcionamento {
  constructor(dias, activeClass) {
    this.funcionamento = document.querySelector(dias);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horaSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.hoje = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.hoje) !== -1;
    const horarioAberto = (this.horaAgora >= this.horaSemana[0]
    && this.horaAgora < this.horaSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
