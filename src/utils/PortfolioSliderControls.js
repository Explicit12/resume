export default class PortfolioSliderControls {
  static #leftArrow = document.querySelector(
    ".portfolio__slider__controls__arrow_left",
  );
  static #rightArrow = document.querySelector(
    ".portfolio__slider__controls__arrow_right",
  );
  static #swiperInstance;
  static init(swiperInstance) {
    this.#swiperInstance = swiperInstance;
    this.#setDisabled();

    swiperInstance.on("toEdge", this.#setDisabled.bind(this));
    swiperInstance.on("slideChange", this.#removeDisabled.bind(this));

    this.#leftArrow.addEventListener("click", () => {
      swiperInstance.slidePrev();
    });

    this.#rightArrow.addEventListener("click", () => {
      swiperInstance.slideNext();
    });
  }

  static #setDisabled() {
    if (this.#swiperInstance.isBeginning)
      this.#leftArrow.setAttribute("disabled", true);
    if (this.#swiperInstance.isEnd)
      this.#rightArrow.setAttribute("disabled", true);
  }

  static #removeDisabled() {
    if (!this.#swiperInstance.isEnd && this.#rightArrow.hasAttribute("disabled")) {
      this.#rightArrow.removeAttribute("disabled");
    }

    if (
      !this.#swiperInstance.isBeginning &&
      this.#leftArrow.hasAttribute("disabled")
    ) {
      this.#leftArrow.removeAttribute("disabled");
    }
  }
}
