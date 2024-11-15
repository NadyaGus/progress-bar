export class BaseComponent {
  constructor({ tagName = "div", className = "", parentElement }) {
    this.tagName = tagName;
    this.className = className;
    this.parentElement = parentElement;
    this.element = this;

    this.render();
  }

  addTextContent(text) {
    this.element.innerText = text;
  }

  render() {
    this.element = document.createElement(this.tagName);
    this.parentElement.append(this.element);
    this.element.className = this.className;
  }
}
