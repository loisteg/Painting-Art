import modals from "./modules/modal";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
});
