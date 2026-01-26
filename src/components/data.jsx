// data.jsx
import { FaLaptopCode, FaMobileAlt, FaHeadset, FaBullhorn } from 'react-icons/fa';
import { SiReact, SiLaravel, SiFlutter } from 'react-icons/si';
import fred from '../assets/fred.jpeg';
import odhiambo from '../assets/odhiambo.png';
import ems from '../assets/ems.PNG';
import cms from '../assets/cms.PNG';
import eb from '../assets/eb.PNG';
import n1 from '../assets/n1.PNG';
import dja1 from '../assets/dja1.PNG';
import c1 from '../assets/c1.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const blueIconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };

// const workIcon = {
//   icon: <FontAwesomeIcon icon={faBriefcase} />,
//   iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
// };
// const schoolIcon = {
//   icon: <FontAwesomeIcon icon={faSchool} />,
//   iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
// };
// const starIcon = {
//   icon: <FontAwesomeIcon icon={faStar} />,
//   iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
// };

// Projects
export const projects = [
  {
    id: 3,
    title: "Career Guidance Quiz",
    description: "The app allows users to answer multiple-choice questions and get personalized career suggestions based on their answer",
    tags: ["React", "Tailwind CSS"],
    image: cms,
    github: "https://github.com/athumaniMfaume/career-quiz-react",
    demo: "https://careerquizreact.netlify.app/",
  },
{
  id: 2,
  title: "Appointment Request Website",
  description: "A smart website that allows users to request appointments via a calendar and send messages through an integrated contact form.",
  tags: ["React", "Tailwind CSS", "JavaScript"],
  image: eb,
  github: "https://github.com/athumaniMfaume/ebweb2",
  demo: "https://ebweb2.netlify.app",
},

  {
    id: 1,
    title: "Employee Management System",
    description: "Laravel-based web app to manage employees, track leave, monitor payroll, and organize departments efficiently.",
    tags: ["Laravel", "MYSQL"],
    image: ems,
    github: "https://github.com/athumaniMfaume/employees-management-system",
    demo: "https://employees-management-system-2.onrender.com/",
  },

{
  id: 4,
  title: "Notes Management System",
  description: "MERN stack app to create, organize, and manage notes efficiently.",
  tags: ["MongoDB", "Express", "React", "Node"],
  image: n1,
  github: "https://github.com/athumaniMfaume/mern-notes-management-system",
  demo: "",
},

{
  id: 5,
  title: "Notes/Posts Management System",
  description: "Django web app with user authentication, role management, and post creation/viewing. Fully responsive for desktop and mobile.",
  tags: ["Python", "Django", "PostgreSQL", "CSS", "JavaScript"],
  image: dja1,
  github: "https://github.com/athumaniMfaume/blog-django",
  demo: "",
},

{
  id: 6,
  title: "E-commerce Website",
  description: "Laravel-based e-commerce system with user authentication, product management, cart, and payment integration. Fully responsive.",
  tags: ["PHP", "Laravel", "MySQL", "CSS", "JavaScript"],
  image: c1,
  github: "https://github.com/athumaniMfaume/ecommerce-project",
  demo: "",
},

];

// Timeline
export const timeline = [
  // Current Job
  {
    date: "March 2023 - Present",
    title: "Software Developer",
    subtitle: "Melian Software Company",
    desc: `• Developed and maintained web and mobile applications improving user experience and operational efficiency.
• Managed social media platforms to increase engagement and drive traffic to the company’s website.`,
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: blueIconStyle,
  },
  // Previous Job
  {
    date: "Jan 2021 - Feb 2023",
    title: "IT Support",
    subtitle: "Boom Software Technology",
    desc: `• Delivered IT support for hardware and software issues.
• Provided technical support to employees, resolving issues efficiently and enhancing IT literacy through training sessions.`,
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: blueIconStyle,
  },
// University
{
  date: "Nov 2017 - Dec 2020",
  title: "Bachelor of Science in IT with Business",
  subtitle: "Mzumbe University",
  desc: `Studied core IT subjects including Programming, Database Management, Networking, Web Development, and Business Information Systems.`,
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: blueIconStyle,
},

  // High School
  {
    date: "Jun 2015 - Jul 2017",
    title: "High School",
    subtitle: "Jitegemee High School",
    desc: "Studied Economics, Geography, Mathematics.",
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: blueIconStyle,
  },
];



// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Fred Kimaro",
    role: "Senior Developer",
    image: fred,
    testimonial: "Athumani is a talented developer with great attention to detail.",
  },
  {
    id: 2,
    name: "Odhiambo Basange",
    role: "Project Manager",
    image: odhiambo,
    testimonial: "Working with Athumani was a pleasure; very professional and skilled.",
  },
];

// Services

export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: FaLaptopCode,
    description: "Building responsive and modern websites with React, Laravel, and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: FaMobileAlt,
    description: "Creating cross-platform mobile apps using Flutter and React Native.",
  },
  {
    id: 3,
    title: "IT Support",
    icon: FaHeadset,
    description: "Providing technical support, troubleshooting, and IT solutions for businesses.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    icon: FaBullhorn,
    description: "Promoting businesses online using SEO, social media, and advertising strategies.",
  },
];

