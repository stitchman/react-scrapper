import GarbageController from "./GarbageController";
import Scrapper from "./Scrapper";
import Splash from "./Splash";

const SCRAPPER_RADIUS = 40;
const GRAVITY = 0.3;
const FRICTION_GROUND = 0.99;
const FRICTION_AIR = 0.99;
const TOTALBALLS = 15;
const BALL_RADIUS = 10;
const BALL_VELOCITY = 10;
// const COLORS = [
//   "#27C382",
//   "#5359FA",
//   "#FE847A",
//   "#FFC532",
//   "#A15FFA",
//   "#F04C29",
//   "#020101",
// ];
const COLORS = ["yellow", "red", "blue"];
const distance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

export default class App {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.garbageController = new GarbageController();

    this.splashes = [];
    this.score = 0;
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.isDown = false;
    this.isGameStart = false;
    window.addEventListener("pointerdown", this.onDown.bind(this), false);
    window.addEventListener("pointermove", this.onMove.bind(this), false);
    window.addEventListener("pointerup", this.onUp.bind(this), false);

    window.requestAnimationFrame(this.render.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.scrapper = new Scrapper(
      this.stageWidth - SCRAPPER_RADIUS,
      this.stageHeight - SCRAPPER_RADIUS,
      SCRAPPER_RADIUS
    );

    this.garbageController.resize(this.stageWidth, this.stageHeight);
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.garbageController.draw(this.ctx);

    this.scrapper.draw(this.ctx, this.isDown, this.mousePos);

    this.splashes.forEach((splash) => {
      splash.draw(
        this.ctx,
        this.stageWidth,
        this.stageHeight,
        GRAVITY,
        FRICTION_AIR,
        FRICTION_GROUND
      );
    });

    this.scrap();
    this.deleteSplash();

    if (this.isGameStart)
      this.drawScore(this.ctx, this.stageWidth, this.stageHeight);
  }

  scrap() {
    this.garbageController.garbages.forEach((garbage, index) => {
      if (
        this.isDown &&
        distance(this.scrapper.x, this.scrapper.y, garbage.x, garbage.y) <=
          this.scrapper.originalRadius + garbage.radius
      ) {
        this.garbageController.garbages.splice(index, 1);
        const splash = new Splash(
          garbage.x,
          garbage.y,
          COLORS,
          TOTALBALLS,
          BALL_RADIUS,
          BALL_VELOCITY
        );
        this.splashes.push(splash);

        if (this.garbageController.garbages.length === 0) {
          this.score += 200;
        } else {
          this.score += 100;
        }
      }
    });
  }

  deleteSplash() {
    this.splashes.forEach((splash, index) => {
      if (splash.countDown <= 0) {
        this.splashes.splice(index, 1);
      }
    });
  }

  drawScore(ctx, stageWidth, stageHeight) {
    ctx.fillStyle = "black";
    ctx.textAlign = "end";
    // ctx.font = "lighter 12px Arial";
    // ctx.fillText("score :", stageWidth - 10, 100);
    ctx.font = "bold italic 48px Arial";
    ctx.fillText(this.score, stageWidth - 15, 120);
  }

  onDown(e) {
    if (
      distance(e.offsetX, e.offsetY, this.scrapper.x, this.scrapper.y) <=
      this.scrapper.originalRadius
    ) {
      this.isDown = true;
      this.isGameStart = true;
      this.mousePos = {
        x: e.offsetX,
        y: e.offsetY,
      };
    }
  }

  onMove(e) {
    if (this.isDown) {
      this.mousePos = {
        x: e.offsetX,
        y: e.offsetY,
      };
    }
  }

  onUp() {
    this.isDown = false;
  }
}
