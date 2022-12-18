import Swiper, { EffectCards } from "swiper";
import PortfolioSliderControls from "./PortfolioSliderControls";

import "swiper/css";
import "swiper/css/effect-cards";

export default class PortfolioSlider {
  static swiper;

  static init() {
    this.swiper = new Swiper("#portfolio__slider", {
      modules: [EffectCards],
      effect: "cards",
      grabCursor: true,
      cardsEffect: {},
    });

    PortfolioSliderControls.init(this.swiper);
  }
}
