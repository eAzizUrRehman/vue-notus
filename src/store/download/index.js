import links from "./quickLinks";
import footerContent from "./footer.js";

import {
  logo,
  heroImg,
  starIcon,
  licenceIcon,

  // help
  helpGithubIcon,
  helpDocsIcon,
  helpKnowledgeCenterIcon,
  helpCustomDevelopmentIcon,
  helpDiscordIcon,
  bgCommentIcon,
  sharingIsCaringFacebookIcon,
  sharingIsCaringTwitterIcon,
  sharingIsCaringEmailIcon,
} from "../../assets/download";

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

export const help = {
  id: "help",
  topline: "We are here to help you!",
  details: "1 Web Developer commented on this product",
  buttons: [
    {
      id: 1,
      text: "Github",
      icon: helpGithubIcon,
      link: "/",
    },
    {
      id: 2,
      text: "Docs",
      icon: helpDocsIcon,
      link: "/",
    },
    {
      id: 3,
      text: "Knowledge Center",
      icon: helpKnowledgeCenterIcon,
      link: "/",
    },
    {
      id: 4,
      text: "Custom Development",
      icon: helpCustomDevelopmentIcon,
      link: "/",
    },
    {
      id: 5,
      text: "Discord Server",
      icon: helpDiscordIcon,
      link: "/",
    },
  ],
  logo: logo,
  testimonial: {
    username: "hoanganh25991",
    action: "downloaded",
    time: "1 year ago",
    comment: "Thank you, it's real good Vue component with TailwindCSS",
  },

  login: {
    instruction: "You have to be logged in to post a comment.",
    buttonText: "Login here.",
    buttonLink: "/",
  },
};

export const sharingIsCaring = {
  id: "sharingIsCaring",
  text: "Sharing is caring!",
  buttons: [
    {
      id: 1,
      label: "Facebook",
      icon: sharingIsCaringFacebookIcon,
      color: null,
      bgColor: "3A558E",
      link: "/",
    },
    {
      id: 2,
      label: "Twitter",
      icon: sharingIsCaringTwitterIcon,
      color: null,
      bgColor: "519FDB",
      link: "/",
    },
    {
      id: 3,
      label: "Email",
      icon: sharingIsCaringEmailIcon,
      color: "666666",
      bgColor: "ffffff",
      link: "/",
    },
  ],
};

export const footer = footerContent;
