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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import angular from '../assets/tech/angular.png'
import python from '../assets/tech/python.jpg'
import csharp from '../assets/tech/csharp.jpg'
import rust from '../assets/tech/rust.png'
import discordbot from '../assets/discordbot.webp'
import authentication from '../assets/authentication.webp'

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Game Development Enthusiast",
    icon: mobile,
  },
  {
    title: "Mobile Application Developer",
    icon: backend,
  },
  {
    title: "DevOps Geek",
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
    name: "Python",
    icon: python,
  },
  {
    name: "C Sharp",
    icon: csharp,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "IQVIA",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Developing and maintaining web and mobile applications using React, Angular, Xamarin and .NET.",
      "Collaborating with cross border multi functional teams, learning and working with brilliant minds.",
      "Implementing responsive UI and migrated legacy codebases to newer tech stacks for better performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "IQVIA",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Actively engaged with a multitude of development stacks, nurturing adaptability and honing skills across a spectrum of technologies and frameworks, setting a solid foundation for future endeavors.",
      "Demonstrated versatility and eagerness in contributing to various development projects, gaining hands-on experience and actively participating in team efforts, thus enriching both personal and team capabilities."
    ],
  }
];

const education = [
  {
    title: "Bachelors in Computer Science and Engineering",
    company_name: "BRAC University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2017 - Apr 2021",
    points: [
      "Thesis Work: Malware Detection in Blockchain using Convolutional Neural Networks.",
      "Elective courses in Computer Science, Electrical Engineering, Mathematics, Statistics and Physics.",
    ],
  },
  {
    title: "A Levels",
    company_name: "Cambridge",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2014 - June 2016",
    points: [
      "Courses in Mathematics, Physics and Chemistry."
    ],
  }
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
    name: "Auth App",
    description:
      "Auth App is a modern back-end application designed to authenticate and authorize roles using the Express.js framework for Node.js with database connecting to MongoDB.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "passport",
        color: "pink-text-gradient",
      },
    ],
    image: authentication,
    source_code_link: "https://github.com/Sadman-Arif-Wamim/Express-Passport-Auth-App/",
  },
  {
    name: "Shadow Bot",
    description:
      "A fun discord bot project for personal use leveraging free rapid apis. It has a wide range of functionalities ranging from stating quotes and trivia to playing songs.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "discord",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: discordbot,
    source_code_link: "https://github.com/Sadman-Arif-Wamim/Discord-Shadow-Bot",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
