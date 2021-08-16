import Garbage from "./Garbage";

export default class GarbageController {
  constructor() {
    this.img = new Image();
    this.img.onload = () => {
      this.loaded();
    };
    this.img.src =
      "https://drive.google.com/uc?id=1TgyeJszMML1kfE0Nsmnhd7Am-v5P8-dw";

    this.garbages = [];

    this.isLoaded = false;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.garbages.forEach((garbage) => {
      garbage.resize(this.stageWidth, this.stageHeight);
    });
  }

  loaded() {
    this.isLoaded = true;
    this.addGarbage();
  }

  addGarbage() {
    this.garbages.push(
      new Garbage(this.img, this.stageWidth, this.stageHeight)
    );
  }

  draw(ctx) {
    if (this.isLoaded && Math.random() < 0.007) {
      this.addGarbage();
    }

    this.garbages.forEach((garbage) => {
      garbage.draw(ctx);
    });
  }
}
