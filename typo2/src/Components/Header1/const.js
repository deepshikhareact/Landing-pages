// Using an array
export const menuItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About Us",
    url: "/about",
    // links: [
    //   {
    //     label: "Company",
    //     href: "#",
    //   },
    //   {
    //     label: "People",
    //     href: "#",
    //   },
    //   {
    //     label: "Work With Us",
    //     href: "#",
    //   },
    // ],
  },
  {
    title: "Our Services",
    url: "/services",
    links: [
      {
        label: "Details",
        href: "/services/details",
      },
    ],
  },
  {
    title: "Our Work",
    url: "/work",
    // links: [
    //   {
    //     label: "Design",
    //     href: "#",
    //   },
    //   {
    //     label: "Digital & Tech",
    //     href: "#",
    //   },
    //   {
    //     label: "Production",
    //     href: "#",
    //   },
    //   {
    //     label: "Case Studies",
    //     href: "#",
    //   },
    // ],
  },
  {
    title: "Resource",
    url: "/resource",
    links: [],
  },
  {
    title: "Our Team",
    url: "/behindUs",
    links: [],
  },
  {
    title: "Contact Us",
    url: "/contact",
    links: [],
  },
];

//   Using an object
export const menuItemsObj = {
  home: {
    title: "Home",
    links: [
      {
        label: "Home",
        href: "#",
      },
    ],
  },
  aboutUs: {
    title: "About Us",
    links: [
      {
        label: "Company",
        href: "#",
      },
      {
        label: "People",
        href: "#",
      },
      {
        label: "Work With Us",
        href: "#",
      },
    ],
  },
  ourServices: {
    title: "Our Services",
    links: [
      {
        label: "Consulting",
        href: "#",
      },
      {
        label: "Design",
        href: "#",
      },
      {
        label: "Digital & Tech",
        href: "#",
      },
    ],
  },
};
