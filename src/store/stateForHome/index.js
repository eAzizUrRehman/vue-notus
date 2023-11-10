import {
  sitemapIcon,
  newspaperIcon,
  compassIcon,
  fileIconSolid,
  fingerprintIcon,
  paperPlaneIcon,
  html5Icon,
  codeBranchIcon,
  footerTwitterIcon,
  footerFacebookIcon,
  footerDribbbleIcon,
  footerGithubIcon,

  // Pages
  profilePage,
  landingPage,
  loginPage,

  // javascript-components
  angular,
  javaScript,
  nextJS,
  reactJS,
  svelte,
  vueJS,
  rightArrowsIcon,
   githubButtonIcon
} from "../../assets/home";

export const hero = {
  id: "hero",
  title: "Vue Notus - A beautiful extension for Tailwind CSS.",
  description1:
    "Vue Notus is Free and Open Source. It does not change any of the CSS from ",
  spanText: "Tailwind CSS. ",
  description2:
    "It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.",
  buttonText1: "Get Started",
  buttonText2: "Github Star",
};
export const contentBanner = {
  id: "contentBanner",
  title: "Great for your awesome project",
  description:
    "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas,you can easily customise and built your pages.",
};
export const contentCards = [
  {
    id: 1,
    iconUrl: sitemapIcon,
    title: "CSS Components",
    description:
      "Vue Notus comes with a huge number of Fully Coded CSS components.",
  },
  {
    id: 2,
    iconUrl: newspaperIcon,
    title: "Pages",
    description:
      "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.",
  },
  {
    id: 3,
    iconUrl: compassIcon,
    title: "JavaScript Components",
    description:
      "We also feature many dynamic components for React, NextJS, Vue and Angular.",
  },
  {
    id: 4,
    iconUrl: fileIconSolid,
    title: "Documentation",
    description:
      "Built by developers for developers. You will love how easy is to to work with Vue Notus.",
  },
];
export const cssComponents = {
  id: "cssComponents",
  iconUrl: sitemapIcon,
  title: "CSS Components",
  description:
    "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colors.",
  buttonText: "View All",
  buttonIcon: rightArrowsIcon,
  tags: [
    "buttons",
    "inputs",
    "labels",
    "menus",
    "navbars",
    "pagination",
    "progress bars",
    "typography",
  ],
};
export const javascriptComponents = {
  id: "javascriptComponents",
  iconUrl: compassIcon,
  title: "Javascript Components",
  description:
    "In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.",
  description2:
    "We created a set of Components that are dynamic and come to help you.",
  buttonText: "View all",
  buttonIcon: rightArrowsIcon,
  tags: [
    "alerts",
    "dropdowns",
    "menus",
    "modals",
    "navbars",
    "popovers",
    "tabs",
    "tooltips",
  ],
  columns: [
    {
      id: 1,
      cards: [
        {
          id: 1,
          title: "Svelte",
          iconUrl: svelte,
          bgColor: "DC2626",
        },
        {
          id: 2,
          title: "ReactJS",
          iconUrl: reactJS,
          bgColor: "0EA5E9",
        },
        {
          id: 3,
          title: "NextJS",
          iconUrl: nextJS,
          bgColor: "334155",
        },
      ],
    },
    {
      id: 2,
      cards: [
        {
          id: 4,
          title: "JavaScript",
          iconUrl: javaScript,
          bgColor: "EAB308",
        },
        {
          id: 5,
          title: "Angular",
          iconUrl: angular,
          bgColor: "B91C1C",
        },
        {
          id: 6,
          title: "Vue.js",
          iconUrl: vueJS,
          bgColor: "10B981",
        },
      ],
    },
  ],
};

export const complexDocumentation = {
  id: "complexDocumentation",
  iconUrl: fileIconSolid,
  title: "Complex Documentation",
  description:
    "This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.",
  taglines: [
    {
      id: 1,
      iconUrl: fingerprintIcon,
      tagline: "Built by Developers for Developers",
    },
    {
      id: 2,
      iconUrl: paperPlaneIcon,
      tagline: "Carefully crafted code for Components",
    },
    {
      id: 3,
      iconUrl: html5Icon,
      tagline: "Dynamic Javascript Components",
    },
  ],
};
export const beautifulExamplePages = {
  id: "beautifulExamplePages",
  title: "Beautiful Example Pages",
  description:
    "Vue Notus is a completely new product built using our past experience in web templates. Take the examples we made for you and start playing with them.",
  pages: [
    {
      id: 1,
      title: "Login Page",
      imgUrl: loginPage,
    },
    {
      id: 2,
      title: "Profile Page",
      imgUrl: profilePage,
    },
    {
      id: 3,
      title: "Landing Page",
      imgUrl: landingPage,
    },
  ],
};
export const openSource = {
  id: "openSource",
  iconUrl: codeBranchIcon,
  title: "Open Source",
  description:
    "Since Tailwind CSS is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the code!",
  description2:
    "Get it free on Github and please help us spread the news with a Star!",
  solidButtonText: "Github Star",
};
export const starterKit = {
  id: "starterKit",
  title: "Do you love this Starter Kit?",
  description:
    "Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!",
  button1Text: "Get Started",
  button2Text: "Help with a star",
  button2Icon: githubButtonIcon,
  button1Color: "10B981",
  button2Color: "334155",
};
export const footer = {
  id: "footer",
  callToAction: "Let's keep in touch!",
  socialMedia: {
    businessTime:
      "Find us on any of these platforms, we respond 1-2 business days.",
    icons: [
      {
        id: 1,
        icon: footerTwitterIcon,
        url: "https://www.facebook.com/SignupSolution.official/",
      },
      {
        id: 2,
        icon: footerFacebookIcon,
        url: "https://www.facebook.com/SignupSolution.official/",
      },
      {
        id: 3,
        icon: footerDribbbleIcon,
        url: "https://www.facebook.com/SignupSolution.official/",
      },
      {
        id: 4,
        icon: footerGithubIcon,
        url: "https://www.facebook.com/SignupSolution.official/",
      },
    ],
  },
  footerLinks: [
    {
      id: 1,
      title: "Useful Links",
      links: [
        {
          id: 1,
          text: "About Us",
          url: "/",
        },
        {
          id: 2,
          text: "Blog",
          url: "/",
        },
        {
          id: 3,
          text: "Github",
          url: "/",
        },
        {
          id: 4,
          text: "Free Products",
          url: "/",
        },
      ],
    },
    {
      id: 2,
      title: "Other Resources",
      links: [
        {
          id: 1,
          text: "MIT License",
          url: "/",
        },
        {
          id: 2,
          text: "Terms & Conditions",
          url: "/",
        },
        {
          id: 3,
          text: "Privacy Policy",
          url: "/",
        },
        {
          id: 4,
          text: "Contact Us",
          url: "/",
        },
      ],
    },
  ],
  copyright: "Copyright © 2023 Vue Notus by Creative Tim.",
};
