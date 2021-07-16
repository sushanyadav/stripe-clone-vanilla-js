import Button from "../Button";
import { StartIntegrationIcon, KnowWhatYouPayIcon } from "../../utils/icons";

const ctaBtnContainer = document.getElementById("cta-btn-container");
const pricingDetailBtnContainer = document.getElementsByClassName(
  "pricing-detail-btn-container"
);
const GetStartedCardContainer =
  document.getElementsByClassName("get-started-card");

const startNowBtn = Button({
  backgroundClass: "bg-primary",
  hoverBackgroundClass: "hover:bg-gray-900",
  text: "Start now",
});

const contactSalesBtn = Button({
  classNames: "text-primary hover:text-gray-900",
  text: "Contact sales",
});

const pricingDetailBtn = Button({
  classNames: "text-primary hover:text-gray-900",
  text: "Pricing details",
  noPadding: true,
});

ctaBtnContainer.innerHTML = `${startNowBtn}${contactSalesBtn}`;

[...pricingDetailBtnContainer].forEach((element) => {
  element.innerHTML = pricingDetailBtn;
});

[...GetStartedCardContainer].forEach((el) => {
  const iconContainer = document.createElement("div");

  const iconName = el.getAttribute("data-icon");

  switch (iconName) {
    case "know-what-you-pay":
      iconContainer.innerHTML = KnowWhatYouPayIcon();

      break;
    case "start-integration":
      iconContainer.innerHTML = StartIntegrationIcon();

      break;
    default:
      break;
  }

  el.prepend(iconContainer);
});
