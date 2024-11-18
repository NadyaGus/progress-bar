import { defaultValue } from "../../utils/constants";
import { BaseComponent } from "../baseComponent";
import { MIN_VALUE } from "../../utils/constants";

import style from "./progressBar.module.css";

export class ProgressBar extends BaseComponent {
  constructor({ parentElement }) {
    super({ tagName: "div", className: style.progressBar, parentElement });

    this.value = MIN_VALUE;

    this.renderProgressBar();
    this.handleProgressBar();
  }

  renderProgressBar() {
    this.progress = new BaseComponent({
      tagName: "progress",
      className: style.progress,
      parentElement: this.element,
    }).element;
  }

  handleProgressBar(value = defaultValue) {
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
