import { createRouter, createWebHistory } from 'vue-router'
import {
  Home,
  Docs,
  DemoPages,
  Download,
  LivePreview,
  Support,
  NotFound
} from '../views'
import {
  // getting started
  Overview,
  BuildTools,
  License,
  QuickStart,
  WhatIsTailwindCSS,
  WhatIsVue,

  //foundation
  Colors,
  Grid,
  Icons,
  Typography,
  CustomClasses,

  //components
  Alerts,
  Badge,
  Buttons,
  Dropdowns,
  Images,
  Inputs,
  Menus,
  Modals,
  Navbars,
  Pagination,
  Popovers,
  Progressbars,
  Tabs,
  Tooltips,

  // plugins
  ChartJS,
  GoogleMaps,
  PopperJS
} from '../sections/docs'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/demo-pages',
    name: 'demo-pages',
    component: DemoPages
  },
  {
    path: '/download',
    name: 'download',
    component: Download
  },
  {
    path: '/live-preview',
    name: 'live-preview',
    component: LivePreview
  },
  {
    path: '/support',
    name: 'support',
    component: Support
  },
  {
    path: '/docs',
    name: 'docs',
    redirect: '/docs/getting-started/overview',
    component: Docs,
    children: [
      {
        path: 'getting-started',
        redirect: 'getting-started/overview',
        children: [
          {
            path: 'overview',
            name: 'overview',
            component: Overview
          },
          {
            path: 'build-tools',
            name: 'build-tools',
            component: BuildTools
          },
          {
            path: 'license',
            name: 'license',
            component: License
          },
          {
            path: 'quick-start',
            name: 'quick-start',
            component: QuickStart
          },
          {
            path: 'what-is-tailwind-css',
            name: 'what-is-tailwind-css',
            component: WhatIsTailwindCSS
          },
          {
            path: 'what-is-vue',
            name: 'what-is-vue',
            component: WhatIsVue
          }
        ]
      },
      {
        path: 'foundation',
        redirect: 'foundation/colors',
        children: [
          {
            path: 'colors',
            name: 'colors',
            component: Colors
          },
          {
            path: 'grid',
            name: 'grid',
            component: Grid
          },
          {
            path: 'icons',
            name: 'icons',
            component: Icons
          },
          {
            path: 'typography',
            name: 'typography',
            component: Typography
          },
          {
            path: 'custom-classes',
            name: 'custom-classes',
            component: CustomClasses
          }
        ]
      },
      {
        path: 'components',
        redirect: 'components/alerts',
        children: [
          {
            path: 'alerts',
            name: 'alerts',
            component: Alerts
          },
          {
            path: 'badge',
            name: 'badge',
            component: Badge
          },
          {
            path: 'buttons',
            name: 'buttons',
            component: Buttons
          },
          {
            path: 'dropdowns',
            name: 'dropdowns',
            component: Dropdowns
          },
          {
            path: 'images',
            name: 'images',
            component: Images
          },
          {
            path: 'inputs',
            name: 'inputs',
            component: Inputs
          },
          {
            path: 'menus',
            name: 'menus',
            component: Menus
          },
          {
            path: 'modals',
            name: 'modals',
            component: Modals
          },
          {
            path: 'navbars',
            name: 'navbars',
            component: Navbars
          },
          {
            path: 'pagination',
            name: 'pagination',
            component: Pagination
          },
          {
            path: 'popovers',
            name: 'popovers',
            component: Popovers
          },
          {
            path: 'progressbars',
            name: 'progressbars',
            component: Progressbars
          },
          {
            path: 'tabs',
            name: 'tabs',
            component: Tabs
          },
          {
            path: 'tooltips',
            name: 'tooltips',
            component: Tooltips
          }
        ]
      },
      {
        path: 'plugins',
        redirect: 'plugins/chart-js',
        children: [
          {
            path: 'chart-js',
            name: 'chart-js',
            component: ChartJS
          },
          {
            path: 'google-maps',
            name: 'google-maps',
            component: GoogleMaps
          },
          {
            path: 'popper-js',
            name: 'popper-js',
            component: PopperJS
          }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
