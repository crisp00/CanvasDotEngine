export function Vector2(x, y) {
  if (typeof x === "undefined" && typeof y === "undefined") {
    this.x = 0;
    this.y = 0;
  } else if (typeof y === "undefined" && typeof x === "object") {
    this.x = x.x;
    this.y = x.y;
  } else {
    this.x = x;
    this.y = y;
  }
}

Vector2.prototype.add = function (toAdd) {
  return new Vector2(this.x + toAdd.x, this.y + toAdd.y);
};

Vector2.prototype.subtract = function (toSubtract) {
  return new Vector2(this.x - toSubtract.x, this.y - toSubtract.y);
};

Vector2.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2.prototype.normalize = function () {
  const magnitude = this.magnitude();
  return new Vector2(this.x / magnitude, this.y / magnitude);
};

Vector2.prototype.inverse = function () {
  return new Vector2(this.x * -1, this.y * -1);
};
