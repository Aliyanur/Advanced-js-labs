export function loadLazyComponent() {
    const div = document.createElement("div");
    div.textContent = "Lazy component loaded!";
    document.body.appendChild(div);
  }