import "normalize.css";
import "./assets/style.scss";

import HeroCharacter from "./utils/HeroCharacter";
import HeroBackground from "./utils/HeroBackground";

window.addEventListener("load", () => {
  HeroBackground.init();
  HeroCharacter.init();
});
