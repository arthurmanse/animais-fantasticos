import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(button, list, eventos) {
    this.menuButton = document.querySelector(button);
    this.menuLista = document.querySelector(list);

    if (eventos === undefined) this.eventos = ['click', 'touchstart'];
    else this.eventos = eventos;

    this.ativo = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuLista.classList.add(this.ativo);
    this.menuButton.classList.add(this.ativo);
    outsideClick(this.menuLista, this.eventos, () => {
      this.menuLista.classList.remove(this.ativo);
      this.menuButton.classList.remove(this.ativo);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
