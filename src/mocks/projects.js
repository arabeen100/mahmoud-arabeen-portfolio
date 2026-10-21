import idifErp from '../assets/images/projects/idif-erp.jpg'
import megaDevWebsite from '../assets/images/projects/mega-dev-website.jpg'
import orabiAdmin from '../assets/images/projects/orabi-admin-dashboard.jpg'
import siedraShop from '../assets/images/projects/siedra-shop.jpg'
import istamiTafuz from '../assets/images/projects/istami-tafuz.jpg'
import smartChef from '../assets/images/projects/smart-chef.jpg'

// Content taken from Mahmoud Samy Arabeen's CV (Sep 2026).
// `results` (optional) renders a stats strip on the detail page — none are listed in the CV.
// `links.repo` (optional) renders a "View source" button.
export const projects = [
  {
    slug: 'idif-erp',
    title: 'IDIF ERP System',
    category: 'Company project',
    tagline:
      'Warehouse and factory management for a Saudi manufacturing factory.',
    thumbnail: idifErp,
    overview: [
      'A production-level ERP system used to manage warehouse and factory operations for a Saudi manufacturing factory. I contributed to it as a Frontend Engineer at Mega Dev.',
      'My focus was the interface layer: data-heavy tables, interfaces that adapt to each user role, and form workflows built for very large amounts of data entry.',
    ],
    meta: [
      { label: 'Role', value: 'Frontend Engineer' },
      { label: 'Type', value: 'Company project' },
      { label: 'Company', value: 'Mega Dev' },
      { label: 'Client', value: 'Saudi manufacturing factory' },
      { label: 'Year', value: '2026' },
      { label: 'Platform', value: 'Web' },
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Ant Design',
      'Zustand',
      'TanStack Query',
      'REST APIs',
      'Keycloak',
      'i18n',
    ],
    features: [
      {
        title: 'High-capacity data tables',
        description:
          'Tables engineered to stay usable with the large volumes of data an ERP handles.',
      },
      {
        title: 'Multi-role dynamic interfaces',
        description:
          'The interface adapts to the signed-in user’s role, showing each team what it needs.',
      },
      {
        title: 'Complex form workflows',
        description:
          'Multi-step forms designed for massive data input without slowing operators down.',
      },
    ],
    links: { live: 'https://idif.ebdaa-business.com/' },
  },
  {
    slug: 'mega-dev-website',
    title: 'Mega Dev Official Website',
    category: 'Company project',
    tagline: 'The company’s bilingual marketing site, built from scratch.',
    thumbnail: megaDevWebsite,
    overview: [
      'The official website of Mega Dev, built from scratch with the Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.',
      'The site ships fully in English and Arabic, with the layout switching between LTR and RTL through next-intl.',
    ],
    meta: [
      { label: 'Role', value: 'Frontend Engineer' },
      { label: 'Type', value: 'Company project' },
      { label: 'Company', value: 'Mega Dev' },
      { label: 'Year', value: '2026' },
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Live' },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'next-intl',
      'REST APIs'
    ],
    features: [
      {
        title: 'Built from scratch',
        description:
          'Designed and developed end to end on the Next.js App Router.',
      },
      {
        title: 'English / Arabic i18n',
        description:
          'Full internationalization with next-intl, including RTL/LTR layout switching.',
      },
      {
        title: 'Motion with Framer Motion',
        description:
          'Animations and transitions that give the marketing pages their polish.',
      },
    ],
    links: { live: 'https://mega-dev.io/' },
  },
  {
    slug: 'orabi-admin-dashboard',
    title: 'Orabi Admin Dashboard',
    category: 'Company project',
    tagline: 'An admin dashboard for a university transportation platform.',
    thumbnail: orabiAdmin,
    overview: [
      'An administrative dashboard built from scratch for a university transportation platform, used to run bus trips and student subscriptions.',
      'It includes real-time notifications delivered over Server-Sent Events, so staff see changes as they happen.',
    ],
    meta: [
      { label: 'Role', value: 'Frontend Engineer' },
      { label: 'Type', value: 'Company project' },
      { label: 'Company', value: 'Mega Dev' },
      { label: 'Client', value: 'University transportation platform' },
      { label: 'Year', value: '2026' },
      { label: 'Platform', value: 'Web' },
    ],
    stack: ['React.js', 'Tailwind CSS', 'ShadCN UI' , 'TypeScript', 'Keycloak' , 'SSE' , 'Tanstack Query' , 'REST APIs'],
    features: [
      {
        title: 'Bus trip management',
        description:
          'Create, schedule, and keep track of the trips running across the platform.',
      },
      {
        title: 'Student subscriptions',
        description:
          'Manage student subscriptions to the transportation service from one place.',
      },
      {
        title: 'Real-time notifications',
        description:
          'Live updates pushed to the dashboard using Server-Sent Events.',
      },
    ],
    links: { live: 'https://oraby.ebdaa-business.com/' },
  },
  {
    slug: 'siedra-shop',
    title: 'Siedra Shop',
    category: 'Personal project',
    tagline: 'A multi-language e-commerce application in Arabic and German.',
    thumbnail: siedraShop,
    overview: [
      'A responsive single-page e-commerce app available in Arabic and German, with a layout that flips seamlessly between RTL and LTR.',
      'It covers the core shopping flow: browsing and filtering products, managing a cart, and signing in.',
    ],
    meta: [
      { label: 'Role', value: 'Developer' },
      { label: 'Type', value: 'Personal project' },
      { label: 'Languages', value: 'Arabic, German' },
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Live' },
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'RTK Query',
      'REST APIs',
    ],
    features: [
      {
        title: 'Multi-language',
        description:
          'Arabic and German, with seamless RTL/LTR layout toggling.',
      },
      {
        title: 'Dynamic cart management',
        description:
          'Add, update, and remove items with the cart staying in sync.',
      },
      {
        title: 'User authentication',
        description: 'Account sign-in built into the shopping experience.',
      },
      {
        title: 'Product filtering',
        description:
          'Narrow the catalogue quickly to the products that matter.',
      },
    ],
    links: { live: 'https://siedra-shop.vercel.app/' },
  },
  {
    slug: 'istami-tafuz',
    title: 'Istami Tafuz',
    category: 'Personal project',
    tagline: 'A Quran and Islamic content streaming platform.',
    thumbnail: istamiTafuz,
    overview: [
      'An Islamic media platform where users can stream Quran recitations, Tafsir, live TV channels, and Islamic radio.',
      'Playback runs through custom audio controls designed for long listening sessions.',
    ],
    meta: [
      { label: 'Role', value: 'Developer' },
      { label: 'Type', value: 'Personal project' },
      { label: 'Content', value: 'Quran & Islamic media' },
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Live' },
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'RTK Query',
      'REST APIs',
    ],
    features: [
      {
        title: 'Quran recitations',
        description: 'Stream recitations directly in the browser.',
      },
      {
        title: 'Tafsir',
        description: 'Listen to Tafsir alongside the recitations.',
      },
      {
        title: 'Live TV channels',
        description: 'Watch Islamic live TV channels from within the platform.',
      },
      {
        title: 'Islamic radio',
        description: 'Tune in to Islamic radio stations.',
      },
      {
        title: 'Custom audio controls',
        description:
          'A purpose-built player instead of the default browser controls.',
      },
    ],
    links: { live: 'https://istami-tafuz.vercel.app/' },
  },
  {
    slug: 'smart-chef',
    title: 'Smart Chef',
    category: 'Personal project',
    tagline: 'A recipe discovery app that cooks from what’s in your fridge.',
    thumbnail: smartChef,
    overview: [
      'A recipe discovery web app built with the Next.js App Router. Users keep track of the ingredients in their fridge and get smart recipe suggestions based on them.',
      'Framer Motion animations and React Query data fetching keep the experience smooth and responsive.',
    ],
    meta: [
      { label: 'Role', value: 'Developer' },
      { label: 'Type', value: 'Personal project' },
      { label: 'Domain', value: 'Food & recipes' },
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Live' },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'TanStack Query',
      'Framer Motion',
    ],
    features: [
      {
        title: 'Fridge ingredient management',
        description:
          'Add and remove the ingredients you currently have at home.',
      },
      {
        title: 'Smart suggestions',
        description:
          'Recipe recommendations driven by the contents of your fridge.',
      },
      {
        title: 'Framer Motion animations',
        description: 'Fluid transitions throughout the interface.',
      },
      {
        title: 'React Query data fetching',
        description: 'Cached, resilient data loading for a fast feel.',
      },
    ],
    links: { live: 'https://smart-chef-orpin.vercel.app/' },
  },
]
