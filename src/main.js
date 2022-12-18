import HeroCharacter from "./utils/HeroCharacter";
import HeroBackground from "./utils/HeroBackground";
import PortfolioSlider from "./utils/PortfolioSlider";
import UpButton from "./utils/UpButton";

import "normalize.css";
import "./assets/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  HeroBackground.init();
  HeroCharacter.init();
  PortfolioSlider.init();
  UpButton.init();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".page-loader")?.remove();
    document.documentElement.style.overflowY = "visible";
  }, 5000);
});
