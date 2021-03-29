export function createCanvas(root) {
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  root.appendChild(canvas);
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;
  window.addEventListener("resize", () => {
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  });
  return canvas;
}
