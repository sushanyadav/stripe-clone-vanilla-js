import { createPopper } from "@popperjs/core";

const countrySelector = document.querySelector("#country-selector");
const languageSelector = document.querySelector("#language-selector");
const countryTooltip = document.querySelector("#country-tooltip");
const languageTooltip = document.querySelector("#language-tooltip");

let isCountryOpen = false;
let isLanguageOpen = false;

const setCountryOpenToTrue = () => {
  isCountryOpen = true;
  countryTooltip.classList.remove("hidden");
  countryTooltip.classList.add("block");
};
const setCountryOpenToFalse = () => {
  isCountryOpen = false;
  countryTooltip.classList.remove("block");
  countryTooltip.classList.add("hidden");
};

const setLanguageOpenToTrue = () => {
  isLanguageOpen = true;
  languageTooltip.classList.remove("hidden");
  languageTooltip.classList.add("block");
};
const setLanguageOpenToFalse = () => {
  isLanguageOpen = false;
  languageTooltip.classList.remove("block");
  languageTooltip.classList.add("hidden");
};

countrySelector.addEventListener("click", (e) => {
  if (!isCountryOpen) {
    setCountryOpenToTrue();
    setLanguageOpenToFalse();
  } else {
    setCountryOpenToFalse();
  }
});

languageSelector.addEventListener("click", (e) => {
  if (!isLanguageOpen) {
    setLanguageOpenToTrue();
    setCountryOpenToFalse();
  } else {
    setLanguageOpenToFalse();
  }
});

createPopper(countrySelector, countryTooltip, {
  placement: "top-start",
  modifiers: [{ name: "flip", enabled: false }],
});

createPopper(languageSelector, languageTooltip, {
  placement: "top-start",
  modifiers: [{ name: "flip", enabled: false }],
});

//* countries
const countries = [
  { pos: "-196px -10px", name: "Australia" },
  { pos: "-165px -10px", name: "Austria" },
  { pos: "-227px -10px", name: "Belgium" },
  { pos: "-351px -10px", name: "Brazil" },
  { pos: "-289px -10px", name: "Bulgaria" },
  { pos: "-382px -10px", name: "Canada" },
  { pos: "-134px -35px", name: "Cyprus" },
  { pos: "-165px -35px", name: "Czech Republic" },
  { pos: "-258px -35px", name: "Denmark" },
  { pos: "-382px -35px", name: "Estonia" },
  { pos: "-506px -35px", name: "Finland" },
  { pos: "-41px -60px", name: "France" },
  { pos: "-196px -35px", name: "Germany" },
  { pos: "-227px -60px", name: "Greece" },
  { pos: "-320px -60px", name: "Hong Kong" },
  { pos: "-444px -60px", name: "Hungary" },
  { pos: "-72px -85px", name: "India" },
  { pos: "-506px -60px", name: "Ireland" },
  { pos: "-196px -85px", name: "Italy" },
  { pos: "-320px -85px", name: "Japan" },
  { pos: "-227px -110px", name: "Latvia" },
  { pos: "-165px -110px", name: "Lithuania" },
  { pos: "-196px -110px", name: "Luxembourg" },
  { pos: "-475px -110px", name: "Malaysia" },
  { pos: "-413px -110px", name: "Malta" },
  { pos: "-444px -110px", name: "Mexico" },
  { pos: "-103px -135px", name: "Netherlands" },
  { pos: "-165px -135px", name: "New Zealand" },
  { pos: "-134px -135px", name: "Norway" },
  { pos: "-382px -135px", name: "Poland" },
  { pos: "-475px -135px", name: "Portugal" },
  { pos: "-72px -160px", name: "Romania" },
  { pos: "-227px -160px", name: "Singapore" },
  { pos: "-289px -160px", name: "Slovakia" },
  { pos: "-258px -160px", name: "Slovenia" },
  { pos: "-444px -35px", name: "Spain" },
  { pos: "-196px -160px", name: "Sweden" },
  { pos: "-475px -10px", name: "Switzerland" },
  { pos: "-227px -185px", name: "United States" },
  { pos: "-103px -60px", name: "United Kingdom" },
  { pos: "-41px -10px", name: "United Arab Emirates" },
];

