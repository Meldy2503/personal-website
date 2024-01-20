import {
  MdComputer,
  MdOutlinePhonelink,
  MdDeveloperMode,
} from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { GiCutDiamond } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdDesignServices, MdWork } from "react-icons/md";
import { BsFillPersonVcardFill, BsFillPersonFill } from "react-icons/bs";
import { GrStackOverflow } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";
import { BiMessageDots } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

export const menuData = [
  {
    name: "Home",
    icon: AiFillHome,
    id: "#home",
  },
  {
    name: "About me",
    icon: BsFillPersonFill,
    id: "#about",
  },
  {
    name: "Services",
    icon: MdDesignServices,
    id: "#services",
  },
  {
    name: "Tech stacks",
    icon: GrStackOverflow,
    id: "#stacks",
  },
  {
    name: "Projects",
    icon: MdWork,
    id: "#projects",
  },
  {
    name: "Recommendations",
    icon: GoCodeReview,
    id: "#recommendations",
  },
  {
    name: "Contact me",
    icon: BsFillPersonVcardFill,
    id: "#contact",
  },
];
export const stackData = [
  {
    name: "Reactjs",
    value: 95,
  },
  {
    name: "Nextjs",
    value: 95,
  },
  {
    name: "Vue",
    value: 70,
  },
  {
    name: "Typescript",
    value: 92,
  },
  {
    name: "Javascript",
    value: 95,
  },
];

export const contactData = [
  {
    icon: BsFillPersonFill,
    placeholder: "Full name",
    type: "text",
    name: "fullName",
  },
  {
    icon: AiTwotoneMail,
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    icon: BiMessageDots,
    placeholder: "Message",
    type: "textarea",
    name: "message",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: MdComputer,
    heading: "Scalable Websites",
    text: "I build websites with top-notch technologies which can be accessed across all platforms",
  },
  {
    id: 2,
    icon: MdDeveloperMode,
    heading: "Web Development",
    text: "My layouts are built with latest frameworks to ensure improved capacity and performance  ",
  },
  {
    id: 3,
    icon: MdOutlinePhonelink,
    heading: "Responsive Layouts",
    text: "I provide highly professional and responsive web designs using up-to-date frameworks",
  },
  {
    id: 4,
    icon: HiUserGroup,
    heading: "User Friendly",
    text: "Providing exceptional and retina friendly user experience is always my priority",
  },
  {
    id: 5,
    icon: GiCutDiamond,
    heading: "Creative Designs",
    text: "I deliver excellence and ensure clients attain higher than what they percieved",
  },
  {
    id: 6,
    icon: TbSpeakerphone,
    heading: "Branding",
    text: "Each design is uniquely customized to suit the clients' requirements and needs",
  },
];

export const TechStackData = [
  { src: "/assets/ts.svg", caption: "Typescript" },
  { src: "/assets/github.svg", caption: "Git" },
  { src: "/assets/chakra.svg", caption: "Chakra" },
  { src: "/assets/css.svg", caption: "CSS" },
  { src: "/assets/html.svg", caption: "HTML" },
  { src: "/assets/js.svg", caption: "JS" },
  { src: "/assets/nextjs.svg", caption: "Nextjs" },
  { src: "/assets/react.svg", caption: "React" },
  { src: "/assets/sass.svg", caption: "SASS" },
  { src: "/assets/sc.svg", caption: "SC" },
  { src: "/assets/tailwind.svg", caption: "Tailwind" },
  { src: "/assets/vue.svg", caption: "Vue" },
];

