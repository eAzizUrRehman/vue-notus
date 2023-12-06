import technologies from './technologies.js'
import designSystems from './designSystems.js'
import bundles from './bundles.js'
import bootstrap from './bootstrap.js'
import resources from './resources.js'

import {
  outerSearchIcon,
  outerTechnologiesIcon,
  outerDesignSystemsIcon,
  outerBundlesIcon,
  outerBootstrapIcon,
  outerResourcesIcon,
  outerBlogIcon,
  outerLoginOrRegisterIcon,
  dropdownIcon
} from '../../../assets/download'

export default [
  {
    id: 1,
    label: 'Search',
    iconUrl: outerSearchIcon
  },
  {
    id: 2,
    label: 'Technologies',
    iconUrl: outerTechnologiesIcon,
    dropdowns: technologies,
    dropdownIcon: dropdownIcon
  },
  {
    id: 3,
    label: 'Design Systems',
    iconUrl: outerDesignSystemsIcon,
    dropdowns: designSystems,
    dropdownIcon: dropdownIcon
  },
  {
    id: 4,
    label: 'Bundles',
    iconUrl: outerBundlesIcon,
    dropdowns: bundles,
    dropdownIcon: dropdownIcon
  },
  {
    id: 5,
    label: 'Bootstrap',
    iconUrl: outerBootstrapIcon,
    dropdowns: bootstrap,
    dropdownIcon: dropdownIcon
  },
  {
    id: 6,
    label: 'Resources',
    iconUrl: outerResourcesIcon,
    dropdowns: resources,
    dropdownIcon: dropdownIcon
  },
  {
    id: 7,
    label: 'Blog',
    iconUrl: outerBlogIcon,
    url: '/'
  },
  {
    id: 8,
    label: 'Login/Register',
    iconUrl: outerLoginOrRegisterIcon,
    url: '/'
  }
]
