import { Vector2 } from "../math/vector2";
import { getMouse } from "../mouse";

export function RepelDot(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.bias = {
    x: 0,
    y: 0,
    radius: 0,
  };

  this.multiplier = {
    x: 1,
    y: 1,
    radius: 1,
  };
}

RepelDot.prototype.render = function (ctx, offset, zoom) {
  const mouse = getMouse();
  const distX = mouse.x - this.x;
  const distY = mouse.y - this.y;
  const dist2 = distX * distX + distY * distY;
  const dist = Math.sqrt(dist2);

  const toMouse = new Vector2(distX, distY);
  const mouseDirection = toMouse.inverse().normalize();
  this.bias.x = (mouseDirection.x * toMouse.magnitude()) / (dist2 / 1000);
  this.bias.y = (mouseDirection.y * toMouse.magnitude()) / (dist2 / 1000);

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(
    (this.x + offset.x) * this.multiplier.x + this.bias.x,
    (this.y + offset.y) * this.multiplier.y + this.bias.y,
    this.radius * zoom * this.multiplier.radius + this.bias.radius,
    this.radius * zoom * this.multiplier.radius + this.bias.radius,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
