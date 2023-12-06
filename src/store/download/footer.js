import {
  logo,
  paperPlaneIcon,
  footerGithubIcon,
  footerDribbbleIcon,
  footerFacebookIcon,
  footerTwitterIcon,
  footerInstagramIcon,
  footerYoutubeIcon,
  footerPinterestIcon
} from '../../assets/download'

export default {
  id: 'footer',
  stats: [
    {
      id: 1,
      numbers: '2,360,569',
      label: 'accounts'
    },
    {
      id: 2,
      numbers: '4,228,940',
      label: 'downloads'
    },
    {
      id: 3,
      numbers: 288,
      label: 'products'
    }
  ],
  newsletter: {
    CTA: 'Join our newsletter',
    placeholder: 'Enter Email',
    buttonIcon: '',
    buttonIcon: paperPlaneIcon,
    buttonText: 'Join',
    buttonBgColor: '00BBFF'
  },
  footerLinks: [
    {
      id: 1,
      label: 'Company',
      links: [
        {
          id: 1,
          label: 'About Us',
          url: '/'
        },
        {
          id: 2,
          label: 'Freebies',
          url: '/'
        },
        {
          id: 3,
          label: 'Premium',
          url: '/'
        },
        {
          id: 4,
          label: 'Blog',
          url: '/'
        },
        {
          id: 5,
          label: 'Affiliate Program',
          url: '/'
        },
        {
          id: 6,
          label: 'Get coupon',
          url: '/'
        }
      ]
    },
    {
      id: 2,
      label: 'Help and Support',
      links: [
        {
          id: 1,
          label: 'Knowledge Center',
          url: '/'
        },
        {
          id: 2,
          label: 'Contact Us',
          url: '/'
        },
        {
          id: 3,
          label: 'Premium Support',
          url: '/'
        },
        {
          id: 4,
          label: 'Sponsorships',
          url: '/'
        },
        {
          id: 5,
          label: 'Custom Development',
          url: '/'
        }
      ]
    },
    {
      id: 3,
      label: 'Legal',
      links: [
        {
          id: 1,
          label: 'Terms & Conditions',
          url: '/'
        },
        {
          id: 2,
          label: 'Privacy Policy',
          url: '/'
        },
        {
          id: 3,
          label: 'Licenses',
          url: '/'
        }
      ]
    },
    {
      id: 4,
      label: 'Resources',
      links: [
        {
          id: 1,
          label: 'Bootstrap Cheat Sheet',
          url: '/'
        },
        {
          id: 2,
          label: 'Chatgpt Prompts',
          url: '/'
        },
        {
          id: 3,
          label: 'AI Code Mentor',
          url: '/'
        },
        {
          id: 4,
          label: 'Third-Party Tools',
          url: '/'
        },
        {
          id: 5,
          label: 'Illustrations',
          url: '/'
        },
        {
          id: 6,
          label: 'Bits',
          url: '/'
        },
        {
          id: 7,
          label: 'Shapehost ($50 Credits)',
          url: '/'
        },
        {
          id: 8,
          label: 'Bluehost',
          url: '/'
        },
        {
          id: 9,
          label: 'Digital Ocean',
          url: '/'
        },
        {
          id: 10,
          label: 'Made with Creative Tim',
          url: '/'
        }
      ]
    }
  ],
  logo: logo,
  title: 'Creative Pulse',
  socialMedia: [
    {
      id: 1,
      label: 'Github',
      icon: footerGithubIcon
    },
    {
      id: 2,
      label: 'Dribbble',
      icon: footerDribbbleIcon
    },
    {
      id: 3,
      label: 'Facebook',
      icon: footerFacebookIcon
    },
    {
      id: 4,
      label: 'Twitter',
      icon: footerTwitterIcon
    },
    {
      id: 5,
      label: 'Instagram',
      icon: footerInstagramIcon
    },
    {
      id: 6,
      label: 'Youtube',
      icon: footerYoutubeIcon
    },
    {
      id: 7,
      label: 'Pinterest',
      icon: footerPinterestIcon
    }
  ],
  copyright:
    '© 2023 Creative Tim, all rights reserved. Made with ❤️ for a better web.'
}
