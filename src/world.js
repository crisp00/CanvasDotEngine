export function World(offset, zoom) {
  this.offset = offset || { x: 0, y: 0 };
  this.zoom = zoom || 1;
  this.objects = [];
}

World.prototype.addObject = function (object) {
  this.objects.push(object);
};

World.prototype.render = function (ctx) {
  for (let i = 0; i < this.objects.length; i++) {
    let obj = this.objects[i];
    obj.render(ctx, this.offset, this.zoom);
  }
};
