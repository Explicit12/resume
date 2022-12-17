import "normalize.css";
import "./assets/style.scss";

import addMainScreenCharacter from "./utils/addMainScreenCharacter";
import HeroBackground from "./utils/HeroBackground";

window.addEventListener("load", () => {
  addMainScreenCharacter();
  HeroBackground.init();
});
