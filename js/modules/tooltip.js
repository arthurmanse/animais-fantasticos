export default class Tooltip {
  constructor(tooltip) {
    this.tootips = document.querySelectorAll(tooltip);

    // bind dos callbacks ↓
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip de acordo com a posição do mouse sem estourar o window.innerWidth ↓
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltop box e coloca no body ↓
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    // Cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);

    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTootopsEvent() {
    this.tootips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tootips.length) {
      this.addTootopsEvent();
    }
    return this;
  }
}
