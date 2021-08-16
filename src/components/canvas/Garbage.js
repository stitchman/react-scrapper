export default class Garbage {
  constructor(img, stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.radius = 15;
    this.x = Math.random() * (this.stageWidth - 2 * this.radius) + this.radius;
    this.y = Math.random() * (this.stageHeight - 2 * this.radius) + this.radius;
    this.vx = Math.random() - 0.5;
    this.vy = Math.random() - 0.5;

    this.img = img;
    this.imgWidth = 60;
    this.imgHeight = 60;

    this.garbageWidth = 30;
    this.garbageHeight = 30;

    this.imgTotal = 6;
    this.index = Math.floor(Math.random() * this.imgTotal);
    this.rotateAngle = 0;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  update() {
    const minX = this.radius;
    const maxX = this.stageWidth - this.radius;
    const minY = this.radius;
    const maxY = this.stageHeight - this.radius;
    if ((this.x <= minX && this.vx < 0) || (this.x >= maxX && this.vx > 0)) {
      this.vx *= -1;
    } else if (
      (this.y <= minY && this.vy < 0) ||
      (this.y >= maxY && this.vy > 0)
    ) {
      this.vy *= -1;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.rotateAngle += 0.03;
  }

  draw(ctx) {
    this.update();

    // ctx.fillStyle = "yellow";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius + 5, 0, 2 * Math.PI);
    // ctx.fill();

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotateAngle);
    ctx.drawImage(
      this.img,
      this.imgWidth * this.index,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.garbageWidth / 2,
      -this.garbageHeight / 2,
      this.garbageWidth,
      this.garbageWidth
    );
    ctx.restore();
  }
}
