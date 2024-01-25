import { SiFrontendmentor, SiFramework } from "react-icons/si";
import { FaAccusoft, FaTools } from "react-icons/fa";
import YouTube from "../assets/YoutubeClone.png";
import Leon from "../assets/Leon.png";
import Dashboard from "../assets/Dashboard.png";
import WebsitePortfolio from "../assets/WebsitePortfolio.png";
import WebsitePortfolio2 from "../assets/WebsitePortfolio2.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: <SiFrontendmentor />,
    skills: [
      { skillsTitle: "HTML5", progress: "90%" },
      { skillsTitle: "CSS3", progress: "85%" },
      { skillsTitle: "JavaScript", progress: "80%" },
    ],
  },
  {
    title: "FrameWork And Library",
    icon: <SiFramework />,
    skills: [
      { skillsTitle: "React.Js", progress: "85%" },
      { skillsTitle: "Next.Js", progress: "80%" },
      { skillsTitle: "TailwindCss", progress: "90%" },
      { skillsTitle: "Framer Motion", progress: "95%" },
      { skillsTitle: "SEO", progress: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { skillsTitle: "Git & GitHub", progress: "80%" },
      { skillsTitle: "VScode", progress: "80%" },
      { skillsTitle: "Responsive Design", progress: "95%" },
      { skillsTitle: "NPM", progress: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaAccusoft />,
    skills: [
      { skillsTitle: "Problem Solving", progress: "80%" },
      { skillsTitle: "Colloboration", progress: "85%" },
      { skillsTitle: "Attention to Detail", progress: "75%" },
    ],
  },
];

export const WORKEXPERIENCE = [
  {
    title: "Senior Frontend Developer at Tech Innovators",
    date: "January 2020 - 2022",
    paragaraph: [
      "Throughout my career, I have gained valuable experience in frontend development, specializing in building intuitive and user-friendly web interfaces. Over the years, I have successfully collaborated with cross-functional teams to deliver high-quality projects that meet client requirements and industry standards.",
      ". My expertise lies in leveraging modern frontend technologies such as HTML, CSS, and JavaScript frameworks like React and Vue.js to create responsive and visually appealing user interfaces.",
      " I have a strong understanding of UI/UX principles and strive to create seamless user experiences through clean and maintainable code.",
      " I am proficient in implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility. Through my passion for frontend development and continuous learning",
    ],
  },
  {
    title: "Junior Web Developer at Digital Solution",
    date: "June 2024 - 2020",
    paragaraph: [
      "Developed and maintained client websites. ensuring high-quality standards and timely project delivery",
      "Implemented SEO best practices. leading to a 25% increase in organic earch traffic for key clients",
      "Worked closely with the design team to create pixel-perfect, cross-browser-compatible web page.",
      "Conducted code reviwes and mentored junior developers in adopting best coding practived.",
    ],
  },
  {
    title: "Frontend Intern at web Studio",
    date: "January 2024 - 2024",
    paragaraph: [
      " I stay up-to-date with the latest trends and best practices in the field",
      "I am excited to contribute my skills and experience to create engaging and impactful web experiences for users.",
      "Performance optimization is also a key focus of my work. I employ techniques such as code minification, lazy loading, and caching to enhance the performance of web applications",
      "Overall, my work experience in frontend development has equipped me with a solid foundation in creating visually stunning, intuitive, and high-performing web interfaces. I am excited to continue leveraging my skills and expertise to contribute to impactful and engaging web experiences for users.",
    ],
  },
];
export const PROJECTS = [
  [
    {
      title: "YouTube Clone",
      imgSrc: YouTube,
      URL: "https://react-typescript-tailwind-two.vercel.app/",
    },
    {
      title: "Website",
      imgSrc: WebsitePortfolio,
      URL: "https://react-tailwind-typescript-three-swart.vercel.app/",
    },
    {
      title: "Website",
      imgSrc: WebsitePortfolio2,
      URL: "https://react-tailwind-typescript-four.vercel.app/",
    },
    {
      title: "Dashboard",
      imgSrc: Dashboard,
      URL: "https://abotreka00.github.io/Dashboard/Dashboard",
    },
    {
      title: "Leon",
      imgSrc: Leon,
      URL: "https://abotreka00.github.io/Leon/",
    },
  ],
  [
    {
      title: "YouTube Clone",
      imgSrc: YouTube,
      URL: "https://react-typescript-tailwind-two.vercel.app/",
    },
    {
      title: "Website",
      imgSrc: WebsitePortfolio,
      URL: "https://react-tailwind-typescript-three-swart.vercel.app/",
    },
    {
      title: "Website",
      imgSrc: WebsitePortfolio2,
      URL: "https://react-tailwind-typescript-four.vercel.app/",
    },
  ],
  [
    {
      title: "Dashboard",
      imgSrc: Dashboard,
      URL: "https://abotreka00.github.io/Dashboard/Dashboard",
    },
    {
      title: "Leon",
      imgSrc: Leon,
      URL: "https://abotreka00.github.io/Leon/",
    },
  ],
];
