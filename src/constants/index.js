import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  exxon,
  starbucks,
  tesla,
 onsyte,
  carrent,
  jobit,
  tripguide,
  threejs,
  zeitview,
  mphasis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Brand Owner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ES Tools Web Developer",
    company_name: "ExxonMobil",
    icon: mphasis,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Zeitview",
    icon: zeitview,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed architectural design of application database from Wind team using Java MVC structure. Incorporated usage of Spring Boot Rest methods for serialized resources in Java.",
      "Integrated python bindings with GDAL to manipulate geospatial vectors and OGRs.",
      "Built and implemented cost analysis model with Ruby on Rails for backend",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrated backend API for geospatial data into application for evaluation on 160 financial reports",
    ],
  },
  {
    title: " ES Tools Web Developer",
    company_name: "ExxonMobil",
    icon: exxon,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Created multi-level logic in JavaScript to perform calculations of equipment degradation in low-code vendor platform Created multiple database SQL objects such event and object level views to assess forms for equipment and task modules",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Resolved over 80 production issues related to system upgrades through modification of backend Spring Boot code.",
    ],
  },
  {
    title: "Director of Software Development",
    company_name: "Onsyte Performance",
    icon: onsyte,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed, the main web portal, now managed and maintained by a dedicated team of software engineers.",
      "Led the adoption of a cloud-based infrastructure, resulting in a 30% reduction in operational costs and a 40% improvement in scalability and system performance.",
      "Conducted research and evaluations of new software engineering technologies, driving the implementation of innovative solutions that enhanced system capabilities and operational efficiency.",
      "Managed the software engineering budget, including resource allocation, cost control, and financial planning, ensuring projects were delivered on time and within budget.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Kathleen Yeh",
    designation: "Software Engineer",
    company: "DroneDeploy",
    image: "https://media.licdn.com/dms/image/D4D03AQGvr8ZX3q09cA/profile-displayphoto-shrink_200_200/0/1722896560877?e=1728518400&v=beta&t=3f-bD_bt67BJSTwVXC3OIHtUWh8Cv2wcGRiUQZhWyUQ",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sagar Shetty",
    designation: "Marketing Manager",
    company: "CampusKnot",
    image: "https://media.licdn.com/dms/image/C4E03AQGkJPwQBdMq0w/profile-displayphoto-shrink_200_200/0/1545950707178?e=1728518400&v=beta&t=sPmiK8emaU6HAINJH_OuiawpZE5cCSp-uv4yAKaCUGw",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Roy Jafari Mandari",
    designation: "Technical Product Manager",
    company: "Ingram Micro",
    image: "https://media.licdn.com/dms/image/C4E03AQGE4t6iQjWWJA/profile-displayphoto-shrink_200_200/0/1657740410261?e=1728518400&v=beta&t=V6ICd-8GaFXNOWAsZtkRj6jkUj4P-tg9qJg5PNLfRyM",
  },
];

const projects = [
  {
    name: "Crypto-Wiki",
    description:
      "This is a fullstack cryptocurrency tracking application that ties statistics and news coverage on the latest cryptos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Melodie",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gypsies Reefs",
    description:
      "A ecommerce application for corals and underwater supplies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.gypsiesreef.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
