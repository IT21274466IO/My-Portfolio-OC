import {
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
  threejs,
  web_dev,
  uiux,
  backendDev,
  androidDev,
  schoolImg,
  mihaIns,
  SLIITimg,
  quImg,
  MADimg,
  HMimg,
  oopProject,
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
    title: "Full-Stack Developer",
    icon: web_dev,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Desktop App Developer",
    icon: backendDev,
  },
  {
    title: "Mobile App Developer",
    icon: androidDev,
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
    title: "IT Student",
    company_name: "Kegalu Vidyalaya",
    icon: schoolImg,
    iconBg: "#F0F900",
    date: "February 2006 - August 2019",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Collaborating with teams including students, teachers, and other developers to create simple products.",
      "Participating in code reviews and providing constructive feedback to other students.",
    ],
  },
  {
    title: "Highlighted Student ",
    company_name: "MIHA Institute",
    icon: mihaIns,
    iconBg: "#2C04CE",
    date: "August 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js, MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, lecturers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Undergraduate",
    company_name: "SLIIT",
    icon: SLIITimg,
    iconBg: "#FFFFFF",
    date: "June 2021 - Present",
    points: [
      "Starting with C and progressing to C++ with a focus on object-oriented programming",
      "Developing and maintaining web applications using HTML, CSS, JavaScript, PHP, MySQL, and other related technologies.",
      "I further expanded my capabilities by creating another web system using Java, incorporating OOP principles and design patterns",
      "I gained valuable experience in mobile app development, specifically with Kotlin, by successfully building a job-finding application.",
      "Collaborating with teams including other undergraduates, lectures, clients, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other undergraduates.",
      "I honed my skills in full-stack development with the MERN stack, building a feature rich web application. Throughout these projects, I have gained proficiency in CRUD operations, database design, integration of project components, and creating visually appealing user interfaces."
    ],
  },
  {
    title: "Interneship",
    company_name: "Looking Forward",
    icon: quImg,
    iconBg: "#000000",
    date: "July 2023 - Present",
    points: [
      "Looking for internship of full stack developing",
      "Willing to gain experience of industry level and team working",
      "Willing to gain experience of client's requirements and collect their responses",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Tour Guide",
    description:
      "Online Tour Guide is a user-friendly web-based platform designed to enhance your travel experience. With our platform, users have the convenience of searching, booking, and managing hotels and restaurants from various destinations, all in one place.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: oopProject,
    source_code_link: "https://github.com/IT21274466IO/Online-Tour-Guide-OOP-Project",
  },
  {
    name: "Job Search",
    description:
      "Android Mobile application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "RoomDB",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: MADimg,
    source_code_link: "https://github.com/AnjanaDinuwan/JOBSSearch",
  },
  {
    name: "Mobile Shop Management System",
    description:
      "We implemented this mobile shop management system for a shop called Happy Mobile. With this mobile shop management system, our customers can fulfill almost all their needs, such as purchasing new items, repairing items, renting items, and returning items",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "text-cyan-400",
      },
    ],
    image: HMimg,
    source_code_link: "https://github.com/GunawardaneKC/HappyMobile-001",
  },
];

export { services, technologies, experiences, testimonials, projects };
