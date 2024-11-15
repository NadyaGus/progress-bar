import { BaseComponent } from "./baseComponent";

export class Input extends BaseComponent {
  constructor({ progressBar, parentElement }) {
    super({ tagName: "input", className: "input", parentElement });
    this.progressBar = progressBar;

    this.addAttributes();
  }

  addAttributes() {
    this.element.setAttribute("type", "number");
    this.element.setAttribute("min", "0");
    this.element.setAttribute("max", "100");
  }

  handleInput() {
    // TODO: debounce input
  }
}
