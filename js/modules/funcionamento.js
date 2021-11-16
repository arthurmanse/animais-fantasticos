export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horaSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const hoje = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(hoje) !== -1;
  const horarioAberto = (horaAgora >= horaSemana[0] && horaAgora < horaSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