const countriesList = document.querySelector("#countries");

const checkMark = document.createElement("div");
checkMark.innerHTML = `<svg width="16" height="16" class="fill-current text-gray-700 " viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 00-.87-.04.61.61 0 00-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></svg>`;

const configureImage = (pos, name) => {
  const countryImage = document.createElement("img");
  countryImage.src = `https://images.ctfassets.net/fzn2n1nzq965/2cIDq4hzAh3wJS4rJAORjE/20a1540aef32a25f1b78a3cd4e09dcb4/flagIcons.svg`;
  countryImage.setAttribute("alt", name);
  countryImage.setAttribute("loading", "lazy");
  countryImage.setAttribute(
    "style",
    `width: 21px;
    height: 15px;
    object-fit: none;
    object-position: ${pos};`
  );
  countryImage.classList.add("mt-1");

  return countryImage;
};

const render = (selectedState, name, clicked) => {
  if (clicked) {
    [...countriesList.children].forEach((c) => {
      const country = countries.find(
        (country) => country.name === c.lastChild.innerHTML
      );
      const img = configureImage(country.pos, country.name);

      if (!c.innerHTML.includes("<img")) c.prepend(img);
    });
  }

  if (selectedState) {
    if (clicked) {
      const img = clicked.querySelector("img");
      if (img) {
        clicked.removeChild(img);
      }
    }
    return checkMark;
  } else {
    const country = countries.find((country) => country.name === name);
    const img = configureImage(country.pos, country.name);
    return img;
  }
};

countries.map(({ name }) => {
  const country = document.createElement("li");
  const classes = [
    "flex",
    "gap-2",
    "text-gray-800",
    "hover:opacity-60",
    "font-medium",
    "cursor-pointer",
    "text-sm",
  ];

  country.classList.add(...classes);

  const countryName = document.createElement("span");

  countryName.innerHTML = name;

  let currentCountryEl =
    countryName.innerHTML === countrySelector.querySelector("span").textContent;
  //^current country
  const test = render(currentCountryEl, name);
  country.appendChild(test);
  country.appendChild(countryName);
  countriesList.appendChild(country);

  country.addEventListener("click", function () {
    //^current country change
    setCountryOpenToFalse();
    const required = render(true, name, this);
    country.prepend(required);
    countrySelector.querySelector("span").textContent = name;
  });
});

//* languages
const languages = [
  "Deutsch",
  "English (United States)",
  "English (United Kingdom)",
  "Español (América Latina)",
  "Español (España)",
  "Français (France)",
  "Français (Canada)",
  "Bahasa Indonesia",
  "Italiano",
  "日本語",
  "Português (Brasil)",
  "Nederlands",
  "ไทย",
  "简体中文",
];

const languageList = document.querySelector("#languages");

const resetBoldStyles = () => {
  languageList.querySelectorAll("li").forEach((listItem) => {
    if (listItem.classList.contains("font-semibold")) {
      listItem.classList.remove("font-semibold");
    }
  });
};

languages.map((language) => {
  const languageEl = document.createElement("li");
  const classes = ["cursor-pointer", "hover:opacity-60"];

  languageEl.classList.add(...classes);

  if (language === languageSelector.querySelector("span").textContent) {
    //^current language
    languageEl.classList.add("font-semibold");
  }
  languageEl.innerHTML = language;

  languageList.appendChild(languageEl);

  languageEl.addEventListener("click", function () {
    //^current language change
    setLanguageOpenToFalse();
    resetBoldStyles();
    this.classList.add("font-semibold");
    languageSelector.querySelector("span").textContent = language;
  });
});

document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == countryTooltip || targetElement == countrySelector) {
      // This is a click inside.
      return;
    }

    if (targetElement == languageTooltip || targetElement == languageSelector) {
      // This is a click inside.
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);
  // This is a click outside.
  setCountryOpenToFalse();
  setLanguageOpenToFalse();
});
