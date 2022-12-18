import HeroCharacter from "./utils/HeroCharacter";
import HeroBackground from "./utils/HeroBackground";
import PortfolioSlider from "./utils/PortfolioSlider";
import UpButton from "./utils/UpButton";

import "normalize.css";
import "./assets/style.scss";

window.addEventListener("load", () => {
  HeroBackground.init();
  HeroCharacter.init();
  PortfolioSlider.init();
  UpButton.init();
});
