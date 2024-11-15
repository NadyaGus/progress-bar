import { BaseComponent } from "./baseComponent";

export class Input extends BaseComponent {
  constructor({ progressBar, parentElement }) {
    super({ tagName: "input", className: "input", parentElement });
    this.progressBar = progressBar;

    this.addAttributes();
    this.element.addEventListener("input", this.handleInput.bind(this));
  }

  addAttributes() {
    this.element.setAttribute("type", "number");
    this.element.setAttribute("min", "0");
    this.element.setAttribute("max", "100");
  }

  handleInput() {
    this.progressBar.element.setAttribute("value", this.element.value);
  }
}
