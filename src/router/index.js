import { createRouter, createWebHistory } from "vue-router";
import {
  Home,
  Docs,
  DemoPages,
  Download,
  LivePreview,
  Support,
} from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/docs",
    name: "docs",
    component: Docs,
  },
  {
    path: "/demo-pages",
    name: "demo-pages",
    component: DemoPages,
  },
  {
    path: "/download",
    name: "download",
    component: Download,
  },

  {
    path: "/live-preview",
    name: "live-preview",
    component: LivePreview,
  },
  {
    path: "/support",
    name: "support",
    component: Support,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
