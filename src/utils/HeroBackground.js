import anime from "animejs";

export default class HeroBackground {
  static #container = document.querySelector(".hero__backgrond");
  static #canvas = document.querySelector("#hero__backgrond");
  static #ctx = this.#canvas.getContext("2d");
  static #shapes = [];
  static #colors = ["#FF00C7", "#F76AA0", "#00b5ca"];
  static #shapeSize = 150;

  static init() {
    for (let index = 0; index < 25; index++) {
      this.#shapes.push({
        x: anime.random(0, this.#canvas.clientWidth - this.#shapeSize),
        y: anime.random(0, this.#canvas.clientHeight - this.#shapeSize),
        color: this.#colors[anime.random(0, this.#colors.length - 1)],
      });
    }

    this.#show();
    this.#animate();
  }

  static #show() {
    anime.set(this.#container, { opacity: 0 });
    anime({
      targets: this.#container,
      opacity: 1,
      duration: 10000,
    })
  }

  static #animate() {
    anime({
      targets: this.#shapes,
      x: () => {
        console.log()
        return anime.random(100, this.#canvas.width - this.#shapeSize);
      },
      y: () => {
        return anime.random(100, this.#canvas.height - this.#shapeSize);
      },

      easing: "linear",
      duration: 10000,
      update: update.bind(this),
      complete: this.#animate.bind(this),
    });

    function update() {
      if (this.#canvas.width !== this.#container.clientWidth) {
        this.#canvas.width = this.#container.clientWidth;
        this.#canvas.height = this.#container.clientHeight;
      }

      this.#ctx.clearRect(
        0,
        0,
        this.#canvas.clientWidth,
        this.#canvas.clientHeight,
      );

      this.#shapes.forEach((shape) => {

        this.#ctx.beginPath();
        this.#ctx.arc(shape.x, shape.y, this.#shapeSize, 0, 2 * Math.PI);
        this.#ctx.fillStyle = shape.color;
        this.#ctx.fill();
      });
    }
  }
}
