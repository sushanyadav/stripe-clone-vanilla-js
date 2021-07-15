import Button from "../Button";

const ctaBtnsContainer = document.getElementById("cta-btns-container");
const registerBtnContainer = document.getElementById("register-btn-container");

const registerBtn = Button({
  backgroundClass: "bg-gray-600",
  classNames: "relative z-20 bg-opacity-20 px-4 py-1 text-sm mb-8",
  noPadding: true,
  roundedOnlyBigScreen: true,
  renderTextAsChildren: true,
  children: `<span>Register now • <span class="hover:text-gray-200">Sessions, our virtual conference, starts on 16th June</span></span>`,
});

const startNowBtn = Button({
  backgroundClass: "bg-gray-800",
  hoverBackgroundClass: "hover:bg-gray-600",
  text: "Start now",
});

const contactSalesBtn = Button({
  text: "Contact sales",
  classNames: "text-gray-800",
});

ctaBtnsContainer.innerHTML = `${startNowBtn}${contactSalesBtn}`;
registerBtnContainer.innerHTML = registerBtn;
