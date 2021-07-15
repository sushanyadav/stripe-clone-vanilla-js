import Prism from "prismjs";
import Button from "../Button";

const readDocsBtnContainer = document.getElementById("read-docs-btn-container");
const libraryBtnContainer = document.getElementById("library-section");
const preBuiltBtnContainer = document.getElementById("prebuilt-section");

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

typeWrite(clientCodeString, clientCodeArray, clientCodeEl);
typeWrite(serverCodeString, serverCodeArray, serverCodeEl);
