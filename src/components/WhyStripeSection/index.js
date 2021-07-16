import {
  CloseToMetalIcon,
  FastImprovingIcon,
  BattleTested,
  IntelligentOptimization,
} from "../../utils/icons";

const whyStripeContents = document.getElementsByClassName(
  "why-stripe-contents"
);

[...whyStripeContents].forEach((el) => {
  const iconContainer = document.createElement("div");

  const iconName = el.getAttribute("data-icon");

  switch (iconName) {
    case "close-to-metal":
      iconContainer.innerHTML = CloseToMetalIcon();

      break;
    case "fast-improving":
      iconContainer.innerHTML = FastImprovingIcon();

      break;
    case "battle-tested":
      iconContainer.innerHTML = BattleTested();

      break;
    case "intelligent-optimization":
      iconContainer.innerHTML = IntelligentOptimization();

      break;

    default:
      break;
  }

  el.prepend(iconContainer);
});
