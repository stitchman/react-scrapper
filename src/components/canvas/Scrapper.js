export default class Scrapper {
  constructor(x, y, radius) {
    this.x = x;
    this.ox = this.x;
    this.y = y;
    this.oy = this.y;
    this.radius = radius;
    this.originalRadius = this.radius;
    this.speed = 0.05;
    this.cur = 0;

    this.img = new Image();
    this.img.onload = () => {
      this.loaded();
    };
    this.img.src =
      "https://drive.google.com/uc?id=185MmM4LYmMTl_bn3HO3fK42-d7Em700G";

    this.imgWidth = 160;
    this.imgHeight = 160;

    this.scrapperWidth = 80;
    this.scrapperHeight = 80;

    this.isLoaded = false;
  }

  loaded() {
    this.isLoaded = true;
  }

  draw(ctx, isDown, mousePos) {
    if (isDown && mousePos) {
      this.x = mousePos.x;
      this.y = mousePos.y;
      this.radius = this.originalRadius;
    } else if (
      (!isDown && (this.x <= this.ox - 1.5 || this.x >= this.ox + 1.5)) ||
      this.y <= this.oy - 1.5 ||
      this.y >= this.oy + 1.5
    ) {
      const angle = Math.atan2(this.y - this.oy, this.x - this.ox);
      const vx = -Math.cos(angle) * 1.5;
      const vy = -Math.sin(angle) * 1.5;
      this.x += vx;
      this.y += vy;

      this.cur += this.speed;
      this.radius =
        this.originalRadius * 0.8 +
        this.originalRadius * 0.2 * Math.abs(Math.sin(this.cur));
    } else {
      this.x = this.ox;
      this.y = this.oy;
      this.cur += this.speed;
      this.radius =
        this.originalRadius * 0.8 +
        this.originalRadius * 0.2 * Math.abs(Math.sin(this.cur));
    }

    if (this.isLoaded) {
    }
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    // ctx.font = "48px Arial";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillText("♻️", this.x, this.y);

    // ctx.save();
    // ctx.translate(this.x, this.y);
    // // ctx.rotate(this.rotateAngle);
    // ctx.drawImage(
    //   this.img,
    //   0,
    //   0,
    //   this.imgWidth,
    //   this.imgHeight,
    //   -this.scrapperWidth / 2,
    //   -this.scrapperHeight / 2,
    //   this.scrapperWidth,
    //   this.scrapperWidth
    // );
    // ctx.restore();
  }
}
