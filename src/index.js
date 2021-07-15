import "./assets/scss/main.scss";

// removing style after loading css
document.body.style.visibility = "";

import {
  ProductsDropdown,
  DevelopersDropdown,
  UseCasesDropdown,
  CompanyDropdown,
} from "./components/Navbar/Dropdown";
import MobileNavBar from "./components/Navbar/MobileNavBar";

import Button from "./components/Button";
import DashedLines from "./components/DashedLines";

import "./components/HeroSection/HomeHeroSection";
import "./components/PaymentSection";
import "./components/DeveloperSection";
import "./components/GetStartedSection";
import "./components/Footer";

const navItems = document.getElementById("nav-items");

//* DESKTOP NAVBAR
const createNavItem = ({ name }) => {
  const requiredHTML = `
<li class="p-5 font-semibold relative text-white">
<div style="width: 0;
            height: 0;
            border-left: 0.6rem solid transparent;
            border-right: 0.6em solid transparent;
            border-bottom: 0.6rem solid #fff;
            position: absolute;
            margin: auto;
            bottom: 0.1rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5" class="hidden"></div>
<span class="cursor-default">${name}</span>
</li>`;

  const divEl = document.createElement("div");

  divEl.innerHTML = requiredHTML;

  return divEl;
};

const navItemsList = [
  {
    name: "Company",
  },
  {
    name: "Developers",
  },
  {
    name: "Use cases",
  },
  {
    name: "Products",
  },
];

//*Sign In Button
const SignInButton = document.createElement("div");
const buttonClasses = ["flex-none", "hidden", "md:block", "lg:pr-4"];

SignInButton.classList.add(...buttonClasses);

SignInButton.innerHTML = Button({
  backgroundClass: "bg-gray-200",
  text: "Sign in",
  classNames:
    "relative z-20 bg-opacity-10 hover:bg-opacity-30 hover:text-gray-50 shadow-sm",
});

navItems.parentElement.appendChild(SignInButton);

navItemsList.map(({ name }) => {
  const item = createNavItem({ name });
  navItems.prepend(item);
});

[...navItems.children].forEach((item) => {
  if (item.innerText === "Pricing") return;

  const triangleEl = item.firstElementChild.firstElementChild;

  const divEl = document.createElement("div");

  let wrapperAdditionalClassName = ["hidden"];
  let DropDownComponent = () => {};

  switch (item.innerText) {
    case "Products":
      wrapperAdditionalClassName = ["w-11/12", "lg:w-8/12"];
      DropDownComponent = ProductsDropdown;
      break;
    case "Use cases":
      wrapperAdditionalClassName = ["md:w-6/12", "lg:w-4/12"];
      DropDownComponent = UseCasesDropdown;
      break;
    case "Developers":
      wrapperAdditionalClassName = ["w-8/12", "lg:w-6/12"];
      DropDownComponent = DevelopersDropdown;
      break;
    case "Company":
      wrapperAdditionalClassName = ["md:w-8/12", "lg:w-5/12"];
      DropDownComponent = CompanyDropdown;
      break;

    default:
      break;
  }

  const classes = [
    "absolute",
    "top-16",
    "z-50",
    "mx-auto",
    "hidden",
    ...wrapperAdditionalClassName,
  ];

  divEl.classList.add(...classes);
  divEl.setAttribute("style", "transform: translateX(-50%);left: 50%;");
  divEl.innerHTML = DropDownComponent();
  item.appendChild(divEl);

  item.addEventListener("mouseover", function () {
    triangleEl.classList.remove("hidden");
    triangleEl.classList.add("block");
    this.firstElementChild.classList.remove("text-white");
    this.firstElementChild.classList.add("text-gray-200");
    divEl.classList.remove("hidden");
    divEl.classList.add("block");
  });

  item.addEventListener("mouseleave", function () {
    divEl.classList.remove("block");
    divEl.classList.add("hidden");
    triangleEl.classList.remove("block");
    triangleEl.classList.add("hidden");
    this.firstElementChild.classList.remove("text-gray-200");
    this.firstElementChild.classList.add("text-white");
  });
});

//* MOBILE NAVBAR
const menu = document.getElementById("menu");
const createEl = document.createElement("div");

menu.nextElementSibling.appendChild(createEl);

const classes = ["bg-white", "rounded-lg", "shadow-lg", "hidden"];

createEl.classList.add(...classes);
createEl.innerHTML = MobileNavBar();

document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == createEl || targetElement == menu) {
      // This is a click inside.
      return;
    }

    targetElement = targetElement.parentNode;
  } while (targetElement);
  // This is a click outside.
  createEl.classList.add("hidden");
});

const closeMenuBtn = document.getElementById("close-menu");

closeMenuBtn.addEventListener("click", function () {
  createEl.classList.remove("block");
  createEl.classList.add("hidden");
});

menu.addEventListener("click", function () {
  createEl.classList.remove("hidden");
  createEl.classList.add("block");
});

//=>Put this on end to apply for all
const SvgElement = document.getElementsByClassName("svg-icon");

[...SvgElement].forEach((element) => {
  element.classList.add("hidden");

  const listItem =
    element.parentElement.parentElement.parentElement.parentElement;

  listItem.addEventListener("mouseover", function (e) {
    element.classList.add("block");
    element.classList.remove("hidden");
  });

  listItem.addEventListener("mouseleave", function (e) {
    element.classList.add("hidden");
    element.classList.remove("block");
  });
});

const buttonElement = document.getElementsByClassName("arrow-button");

[...buttonElement].forEach((element) => {
  const arrow = element.querySelectorAll(".arrow")[0];
  const pointedArrow = element.querySelectorAll(".arrow")[1];
  element.addEventListener("mouseover", function (e) {
    arrow.classList.remove("block");
    arrow.classList.add("hidden");
    pointedArrow.classList.remove("hidden");
    pointedArrow.classList.add("block");
  });

  element.addEventListener("mouseleave", function (e) {
    arrow.classList.remove("hidden");
    arrow.classList.add("block");
    pointedArrow.classList.remove("block");
    pointedArrow.classList.add("hidden");
  });
});

// lines
const lineContainer = document.querySelectorAll(".lines");

lineContainer.forEach((element) => {
  element.innerHTML = DashedLines({});
});
