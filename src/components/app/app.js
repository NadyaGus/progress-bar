import { BaseComponent } from "../baseComponent";
import { Input } from "../input/input";
import { ProgressBar } from "../progressBar/progressBar";
import { Toggle } from "../toggle/toggle";

import style from "./app.module.css";

export class App extends BaseComponent {
  constructor(parentElement) {
    super({ tagName: "div", className: style.wrapper, parentElement });

    this.renderElement();
  }

  renderElement() {
    new BaseComponent({
      tagName: "h1",
      className: style.header,
      parentElement: this.element,
    }).addTextContent("Progress");

    const container = new BaseComponent({
      tagName: "div",
      className: style.container,
      parentElement: this.element,
    }).element;

    this.progressBar = new ProgressBar({
      parentElement: container,
    });

    this.appendControls(container);
    this.subscribeControls();
  }

  appendControls(parentElement) {
    const controlsContainer = new BaseComponent({
      tagName: "div",
      className: style.controls,
      parentElement: parentElement,
    });

    this.input = new Input({
      parentElement: controlsContainer.element,
    });

    this.animateToggle = new Toggle({
      title: "animate",
      parentElement: controlsContainer.element,
    });

    this.hideToggle = new Toggle({
      title: "hide",
      parentElement: controlsContainer.element,
    });
  }

  subscribeControls() {
    this.input.element.addEventListener("newValue", () => {
      this.progressBar.handleProgressBar(this.input.state);
    });

    this.animateToggle.element.addEventListener("change", () => {
      this.progressBar.handleAnimate(this.animateToggle.state);
    });

    this.hideToggle.element.addEventListener("change", () => {
      this.progressBar.handleHidden(this.hideToggle.state);
    });
  }
}
