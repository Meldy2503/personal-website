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
    name: "Reviews",
    icon: GoCodeReview,
    id: "#reviews",
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
    value: 90,
  },
  {
    name: "Vue",
    value: 60,
  },
  {
    name: "Typescript",
    value: 90,
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
  },
  {
    icon: AiTwotoneMail,
    placeholder: "Email",
    type: "email",
  },
  {
    icon: BiMessageDots,
    placeholder: "Message",
    type: "textarea",
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
    category: "NEXTJS",
    img: "/assets/next1.png",
    heading: "Chatter Blog App",
    brief:
      "A haven for text-based contents built with Nextjs, TypeScript, Firebase and Chakra-UI",
    description:
      "Chatter is a multi-functional platform where authors and readers can have access to their own content. The website was built with Next.js, TypeScript, Chakra-UI CSS framework, firebase backend and also utililized State Management using Context-API . It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive to create a safe space for everyone to share their thoughts and ideas.",
    features:
      "It provides features for authentication, reading published posts, viewing author profiles, writing and publishing new posts using React Markdown, updating user profiles, liking and commenting on posts, bookmarking and saving posts as drafts, analytics, categorizing posts, unit tests, searching posts and switching the display mode from light to dark.",
    status: "completed",
    gitlink: "https://github.com/Meldy2503/blog-app",
    live: "https://blog-app-two-psi.vercel.app/",
    carousel: ["/assets/next1.png", "/assets/next3.png", "/assets/next4.png"],
  },
  {
    id: "2",
    category: "REACTJS",
    img: "/assets/react4.png",
    heading: "Foodie App",
    brief:
      "A simple commerce solution for restaurants and chefs built with React, JavaScript and Styled-Components.",
    description:
      "Welcome to the Food Vendor Platform, an innovative web application crafted using Reactjs, Javascript and Styled Components. I also utilized basic React Features such as dynamic routing using React-Router-DOM. This dynamic platform opens up a world of possibilities for food vendors, allowing them to seamlessly bring their culinary creations to a digital audience. With the Food Vendor Platform, vendors can effortlessly register their stores, showcase their delectable offerings, and engage with a wider customer base in an immersive online environment.",
    features:
      "It provides features for store customization, vendors can establish a strong online presence by easily registering their stores on the platform, customer interaction, food showcase, patronage and growth.",
    status: "In progress",
    gitlink: "https://github.com/Meldy2503/foodie-app",
    live: "https://online-foodie.netlify.app/",
  },
  {
    id: "3",
    category: "VUEJS",
    img: "/assets/vue2.png",
    heading: "Quiz App",
    brief:
      "An intuitive app with a thrilling journey of knowledge and quick thinking built with Vuejs",
    description:
      "Introducing the Quiz App, a captivating and engaging quiz application meticulously crafted with the power of Vue.js. This intuitive app promises a thrilling journey of knowledge and quick thinking, challenging users to test their wits against a diverse range of questions about Vuejs. With a countdown of 30 seconds per question, users must think fast and choose wisely to secure their place on the leaderboard.",
    features:
      "It provides features for interactive quizzing, answer selection, timer and total points display",
    status: "Completed",
    gitlink: "https://github.com/Meldy2503/vue-quiz-app",
    live: "https://simple-vue-quiz-app.netlify.app/",
    carousel: ["/assets/vue1.png", "/assets/vue2.png", "/assets/vue2.png"],
  },
  {
    id: "4",
    category: "NEXTJS",
    img: "/assets/next7.png",
    heading: "My Portfolio App",
    brief:
      "A portfolio built with Nextjs and TypeScript which showcases a collection of projects that highlights my expertise in front-end development.",
    description:
      " Welcome to my portfolio built with  Next.js, TypeScript and Chakra-UI, where I showcased a collection of projects that highlights my expertise in front-end development. As you explore this portfolio, you'll find an array of meticulously crafted projects created using Vue, React, and Next.js frameworks.From sleek user interfaces to intricate code structures, each project represents a unique journey of creativity and innovation. The responsive design ensures a seamless experience across various devices, allowing you to immerse yourself in the details of each project from anywhere. You can effortlessly browse through the projects using the interactive UI, sort them based on frameworks and dive into the intricacies of each project. Detailed descriptions provide insights into the technologies employed, design considerations, and key functionalities.  Feel free to reach out if you're interested in collaborating or have any inquiries. Thank you for visiting, and I hope you enjoy your journey through my front-end development portfolio!",
    features:
      "Responsive Design, skills highlight, interactive User Interface, sorting projects based on frameworks and switching the display mode from light to dark.",
    status: "completed",
    gitlink: "https://github.com/Meldy2503/personal-website",
    live: "https://next-trainer.vercel.app/",
    carousel: ["/assets/next7.png", "/assets/next8.png", "/assets/next9.png"],
  },
  {
    id: "5",
    category: "REACTJS",
    img: "/assets/react3.png",
    heading: "Nail Boutique App",
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
    category: "VUEJS",
    img: "/assets/vue7.png",
    heading: "GitHub Finder App",
    brief:
      "An innovative web application for exploring GitHub Profiles built with Vuejs and Tailwind CSS framwork.",
    description:
      "Unveiling GitHub Finder, an innovative web application crafted with the power of Vue.js and Tailwind CSS framwork, designed to provide an immersive journey into the world of GitHub profiles. This intuitive platform not only showcases my personal GitHub profile but also empowers users to explore and discover the GitHub profiles of fellow developers. With seamless integration of the GitHub API, GitHub Finder delivers a user-friendly interface, transforming raw data into meaningful insights.",
    features:
      "It provides features for displaying my personal GitHub profile, search, explore and view details of various GitHub profiles, utilization of GitHub API endpoints using Axios, page routing with vue-router, SEO optimization with React Helmet Async and switching the display mode from light to dark.",
    status: "Completed",
    gitlink: "https://github.com/Meldy2503/vue-github-profile",
    live: "https://vue-github-profile.vercel.app/",
    carousel: ["/assets/vue4.png", "/assets/vue5.png", "/assets/vue6.png"],
  },
];

