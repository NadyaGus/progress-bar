import { BaseComponent } from "./baseComponent";

export class Toggle extends BaseComponent {
  constructor({ progressBar, title, parentElement }) {
    super({ tagName: "label", className: "toggle", parentElement });

    this.progressBar = progressBar;
    this.title = title;
    this.state = false;
    this.init();
  }

  init() {
    const title = this.title[0].toUpperCase() + this.title.slice(1);
    this.addTextContent(title);

    this.appendCheckbox();

    this.element.addEventListener("change", this.toggle.bind(this));
  }

  appendCheckbox() {
    this.checkbox = new BaseComponent({
      tagName: "input",
      className: "checkbox",
      parentElement: this.element,
    });

    this.checkbox.element.setAttribute("type", "checkbox");
  }

  toggle() {
    this.state = !this.state;
    this.progressBar.element.classList.toggle(this.title, this.state);
  }
}
