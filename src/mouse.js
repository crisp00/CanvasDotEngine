let mouse = { x: 0, y: 0 };
export function getMouse() {
  return mouse;
}

export function initMouse(canvas) {
  window.addEventListener("mousemove", (e) => {
    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x:
          ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
        y:
          ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
      };
    }
    mouse = getMousePos(canvas, e);
  });
}