export const projectData = [
  {
    id: "1",
    img: "/assets/octodoc.webp",
    heading: "OCTODOC",
    tools: ["React", "TypeScript", "Chakra-UI", "Nextjs", "SWR", "Redux"],

    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/chakra.svg",
      "/assets/css.svg",
      "/assets/html.svg",
      "/assets/nextjs.svg",
    ],
    brief:
      "Octodoc is a robust, agile solution built for healthcare institutions which provides an efficient platform for managing hospital information, records and operations.",
    description:
      "Octodoc is a robust, agile solution for healthcare institutions developed by Octosoft Technologies which provides an efficient platform for managing hospital information, records and operations. It features an optimized codebase for increased system performance, API integrations  for versatility and various modules like Billing, Admin, EMR, Appointment Scheduling, Laboratory, CRM, etc for flexibility. I worked with a team of developers to ensure continuous maintenance, debugging, and feature enhancements of the product. My primary task was to create a secure and user-friendly application that would provide a seamless experience for both patients and healthcare professionals.",
    features:
      "User Management, Account Creation, Authentication Features, Tenant Onboarding Process, Teleconferencing feature.",
    status: "Completed",
    overview: "https://octodoc.com/providers/",
    live: "https://app.octodoc.com/",
  },
  {
    id: "2",
    img: "/assets/chatter1.webp",
    heading: "Chatter Blog App",
    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/chakra.svg",
      "/assets/css.svg",
      "/assets/html.svg",
      "/assets/nextjs.svg",
      "/assets/firebase.svg",
    ],
    tools: ["React", "TypeScript", "Chakra-UI", "Nextjs", "Firebase"],
    brief:
      "A haven for text-based contents built with Nextjs, TypeScript, Firebase and Chakra-UI",
    description:
      "Chatter is a multi-functional platform where authors and readers can have access to their own content. The website was built with Next.js, TypeScript, Chakra-UI CSS framework, firebase backend and also utililized State Management using Context-API . It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive to create a safe space for everyone to share their thoughts and ideas.",
    features:
      "It provides features for authentication, reading published posts, viewing author profiles, writing and publishing new posts using React Markdown, updating user profiles, liking and commenting on posts, bookmarking and saving posts as drafts, analytics, categorizing posts, unit tests, searching posts and switching the display mode from light to dark.",
    status: "completed",
    gitlink: "https://github.com/Meldy2503/blog-app",
    live: "https://blog-app-two-psi.vercel.app/",
  },

  {
    id: "3",
    img: "/assets/finder2.webp",
    heading: "GitHub Finder App",
    tools: ["Vue", "JavaScript", "Tailwind-CSS"],

    stacks: [
      "/assets/vue.svg",
      "/assets/js.svg",
      "/assets/tailwind.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An innovative web application for exploring GitHub Profiles built with Vuejs and Tailwind CSS framwork.",
    description:
      "Unveiling GitHub Finder, an innovative web application crafted with the power of Vue.js and Tailwind CSS framwork, designed to provide an immersive journey into the world of GitHub profiles. This intuitive platform not only showcases my personal GitHub profile but also empowers users to explore and discover the GitHub profiles of fellow developers. With seamless integration of the GitHub API, GitHub Finder delivers a user-friendly interface, transforming raw data into meaningful insights.",
    features:
      "It provides features for displaying my personal GitHub profile, search, explore and view details of various GitHub profiles, utilization of GitHub API endpoints using Axios, page routing with vue-router, SEO optimization with React Helmet Async and switching the display mode from light to dark.",
    status: "Completed",
    gitlink: "https://github.com/Meldy2503/vue-github-profile",
    live: "https://vue-github-profile.vercel.app/",
  },
  {
    id: "4",
    img: "/assets/santa2.webp",
    heading: "surprise Santa",
    tools: ["React", "Typescript", "Radix-UI", "Nextjs", "TanStack Query"],
    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/css.svg",
      "/assets/html.svg",
      "/assets/nextjs.svg",
    ],
    brief:
      "Surprise Santa is a delightful web application designed to elevate the joy and excitement of Christmas.",
    description:
      "Surprise Santa is a delightful web application designed to elevate the joy and excitement of Christmas. I worked with a team of developers to build this exciting platform which allows users to create events and groups, facilitating the exchange of surprise gift items. Through a random assignment process, participants anonymously select and gift one another, adding an extra layer of mystery and anticipation to the festivities. The element of surprise ensures that recipients don't know the identity of their gift giver, adding a touch of magic to the entire experience.",
    features:
      " Authentication Features, creating groups and events, email verifications, responsive Design, interactive User Interface",
    status: "completed",
    gitlink: "https://github.com/Surprise-Santa/surprise-santa-fe",
    live: "https://www.surprisesanta.org/",
  },
  {
    id: "5",
    img: "/assets/nailB1.webp",
    heading: "Nail Boutique App",
    tools: ["React", "JavaScript", "Styled-Components", "Context-API"],

    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "  A beauty brand website built with React, JavaScript and Styled-Components where customers can book and schedule appointments .",
    description:
      " Welcome to the Nail Boutique, a stunning beauty brand website built with React, JavaScript and Styled-Components. I also utilized basic React Features such as State Management using Context-API and routing using React-Router-DOM. Immerse yourself in a world of luxurious nail care services, where you can explore a wide array of services, schedule appointments and embark on a journey to pamper yourself. Please note that while the Nail Boutique application provides an immersive experience for exploring services and booking appointments, certain backend functionalities such as confirmation emails, appointment cancellation or rescheduling, and payment processing are not currently operational. The focus of this front-end project is to showcase the visual and interactive aspects of the user experience, inviting you to envision the possibilities of a comprehensive beauty brand platform.",
    features:
      "It provides features for selecting branch locations, exploring and selecting a wide range of services, appointment booking, appointment sheduling and viewing the booking summary.",
    status: "In progress",
    gitlink: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },

  {
    id: "6",

    img: "/assets/other3.webp",
    heading: "Windec Web App",
    tools: ["React", "JavaScript", "Styled-Components"],

    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An innovative web application built with Reactjs and Styled-Components.",
    description:
      "Windec is a sophisticated web application tailored for companies specializing in digital products and marketing. This innovative platform is meticulously crafted to meet the unique needs and challenges faced by businesses operating in the dynamic landscape of digital industries.",
    features: "Responsive Design, interactive User Interface",
    status: "Completed",
    gitlink: "https://github.com/Meldy2503/Windec",
    live: "https://meldy2503.github.io/Windec/",
  },
];

