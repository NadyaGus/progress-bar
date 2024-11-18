import { defaultValue, MAX_VALUE, MIN_VALUE } from "../../utils/constants";
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

    const wrapper = new BaseComponent({
      tagName: "div",
      className: style.wrapper,
      parentElement: this.element,
    }).element;

    this.errorMessage = new BaseComponent({
      tagName: "div",
      className: style.error,
      parentElement: wrapper,
    });
    this.errorMessage.addTextContent(`Value must be between ${MIN_VALUE} and ${MAX_VALUE}`);

    new BaseComponent({
      tagName: "div",
      className: style.value,
      parentElement: wrapper,
    }).addTextContent("Value");

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
