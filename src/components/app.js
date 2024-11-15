import { BaseComponent } from "./baseComponent";

export class App extends BaseComponent {
  constructor(parentElement) {
    super({ tagName: "div", className: "container", parentElement });

    this.progressBar = null;
  }

  init() {
    this.appendHeader();
    this.appendProgressBar();
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
}
