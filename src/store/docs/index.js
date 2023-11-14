// getting started
import overview from "./gettingStarted/overview.js";
import buildTools from "./gettingStarted/buildTools.js";
import license from "./gettingStarted/license.js";
import quickStart from "./gettingStarted/quickStart.js";
import whatIsTailwindCSS from "./gettingStarted/whatIsTailwindCSS.js";
import whatIsVue from "./gettingStarted/whatIsVue.js";

// foundation
import colors from "./foundation/colors.js";
import grid from "./foundation/grid.js";
import icons from "./foundation/icons.js";
import typography from "./foundation/typography.js";
import customClasses from "./foundation/customClasses.js";

// components
import alerts from "./components/alerts.js";
import badge from "./components/badge.js";
import buttons from "./components/buttons.js";
import dropdowns from "./components/dropdowns.js";
import images from "./components/images.js";
import inputs from "./components/inputs.js";
import menus from "./components/menus.js";
import modals from "./components/modals.js";
import navbars from "./components/navbars.js";
import pagination from "./components/pagination.js";
import popovers from "./components/popovers.js";
import progressbars from "./components/progressbars.js";
import tabs from "./components/tabs.js";
import tooltips from "./components/tooltips.js";

// plugins
import chartJS from "./plugins/chartJS.js";
import googleMaps from "./plugins/googleMaps.js";
import popperJS from "./plugins/popperJS.js";

const sidebar = {
  id: "sidebar",
  topics: [
    {
      id: 1,
      label: "Getting Started",
      link: "/docs/getting-started",
      subtopics: [
        {
          id: 1,
          label: "Overview",
          content: overview,
          link: "/docs/getting-started/overview",
        },
        {
          id: 2,
          label: "Build Tools",
          content: buildTools,
          link: "/docs/getting-started/build-tools",
        },
        {
          id: 3,
          label: "License",
          content: license,
          link: "/docs/getting-started/license",
        },
        {
          id: 4,
          label: "Quick Start",
          content: quickStart,
          link: "/docs/getting-started/quick-start",
        },
        {
          id: 5,
          label: "What is Tailwind CSS",
          content: whatIsTailwindCSS,
          link: "/docs/getting-started/what-is-tailwind-css",
        },
        {
          id: 6,
          label: "What is Vue",
          content: whatIsVue,
          link: "/docs/getting-started/what-is-vue",
        },
      ],
    },
    {
      id: 2,
      label: "Foundation",
      link: "/docs/foundation",
      subtopics: [
        {
          id: 1,
          label: "Colors",
          content: colors,
          link: "/docs/foundation/colors",
        },
        {
          id: 2,
          label: "Grid",
          content: grid,
          link: "/docs/foundation/grid",
        },
        {
          id: 3,
          label: "Icons",
          content: icons,
          link: "/docs/foundation/icons",
        },
        {
          id: 4,
          label: "Typography",
          content: typography,
          link: "/docs/foundation/typography",
        },
        {
          id: 5,
          label: "Custom Classes",
          content: customClasses,
          link: "/docs/foundation/custom-classes",
        },
      ],
    },
    {
      id: 3,
      label: "Components",
      link: "/docs/components",
      subtopics: [
        {
          id: 1,
          label: "Alerts",
          content: alerts,
          link: "/docs/components/alerts",
        },
        {
          id: 2,
          label: "Badge",
          content: badge,
          link: "/docs/components/badge",
        },
        {
          id: 3,
          label: "Buttons",
          content: buttons,
          link: "/docs/components/buttons",
        },
        {
          id: 4,
          label: "Dropdowns",
          content: dropdowns,
          link: "/docs/components/dropdowns",
        },
        {
          id: 5,
          label: "Images",
          content: images,
          link: "/docs/components/images",
        },
        {
          id: 6,
          label: "Inputs",
          content: inputs,
          link: "/docs/components/inputs",
        },
        {
          id: 7,
          label: "Menus",
          content: menus,
          link: "/docs/components/menus",
        },
        {
          id: 8,
          label: "Modals",
          content: modals,
          link: "/docs/components/modals",
        },
        {
          id: 9,
          label: "Navbars",
          content: navbars,
          link: "/docs/components/navbars",
        },
        {
          id: 10,
          label: "Pagination",
          content: pagination,
          link: "/docs/components/pagination",
        },
        {
          id: 11,
          label: "Popovers",
          content: popovers,
          link: "/docs/components/popovers",
        },
        {
          id: 12,
          label: "Progressbars",
          content: progressbars,
          link: "/docs/components/progressbars",
        },
        {
          id: 13,
          label: "Tabs",
          content: tabs,
          link: "/docs/components/tabs",
        },
        {
          id: 14,
          label: "Tooltips",
          content: tooltips,
          link: "/docs/components/tooltips",
        },
      ],
    },
    {
      id: 4,
      label: "Plugins",
      link: "/docs/plugins",
      subtopics: [
        {
          id: 1,
          label: "ChartJS",
          content: chartJS,
          link: "/docs/plugins/chart-js",
        },
        {
          id: 2,
          label: "Google Maps",
          content: googleMaps,
          link: "/docs/plugins/google-maps",
        },
        {
          id: 3,
          label: "PopperJS",
          content: popperJS,
          link: "/docs/plugins/popper-js",
        },
      ],
    },
  ],
};
export default sidebar;
