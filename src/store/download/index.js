import links from "./quickLinks";
import footerContent from "./footer.js";

import { heroImg, starIcon, licenceIcon } from "../../assets/download";

export const quickLinks = {
  id: "quickLinks",
  title: "Creative Pulse",
  links: links,
};
export const hero = {
  id: "hero",
  title: "Vue Notus",
  tagline: "The free Tailwind CSS UI kit and admin.",
  icon1: starIcon,
  rating: "4.90/5",
  reviews: "17",
  licence: "MIT License",
  icon2: licenceIcon,
  image: heroImg,

  button1Text: "Free Download",
  button1BgColor: "ffffff",
  button1Color: "666666",

  button2Text: "Live Preview",
  button2BgColor: null,
  button2Color: null,
  button2BorderColor: "ffffff",

  button3Text: "Docs",
  button3BgColor: "ffffff",
  button3Color: "666666",
};

export const productDescription = {
  id: "productDescription",
  topline: "Free tailwind css and vuejs ui kit and admin",
  title: "Product description",
};

export const footer = footerContent;
