import { DEFAULT_VALUE, MAX_VALUE, MIN_VALUE } from "../../utils/constants";
import { debounce } from "../../utils/debounce";
import { BaseComponent } from "../baseComponent";

import style from "./input.module.css";

export class Input extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "div", className: style.container, parentElement });

    this.state = "";

    this.renderElement();
  }

  renderElement() {
    const label = new BaseComponent({
      tagName: "label",
      className: style.label,
      parentElement: this.element,
    }).element

    this.input = new BaseComponent({
      tagName: "input",
      className: style.input,
      parentElement: label,
    }).element;
    this.input.setAttribute("type", "number");
    this.input.value = DEFAULT_VALUE;

    new BaseComponent({
      tagName: "span",
      className: style.value,
      parentElement: label,
    }).addTextContent("Value");

    this.errorMessage = new BaseComponent({
      tagName: "span",
      className: style.error,
      parentElement: this.element,
    });
    this.errorMessage.addTextContent(`Value must be between ${MIN_VALUE} and ${MAX_VALUE}`);

    this.handleInput();
  }

  handleInput() {
    const debounceHandle = debounce(this.setState.bind(this), 600);
    this.input.addEventListener("input", () => {
      this.validate(debounceHandle);
    });
  }

  setState() {
    this.state = this.input.value;

    let event = new Event("newValue", { bubbles: true });

    if (!(this.state > MAX_VALUE || this.state < MIN_VALUE)) {
      this.input.dispatchEvent(event);
    }

    return this.state;
  }

  handleErrorMessage(isError = false) {
    isError
      ? this.errorMessage.element.classList.add(style.show)
      : this.errorMessage.element.classList.remove(style.show);
  }

  validate(debounceHandle) {
    if (this.input.value > MAX_VALUE) {
      this.handleErrorMessage(true);
    } else if (this.input.value < MIN_VALUE) {
      this.handleErrorMessage(true);
    } else {
      this.handleErrorMessage(false);
      debounceHandle(this.input.value);
    }
  }
}
