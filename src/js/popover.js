export default class Popover {
  constructor() {
    this.popoverBtn = document.querySelector('.popover_btn');
    this.container = document.querySelector('.container');
    this.addTooltip();
    this.tooltip = document.querySelector('.tooltip');
  }

  addTooltip() {
    const tooltip = `<div data-id=popover-tooltip class="tooltip hidden">
      <div class="tooltip_content">
      <h3 class="tooltip_title">Popover title</h3>
      <p class="tooltip_text">And here's some amazing content.It's very engaging.Right?</p>
      </div>
    </div>`;
    this.container.insertAdjacentHTML('beforeend', tooltip);
  }

  addListeners() {
    this.popoverBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.tooltip.classList.toggle('hidden');
    });
  }
}
