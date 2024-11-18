import { defaultValue } from "../../utils/constants";
import { debounce } from "../../utils/debounce";
import { BaseComponent } from "../baseComponent";

import style from "./input.module.css";

export class Input extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "label", className: style.container, parentElement });

    this.state = "";

    this.renderElement();
  }

  renderElement() {
    this.input = new BaseComponent({
      tagName: "input",
      className: style.input,
      parentElement: this.element,
    }).element;
    this.input.setAttribute("type", "number");
    this.input.value = defaultValue;

    new BaseComponent({
      tagName: "span",
      className: style.value,
      parentElement: this.element,
    }).addTextContent("Value");

    this.handleInput();
  }

  handleInput() {
    const debounceHandle = debounce(this.setState.bind(this), 600);
    this.input.addEventListener("input", () => {
      debounceHandle(this.input.value);
    });
  }

  setState() {
    this.state = this.input.value;

    this.state >= 100 ? (this.state = 100) : this.state;
    this.state <= 0 ? (this.state = 0) : this.state;

    let event = new Event("newValue", { bubbles: true });
    this.input.dispatchEvent(event);

    return this.state;
  }
}
