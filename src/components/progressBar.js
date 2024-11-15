import { BaseComponent } from "./baseComponent";

export class ProgressBar extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "progress", className: "progress-bar", parentElement });

    this.element.setAttribute("min", "0");
    this.element.setAttribute("max", "100");

    this.handleProgressBar();
  }

  handleProgressBar(value = 25) {
    this.element.setAttribute("value", value);
  }

  handleAnimate(isAnimate = false) {
    isAnimate
      ? this.element.classList.add("animate")
      : this.element.classList.remove("animate");
  }

  handleHidden(isHidden = false) {
    isHidden
      ? this.element.classList.add("hide")
      : this.element.classList.remove("hide");
  }
}
