import Ball from "./Ball";

export default class Splash {
  constructor(x, y, colors, totalBalls, ballRadius, ballVelocity) {
    this.x = x;
    this.y = y;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.totalBalls = Math.random() * (totalBalls - 5) + 5;

    this.balls = [];
    for (let i = 0; i < this.totalBalls; i++) {
      this.ballRadius = Math.random() * (ballRadius - 5) + 5;
      this.vx = (Math.random() - 0.5) * ballVelocity;
      this.vy = -Math.random() * ballVelocity;

      const ball = new Ball(
        this.x,
        this.y,
        this.color,
        this.ballRadius,
        this.vx,
        this.vy
      );
      this.balls[i] = ball;
    }

    this.countDown = 1000;
  }

  draw(ctx, stageWidth, stageHeight, gravity, frictionAir, frictionGround) {
    this.countDown -= 1;

    this.balls.forEach((ball) => {
      ball.draw(
        ctx,
        stageWidth,
        stageHeight,
        gravity,
        frictionAir,
        frictionGround
      );
    });
  }
}
