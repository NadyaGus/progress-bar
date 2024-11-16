import { BaseComponent } from "./baseComponent";
import { Input } from "./input/input";
import { ProgressBar } from "./progressBar/progressBar";
import { Toggle } from "./toggle/toggle";

export class App extends BaseComponent {
  constructor(parentElement) {
    super({ tagName: "div", className: "container", parentElement });

    this.progressBar = null;
  }

  init() {
    this.appendHeader();
    this.appendProgressBar();
    this.appendControls();

    this.subscribeControls();
  }

  appendHeader() {
    const header = new BaseComponent({
      tagName: "h1",
      className: "header",
      parentElement: this.element,
    });

    header.addTextContent("Progress");
  }

  appendProgressBar() {
    const progressBar = new ProgressBar({
      parentElement: this.element,
    });

    this.progressBar = progressBar;
  }

  appendControls() {
    const controlsContainer = new BaseComponent({
      tagName: "div",
      className: "controls",
      parentElement: this.element,
    });

    const input = new Input({
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });

    const animateToggle = new Toggle({
      title: "animate",
      parentElement: controlsContainer.element,
    });

    const hideToggle = new Toggle({
      title: "hide",
      parentElement: controlsContainer.element,
    });

    this.input = input;
    this.animateToggle = animateToggle;
    this.hideToggle = hideToggle;
  }

  subscribeControls() {
    this.input.element.addEventListener("input", () => {
      this.progressBar.handleProgressBar(this.input.element.value);
    });

    this.animateToggle.element.addEventListener("change", () => {
      this.progressBar.handleAnimate(this.animateToggle.state);
    });

    this.hideToggle.element.addEventListener("change", () => {
      this.progressBar.handleHidden(this.hideToggle.state);
    });
  }
}
