export default class UpButton {
  static #button = document.querySelectorAll(".up-button")[0];

  static init() {
    this.#button.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }
}
