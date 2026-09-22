document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = "<h1>Hello World</h1><button id='ping'>Ping code.ts</button>";
  }

  document.getElementById("ping")?.addEventListener("click", () => {
    parent.postMessage({ pluginMessage: { type: "ping" } }, "*");
  });
});