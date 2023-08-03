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
import { BsFillPersonVcardFill } from "react-icons/bs";
import { GrStackOverflow } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";

export const menuData = [
  {
    name: "Home",
    icon: AiFillHome,
    id: "#home",
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

export const projectData = [
  {
    id: "1",
    category: "NEXTJS",
    img: "/assets/bg.jpg",
    heading: "Next Trainer UI Card",
    brief:
      "Next is a fitness trainer UI card built with Reactjs and Chakra UI description description",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "completed",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
  },
  {
    id: "2",
    category: "NEXTJS",
    img: "/assets/bg.jpg",
    heading: "Next Trainer UI Card",
    brief:
      " Next job is simple and sophisticated, so it is possible to describe",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "completed",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
    client: "octo-Africa",
  },
  {
    id: "3",
    category: "REACTJS",
    img: "/assets/bg.jpg",
    heading: "React Trainer UI Card",
    brief:
      "React and sophisticated, so it is possible to describe  My job is simple and sophisticated, so it is possible to describe",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "In progress",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
    client: "octo-Africa",
  },
  {
    id: "4",
    category: "JAVASCRIPT",
    img: "/assets/bg.jpg",
    heading: "Javascript Trainer UI Card",
    brief:
      "Javascript so it is possible to describe  My job is simple and sophisticated, so it is possible to describe",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "In progress",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
    client: "octo-Africa",
  },
  {
    id: "5",
    category: "VUEJS",
    img: "/assets/bg.jpg",
    heading: "Vue Trainer UI Card",
    brief:
      "Vue job is simple and sophisticated, so it is possible to describe simple and sophisticated",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "In progress",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
    client: "octo-Africa",
  },
  {
    id: "6",
    category: "VUEJS",
    img: "/assets/bg.jpg",
    heading: "Vue Trainer UI Card",
    brief:
      "Vue job is simple and sophisticated, so it is possible to describe simple and sophisticated",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore nobis fugit neque ut dignissimos corporis blanditiis, cum tenetur reprehenderit qui corrupti nisi atque, eius fugiat tempora suscipit eaque dolorem perferendis, porro sunt laborum odio dolore earum. Illo consectetur tempore repellat maxime repudiandae, ex magnam nulla dolor libero laboriosam, porro fuga! Quisquam, quibusdam.",
    status: "In progress",
    gitlink: "https://next-trainer.vercel.app/",
    live: "https://next-trainer.vercel.app/",
    client: "octo-Africa",
  },
];