export const otherProjects = [
  {
    id: "1",
    img: "/assets/crypto.png",
    heading: "Crypto Web App",
    brief:
      "A crypto app built with React and CSS. It utilizes a crypto API to display different cryptocurrencies with their symbols, volume, and price.",
    gitlink: "https://github.com/Meldy2503/crypto-app",
    live: "https://coinic-crypto.netlify.app/",
  },
  {
    id: "2",
    img: "/assets/ascen.png",
    heading: "Ascendancy Web App",
    brief:
      "A website created with Reactjs and Styled Components. It serves as an online learning platform for individuals interested in tech.",
    gitlink: "https://github.com/Meldy2503/ascendancy",
    live: "https://ascendancy-website.netlify.app/",
  },
  {
    id: "3",
    img: "/assets/windec.png",
    heading: "Windec Web App",
    brief:
      "An innovative web application built with Reactjs and Styled-Components.",
    gitlink: "https://github.com/Meldy2503/Windec",
    live: "https://meldy2503.github.io/Windec/",
  },

  {
    id: "4",
    img: "/assets/crud.png",
    heading: "Crud App",
    brief:
      "An web application for creating, viewing, editing and deleting employees in an establishment.",
    gitlink: "https://github.com/Meldy2503/crud-app",
    live: "https://oceanica-employees.netlify.app/",
  },

  {
    id: "5",
    img: "/assets/calc.png",
    heading: "Calculator App",
    brief:
      "This is a web application created using Reactjs & Styled Components. It provides a user-friendly interface for performing basic arithmetic calculations.",
    gitlink: "https://github.com/Meldy2503/altschool-calculator",
    live: "https://react-calculator-altschool.netlify.app/",
  },
  {
    id: "6",
    img: "/assets/profile.png",
    heading: "GitHub Finder App",
    brief:
      "An innovative web application for exploring GitHub Profiles built with Reactjs and Tailwind CSS framwork.",
    gitlink: "https://github.com/Meldy2503/github-profile",
    live: "https://altschool-github-profile.netlify.app/",
  },
];
