import { BaseComponent } from "../baseComponent";

import style from "./progressBar.module.css";

export class ProgressBar extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "div", className: style.progressBar, parentElement });

    this.renderProgressBar();
    this.handleProgressBar();

    this.value = 0;
  }

  renderProgressBar() {
    this.progress = new BaseComponent({
      tagName: "progress",
      className: style.progress,
      parentElement: this.element,
    }).element;

    this.progress.setAttribute("min", "0");
    this.progress.setAttribute("max", "100");
  }

  handleProgressBar(value = 25) {
    this.progress.setAttribute("value", value);
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.value >= value ? this.value-- : this.value++;

      this.progress.setAttribute("value", this.value);
      this.element.style = `--value: ${this.value};`;

      if (this.value == value) {
        clearInterval(this.interval);
      }
    }, 15);
  }

  handleAnimate(isAnimate = false) {
    isAnimate
      ? this.element.classList.add(style.animate)
      : this.element.classList.remove(style.animate);
  }

  handleHidden(isHidden = false) {
    isHidden
      ? this.element.classList.add(style.hide)
      : this.element.classList.remove(style.hide);
  }
}
