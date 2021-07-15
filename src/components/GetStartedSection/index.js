import Button from "../Button";

const ctaBtnContainer = document.getElementById("cta-btn-container");
const pricingDetailBtnContainer = document.getElementsByClassName(
  "pricing-detail-btn-container"
);

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
