export default class Popover {
  constructor(element, popoverTitle, popoverBody) {
    this._element = element;
    this.popoverTitle = popoverTitle;
    this.popoverBody = popoverBody;
    this.componentElement = undefined;

    this.popoverEventMouseOver = this.popoverEventMouseOver.bind(this);
    this.popoverEventMouseOut = this.popoverEventMouseOut.bind(this);

    this.showPopover = this.showPopover.bind(this);
  }

  getComponentHTML() {
    const componentElement = document.createElement('div');
    componentElement.classList.add('popover');

    componentElement.innerHTML = `<div class="popover-title">${this.popoverTitle}</div>
                                  <div class="popover-body">${this.popoverBody}<div>`;

    return componentElement;
  }

  showPopover() {
    this.componentElement = this.getComponentHTML();

    document.body.appendChild(this.componentElement);

    const { left, top } = this._element.getBoundingClientRect();

    this.componentElement.style.left = `${left + this._element.offsetWidth / 2 - this.componentElement.offsetWidth / 2}px`;
    this.componentElement.style.top = `${top - this.componentElement.offsetHeight - 10}px`;
  }

  popoverEventMouseOver() {
    if (this.componentElement === undefined) {
      this.showPopover();
    }
  }

  popoverEventMouseOut() {
    if (this.componentElement !== undefined) {
      this.componentElement.remove();
      this.componentElement = undefined;
    }
  }
}
