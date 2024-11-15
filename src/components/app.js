import { BaseComponent } from "./baseComponent";
import { Input } from "./input";
import { Toggle } from "./toggle";

export class App extends BaseComponent {
  constructor(parentElement) {
    super({ tagName: "div", className: "container", parentElement });

    this.progressBar = null;
    this.input = null;
    this.toggleAnimation = null;
    this.toggleHide = null;
  }

  init() {
    this.appendHeader();
    this.appendProgressBar();
    this.appendControls();
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
    const progressBar = new BaseComponent({
      tagName: "div",
      className: "progress-bar",
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
    this.input = input;

    const toggleAnimation = new Toggle({
      title: "animate",
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });
    this.toggleAnimation = toggleAnimation;

    const toggleHide = new Toggle({
      title: "hide",
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });
    this.toggleHide = toggleHide;
  }
}
