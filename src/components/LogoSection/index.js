import {
  InstaCartIcon,
  SalesForceIcon,
  AmazonIcon,
  SlackIcon,
  ShopifyIcon,
  GoogleIcon,
  LyftIcon,
  ZoomIcon,
} from "../../utils/icons";

const logoSection = document.getElementById("logo-section");

logoSection.innerHTML =
  InstaCartIcon() +
  SalesForceIcon() +
  AmazonIcon() +
  SlackIcon() +
  ShopifyIcon() +
  GoogleIcon() +
  LyftIcon() +
  ZoomIcon();
