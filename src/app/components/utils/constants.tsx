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
    name: "ReactJs",
    value: 95,
  },
  {
    name: "React Native",
    value: 93,
  },
  {
    name: "NextJs",
    value: 95,
  },
  {
    name: "Vue",
    value: 70,
  },
  {
    name: "Typescript",
    value: 93,
  },
  {
    name: "Javascript",
    value: 94,
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
    img: [
      "/assets/four-marketplace.png",
      "/assets/two-marketplace.png",
      "/assets/three-marketplace.png",
      "/assets/six-marketplace.png",
    ],
    heading: "Octodoc marketplace",
    tools: ["React.js", "Typescript", "Chakra-UI", "Nextjs", "Context-api"],
    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/css.svg",
      "/assets/chakra.svg",
      "/assets/nextjs.svg",
    ],
    brief:
      "A user-centric marketplace that enables customers to compare and purchase health plans from various providers. The platform simplifies the decision-making process through intuitive comparison tools and streamlined purchasing.",
    description:
      " A user-centric marketplace that enables customers to compare and purchase health plans from various providers. The platform simplifies the decision-making process through intuitive comparison tools and streamlined purchasing. Working in a two-person team, I worked on the frontend development of key marketplace features including plan comparison, advanced filtering, and purchase flow integration. Collaborated on implementing post-purchase automation for beneficiary detail collection and user onboarding.",
    features:
      "Flutterwave payment integration, Advanced filtering system based on price and coverage, Side-by-side plan comparison interface, Email configurations, responsive Design, User authentication and authorization",
    status: "Completed",
    gitlink: "",
    live: "https://www.octodoc.com/",
  },
  {
    id: "2",
    img: [
      "/assets/octodoc-twwo.jpg",
      "/assets/octodoc-fourr.png",
      "/assets/octodoc-onne.png",
      "/assets/octodoc-threee.png",
    ],
    heading: "Octodoc Mobile App",
    tools: ["React-native", "Typescript", "CSS"],

    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/css.svg",
    ],
    brief:
      "OctoDoc is a comprehensive healthcare platform that connects patients with healthcare providers through real-time communication and appointment management",
    description:
      "OctoDoc is a comprehensive healthcare platform that connects patients with healthcare providers through real-time communication and appointment management. The mobile app enables seamless healthcare delivery and consultation. I played a key role in enhancing the React Native application, implementing critical features like real-time native call alerts and modernizing the codebase. Led a major dependency update project that involved substantial rewriting to improve app performance and user experience.",
    features:
      "Major dependency updates and codebase modernization, Cross-platform compatibility for iOS and Android, Integration with backend services for real-time communication, User authentication and authorization, Email configurations",
    status: "InProgress",
    gitlink: "",
    live: "https://play.google.com/store/apps/details?id=ai.octosoft.octodoc&pli=1",
  },
  {
    id: "3",
    img: [
      "/assets/dami-port.webp",
      "/assets/dami-twoo.png",
      "/assets/dami.png",
      "/assets/dami-fouur.png",
    ],
    heading: "Damilola-B",
    tools: ["React", "Typescript", "Chakra-UI", "Nextjs", "CSS"],

    stacks: [
      "/assets/react.svg",
      "/assets/ts.svg",
      "/assets/css.svg",
      "/assets/chakra.svg",
      "/assets/nextjs.svg",
    ],
    brief:
      "This is a web application which describes the journey of a UI/UX designer, showcasing her prowess and expertise in the world of design.",
    description:
      "Damilola-B is an exquisite web application specifically tailored for a UI/UX designer. It serves as a showcase for the creative endeavors of Damilola, a skilled designer. This platform provides a captivating insight into the diverse and innovative projects she has worked on, demonstrating a rich portfolio that spans various digital products. It's a testament to her talent and expertise in the dynamic realm of UI/UX design, offering visitors a delightful journey through the world of captivating and impactful digital creations.",
    features:
      "SEO optimization, Email configurations, responsive Design, interactive User Interface",
    status: "InProgress",
    gitlink: "https://github.com/Meldy2503/Damilola-portfolio",
    live: "https://damilola-portfolio.vercel.app/",
  },
  {
    id: "4",
    img: [
      "/assets/chatter1.webp",
      "/assets/blog-threee.png",
      "/assets/blog-twoo.png",
      "/assets/blog-onee.png",
    ],
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

  // {
  //   id: "6",
  //   img: ["/assets/mildred-port.webp", "/assets/finder2.webp"],
  //   heading: "YouTube Portfolio",
  //   tools: ["React", "Typescript", "Chakra-UI", "Nextjs, CSS"],
  //   stacks: [
  //     "/assets/react.svg",
  //     "/assets/ts.svg",
  //     "/assets/css.svg",
  //     "/assets/chakra.svg",
  //     "/assets/nextjs.svg",
  //   ],
  //   brief:
  //     "This is a delightful web application designed to elevate the viewers entertainment journey.",
  //   description:
  //     "This is an official website designed and built for a youtuber.It was crafted with the power of Next.js and Chakra-UI CSS framwork delivering an engaging and user-friendly interface.",
  //   features:
  //     "SEO optimization, Email configurations, responsive Design, interactive User Interface",
  //   status: "completed",
  //   gitlink: "https://github.com/Meldy2503/mildred-portfolio",
  //   live: "https://www.milderdken.com/",
  // },
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
    img: "/assets/finder2.webp",
    heading: "GitHub Finder App",
    stacks: [
      "/assets/vue.svg",
      "/assets/js.svg",
      "/assets/tailwind.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An innovative web application for exploring GitHub Profiles built with Vuejs and Tailwind CSS framwork.",
    gitlink: "https://github.com/Meldy2503/vue-github-profile",
    live: "https://vue-github-profile.vercel.app/",
  },
  {
    id: "2",
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
    id: "3",
    img: "/assets/other3.webp",
    heading: "Windec Web App",
    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "An innovative web application built with Reactjs and Styled-Components.",
    gitlink: "https://github.com/Meldy2503/Windec",
    live: "https://meldy2503.github.io/Windec/",
  },

  {
    id: "4",
    img: "/assets/nailB1.webp",
    heading: "Nail Boutique App",
    stacks: [
      "/assets/react.svg",
      "/assets/js.svg",
      "/assets/sc.svg",
      "/assets/css.svg",
      "/assets/html.svg",
    ],
    brief:
      "  A beauty brand website built with React, JavaScript and Styled-Components where customers can book and schedule appointments .",
    gitlink: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },

  {
    id: "5",
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
    image: "/assets/ada.jpg",
    name: "Ada Ikem",
    occupation: "Software Engineer",
    comment:
      "Emelder's expertise in front-end development truly shines through in every project. Her attention to detail and creative approach to projects results in seamless user experiences. It's a pleasure working with someone so dedicated.",
  },
  {
    image: "/assets/toni.jpg",
    name: "Toni Animashaun",
    occupation: "Product Manager",
    comment:
      "Emelder has consistently delivered outstanding front-end solutions for our company. Her understanding of UI/UX principles, attention to details and commitment to deadlines makes her a valuable asset to any development team.",
  },
  {
    image: "/assets/chukwudi.jpg",
    name: "Chukwudi Ndimneze",
    occupation: "Software Engineer",
    comment:
      "I was amazed by the quality of Emelder's work as a front-end developer. Her ability to transform complex ideas into user-friendly interfaces is exceptional. Her code is clean and organized, making collaboration smooth and efficient.",
  },
  {
    image: "/assets/bokem.jpg",
    name: "Chibuokem Egbuchulam",
    occupation: "Software Engineer",
    comment:
      "As a fellow developer, I've had the privilege of working with Emelder on several projects. Her proficiency in front-end technologies is top-notch and her ability to share knowledge and collaborate makes her a true team player.",
  },
];
