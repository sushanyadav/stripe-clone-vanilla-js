import Button from "../Button";

const paymentBtnContainer = document.getElementById("payment-btn-container");

const paymentBtn = Button({
  backgroundClass: "bg-primary",
  hoverBackgroundClass: "hover:bg-gray-900",
  text: "Start with payments",
  classNames: "mt-8 text-base",
});

paymentBtnContainer.innerHTML = paymentBtn;
