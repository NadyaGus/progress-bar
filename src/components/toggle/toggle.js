import { BaseComponent } from "../baseComponent";
import style from "./toggle.module.css";

export class Toggle extends BaseComponent {
  constructor({ title, parentElement }) {
    super({ tagName: "label", className: style.container, parentElement });

    this.title = title;
    this.state = false;
    this.init();
  }

  init() {
    const title = this.title[0].toUpperCase() + this.title.slice(1);
    this.addTextContent(title);

    this.appendToggle();

    this.element.addEventListener("change", this.toggle.bind(this));
  }

  appendToggle() {
    this.checkbox = new BaseComponent({
      tagName: "input",
      className: style.checkbox,
      parentElement: this.element,
    });

    this.checkbox.element.setAttribute("type", "checkbox");

    this.span = new BaseComponent({
      tagName: "span",
      className: style.toggle,
      parentElement: this.element,
    });
  }

  toggle() {
    this.state = !this.state;
  }
}
