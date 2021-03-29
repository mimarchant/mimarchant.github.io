// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiFlask, SiJavascript } from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";
import starwars from './assets/images/ss1.png';
import trafficlight from './assets/images/trafficlight.png';
import paymentform from './assets/images/trafficlight.png';

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "mimarchant";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaNodeJs className="display-4" />,
    name: "Express",
  },
  {
    id: 5,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <SiFlask className="display-4" />,
    name: "Flask",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "paymentFormValidated",
  "starwars-blog",
  "trafficLight",
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: paymentform,
  },
  {
    image: starwars,
  },
  {
    image: trafficlight,
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "mimarchtt@gmail.com",
  phone: "",
  mailChimp: "",
};
