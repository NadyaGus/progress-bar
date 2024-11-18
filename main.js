import { App } from "./src/components/app/app";

const node = document.getElementById("app");

try {
  new App(node);
} catch (error) {
  console.error(error);
}
