import { App } from "./src/components/app";

const node = document.getElementById('app');

try {
  const app = new App(node);
  app.init();
} catch (error) {
  console.error(error);
}