export const links = [
  {
    href: "https://www.linkedin.com/in/emelder-okafor-67b22122b/",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:emelder.charles25@gmail.com",
    icon: AiOutlineMail,
    label: "Email",
  },
  {
    href: "https://github.com/Meldy2503 ",
    icon: AiFillGithub,
    label: "Github",
  },
  {
    href: "https://www.twitter.com/EmelderOkafor",
    icon: AiOutlineTwitter,
    label: "Twitter",
  },
];

export const otherProjects = [
  {
    id: "1",
    img: "/assets/other1.webp",
    heading: "Crypto Web App",
    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "A crypto app built with React and CSS. It utilizes a crypto API to display different cryptocurrencies with their symbols, volume, and price.",
    gitlink: "https://github.com/Meldy2503/crypto-app",
    live: "https://coinic-crypto.netlify.app/",
  },

  {
    id: "2",
    img: "/assets/other2.webp",
    heading: "My Portfolio App",
    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/chakra.svg",
      "/assets/css.svg",
      "/assets/html.svg",
      "/assets/nextjs.svg",
    ],
    brief:
      "A portfolio built with Nextjs and TypeScript which showcases a collection of projects that highlights my expertise in front-end development.",
    gitlink: "https://github.com/Meldy2503/personal-website",
    live: "https://emelder-okafor.vercel.app/",
  },
  {
    id: "3",
    img: "/assets/foodie2.webp",
    heading: "Foodie App",
    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "A simple commerce solution for restaurants and chefs built with React, JavaScript and Styled-Components.",
    gitlink: "https://github.com/Meldy2503/foodie-app",
    live: "https://online-foodie.netlify.app/",
  },
  
  {
    id: "4",
    img: "/assets/other4.webp",
    heading: "Crud App",
    stacks: [
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An web application for creating, viewing, editing and deleting employees in an establishment.",
    gitlink: "https://github.com/Meldy2503/crud-app",
    live: "https://oceanica-employees.netlify.app/",
  },

  {
    id: "5",
    img: "/assets/other5.webp",
    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    heading: "Calculator App",
    brief:
      "This is a web application created using Reactjs & Styled Components. It provides a user-friendly interface for performing basic arithmetic calculations.",
    gitlink: "https://github.com/Meldy2503/altschool-calculator",
    live: "https://react-calculator-altschool.netlify.app/",
  },
  {
    id: "6",
    img: "/assets/quiz2.webp",
    heading: "Quiz App",
    stacks: [
      "/assets/vue.svg",
      "/assets/js.svg",
      "/assets/tailwind.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An intuitive app with a thrilling journey of knowledge and quick thinking built with Vuejs",
    gitlink: "https://github.com/Meldy2503/vue-quiz-app",
    live: "https://simple-vue-quiz-app.netlify.app/",
  },
];

export const reviewData = [
  {
    image: "/assets/face4.jpg",
    name: "Angel Smith",
    occupation: "Product",
    comment:
      "Emelder's expertise in front-end development truly shines through in every project. Her attention to detail and creative approach to projects results in seamless user experiences. It's a pleasure working with someone so dedicated.",
  },
  {
    image: "/assets/face2.jpg",
    name: "Mark Edward",
    occupation: "Product Manager",
    comment:
      "Emelder has consistently delivered outstanding front-end solutions for our company. Her understanding of UI/UX principles, attention to details and commitment to deadlines makes her a valuable asset to any development team.",
  },
  {
    image: "/assets/face1.jpg",
    name: "Enabong Pius",
    occupation: "Full-Stack Developer",
    comment:
      "I was amazed by the quality of Emelder's work as a front-end developer. Her ability to transform complex ideas into user-friendly interfaces is exceptional. Her code is clean and organized, making collaboration smooth and efficient.",
  },
  {
    image: "/assets/face3.jpg",
    name: "Elizabeth Eneh",
    occupation: "Software Engineer",
    comment:
      "As a fellow developer, I've had the privilege of working with Emelder on several projects. Her proficiency in front-end technologies is top-notch and her ability to share knowledge and collaborate makes her a true team player.",
  },
];
