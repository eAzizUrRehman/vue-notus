import {
  tailwindCSSIcon,
  bootstrapIcon,
  angularIcon,
  reactIcon,
  vuejsIcon,
  reactNativeIcon,
  svelteIcon,
  materialUIIcon,
  vuetifyIcon,
  flutterIcon,
  vueMaterialIcon,
  reactstrapIcon,
  reactBootstrapIcon,
  vueBootstrapIcon,
  laravelIcon,
  djangoIcon,
  flaskIcon,
  nextIcon,
  nuxtIcon,
  nodejsIcon,
  aspnetIcon
} from '../../../assets/download'

export default [
  {
    id: 1,
    label: 'Front-End',
    links: [
      {
        id: 1,
        label: 'column1',
        links: [
          [
            {
              id: 1,
              label: 'Tailwind CSS',
              iconUrl: tailwindCSSIcon,
              url: '/'
            },
            { id: 2, label: 'Bootstrap', iconUrl: bootstrapIcon, url: '/' },
            { id: 3, label: 'Angular', iconUrl: angularIcon, url: '/' },
            { id: 4, label: 'React', iconUrl: reactIcon, url: '/' },
            { id: 5, label: 'Vue.js', iconUrl: vuejsIcon, url: '/' },
            {
              id: 6,
              label: 'React Native',
              iconUrl: reactNativeIcon,
              url: '/'
            },
            { id: 7, label: 'Svelte', iconUrl: svelteIcon, url: '/' }
          ]
        ]
      },
      {
        id: 2,
        label: 'column2',
        links: [
          { id: 1, label: 'Material UI', iconUrl: materialUIIcon, url: '/' },
          { id: 2, label: 'Vuetify', iconUrl: vuetifyIcon, url: '/' },
          {
            id: 3,
            label: 'Flutter',
            iconUrl: flutterIcon,
            url: '/'
          },
          {
            id: 4,
            label: 'Vue Material',
            iconUrl: vueMaterialIcon,
            url: '/'
          },
          { id: 5, label: 'Reactstrap', iconUrl: reactstrapIcon, url: '/' },
          {
            id: 6,
            label: 'React Bootstrap',
            iconUrl: reactBootstrapIcon,
            url: '/'
          },
          {
            id: 7,
            label: 'Vue Bootstrap',
            iconUrl: vueBootstrapIcon,
            url: '/'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Back-End',
    links: [
      { id: 1, label: 'Laravel', iconUrl: laravelIcon, url: '/' },
      { id: 2, label: 'Django', iconUrl: djangoIcon, url: '/' },
      { id: 3, label: 'Flask', iconUrl: flaskIcon, url: '/' },
      { id: 4, label: 'Next', iconUrl: nextIcon, url: '/' },
      { id: 5, label: 'Nuxt', iconUrl: nuxtIcon, url: '/' },
      { id: 6, label: 'Node.js', iconUrl: nodejsIcon, url: '/' },
      { id: 7, label: 'Aspnet', iconUrl: aspnetIcon, url: '/' }
    ]
  }
]
