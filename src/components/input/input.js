import { debounce } from "../../utils/debounce";
import { BaseComponent } from "../baseComponent";

import style from "./input.module.css";

export class Input extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "input", className: style.input, parentElement });

    this.state = "";

    this.addAttributes();
    this.handleInput();
  }

  addAttributes() {
    this.element.setAttribute("type", "number");
    this.element.setAttribute("min", "0");
    this.element.setAttribute("max", "100");
  }

  handleInput() {
    const debounceHandle = debounce(this.setState.bind(this), 1000);
    this.element.addEventListener("input", () => {
      debounceHandle(this.element.value);
    });
  }

  setState() {
    this.state = this.element.value;

    this.state >= 100 ? (this.state = 100) : this.state;
    this.state <= 0 ? (this.state = 0) : this.state;

    let event = new Event("newValue");
    this.element.dispatchEvent(event);
    return this.state;
  }
}
