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
    this.addAttributes();

    new BaseComponent({
      tagName: "span",
      className: style.value,
      parentElement: this.element,
    }).addTextContent("Value");

    this.handleInput();
  }

  addAttributes() {
    this.input.setAttribute("type", "number");
    this.input.setAttribute("value", "25");
  }

  handleInput() {
    const debounceHandle = debounce(this.setState.bind(this), 1000);
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
    this.input.setAttribute("value", this.state);

    return this.state;
  }
}
