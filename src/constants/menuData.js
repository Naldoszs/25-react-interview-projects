const menuData = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Web Development", to: "/services/web-development" },
      {
        label: "App Design",
        to: "/services/app-design",
        children: [
          { label: "iOS Design", to: "/services/app-design/ios" },
          { label: "Android Design", to: "/services/app-design/android" },
        ],
      },
      { label: "SEO Optimization", to: "/services/seo" },
    ],
  },
  {
    label: "Portfolio",
    to: "/portfolio",
    children: [
      { label: "Web Projects", to: "/portfolio/web-projects" },
      {
        label: "App Designs",
        to: "/portfolio/app-designs",
        children: [
          { label: "UI/UX Case Studies", to: "/portfolio/app-designs/uiux" },
          { label: "Prototypes", to: "/portfolio/app-designs/prototypes" },
        ],
      },
      { label: "Graphic Design", to: "/portfolio/graphic-design" },
    ],
  },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Our Team", to: "/about/team" },
      {
        label: "Mission & Vision",
        to: "/about/mission-vision",
        children: [
          { label: "Our Values", to: "/about/mission-vision/values" },
          { label: "Our Goals", to: "/about/mission-vision/goals" },
        ],
      },
      { label: "Careers", to: "/about/careers" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [
      { label: "Support", to: "/contact/support" },
      {
        label: "Sales Inquiry",
        to: "/contact/sales",
        children: [
          { label: "B2B Sales", to: "/contact/sales/b2b" },
          { label: "B2C Sales", to: "/contact/sales/b2c" },
        ],
      },
      { label: "Locations", to: "/contact/locations" },
    ],
  },
];

export default menuData;
