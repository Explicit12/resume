export default class AnchorLinks {
  static #aboutLink = document.querySelector("#about-link");
  static #portfolioLink = document.querySelector("#portfolio-link");
  static #aboutBlock = document.querySelector(".about");
  static #portfolioBlock = document.querySelector(".portfolio");

  static init() {
    this.#aboutLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.#aboutBlock.scrollIntoView({ behavior: "smooth" });
    });

    this.#portfolioLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.#portfolioBlock.scrollIntoView({ behavior: "smooth" });
    });
  }
}
