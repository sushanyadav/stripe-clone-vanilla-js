import Prism from "prismjs";
import Button from "../Button";
import { PreBuiltIcon, ToolsIcon } from "../../utils/icons";

const readDocsBtnContainer = document.getElementById("read-docs-btn-container");
const libraryBtnContainer = document.getElementById("library-section");
const preBuiltBtnContainer = document.getElementById("prebuilt-section");
const iconCardContainer = document.getElementsByClassName("developers-card");

const readDocsBtn = Button({
  backgroundClass: "bg-accent",
  hoverBackgroundClass: "hover:bg-gray-50",
  text: "Read the docs",
  classNames: "text-gray-900",
});
const librarySectionBtn = Button({
  classNames: "text-accent py-2 hover:text-gray-50",
  text: "See libraries",
  noPadding: true,
});
const preBuiltSectionBtn = Button({
  classNames: "text-accent py-2 hover:text-gray-50",
  text: "Explore partners",
  noPadding: true,
});

readDocsBtnContainer.innerHTML = readDocsBtn;
libraryBtnContainer.innerHTML = librarySectionBtn;
preBuiltBtnContainer.innerHTML = preBuiltSectionBtn;

[...iconCardContainer].forEach((el) => {
  const iconContainer = document.createElement("div");

  const iconName = el.getAttribute("data-icon");

  switch (iconName) {
    case "tools":
      iconContainer.innerHTML = ToolsIcon();

      break;
    case "pre-built":
      iconContainer.innerHTML = PreBuiltIcon();

      break;
    default:
      break;
  }

  el.prepend(iconContainer);
});

//code typewrite
const clientCodeString = `const stripe = require('stripe')('sk_test_BQokikJOvBi2Hl4olfQ2');

await stripe.paymentIntents.create({
amount: 2000,
currency: 'usd'
});`;

const serverCodeString = `$node server.js && stripe listen
> Ready! Waiting for requests...
2021-05-01 17:17:52 [200] payment_intent.created
2021-05-01 17:17:52 [200] charge.succeeded
2021-05-01 17:17:52 [200] payment_intent.succeeded`;

const clientCodeArray = [];
const serverCodeArray = [];
const clientCodeEl = document.querySelector(".client-code");
const serverCodeEl = document.querySelector(".server-code");

const code = document.createElement("code");
code.classList.add("language-javascript");

const typeCursor = `<span class="animate-ping opacity-20 duration-75 ml-1.5 bg-gray-50">_</span>`;
const typeWrite = (string, codeArray, element) => {
  let currentIndex = 0;
  const stringsArray = string.split("");

  if (codeArray.length < stringsArray.length) {
    const time = setInterval(() => {
      const item = stringsArray[currentIndex];

      currentIndex = currentIndex + 1;
      codeArray.push(item);
      code.innerHTML = codeArray.join("");

      const codes = Prism.highlight(
        codeArray.join(""),
        Prism.languages.javascript,
        "javascript"
      );

      const typeIf = codeArray.length < string.split("").length;

      element.innerHTML = codes + `${typeIf ? typeCursor : ""}`;

      if (currentIndex === stringsArray.length) clearInterval(time);
    }, 30);
  }
};

//Intersection observer
const observeOptions = {
  root: null,
  rootMargin: "700px",
  threshold: 1,
};

let animate = false;

const onObserve = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && Math.floor(entry.intersectionRatio) === 1) {
      /*
      If you don't check intersectionRatio ratio === 1, 
      the observed element will trigger the callback twice, 
      because when immediately passing/leaving 100% threshold, 
      observer will trigger isIntersecting = true,
      intersectionRatio ~= 0.9 (maybe bug).
      
      Chrome somehow gets intersectionRatio slightly above 1 on 
      the first box, so floor the value
      */
      if (!animate) {
        animate = true;
        typeWrite(clientCodeString, clientCodeArray, clientCodeEl);
        typeWrite(serverCodeString, serverCodeArray, serverCodeEl);
      }
    }
  });
};

const observe = new IntersectionObserver(onObserve, observeOptions);
const codeSection = document.getElementById("code-section");

observe.observe(codeSection);
