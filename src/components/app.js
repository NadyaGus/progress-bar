import { BaseComponent } from "./baseComponent";
import { Input } from "./input";
import { Toggle } from "./toggle";

export class App extends BaseComponent {
  constructor(parentElement) {
    super({ tagName: "div", className: "container", parentElement });

    this.progressBar = null;
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

    new Input({
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });

    new Toggle({
      title: "animate",
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });

    new Toggle({
      title: "hide",
      progressBar: this.progressBar,
      parentElement: controlsContainer.element,
    });
  }
}
