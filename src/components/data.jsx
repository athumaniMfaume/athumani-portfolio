// data.jsx
import { FaLaptopCode, FaMobileAlt, FaHeadset, FaBullhorn, FaRobot } from 'react-icons/fa';
import fred from '../assets/fred.jpeg';
import odhiambo from '../assets/odhiambo.png';
import ems from '../assets/ems.PNG';
import msms from '../assets/msms.PNG';
import sms from '../assets/sms.PNG';
import cms from '../assets/cms.PNG';
import eb from '../assets/eb.PNG';
import n1 from '../assets/n1.PNG';
import dja1 from '../assets/dja1.PNG';
import c1 from '../assets/c1.PNG';
import user from '../assets/user.PNG';
import scgs from '../assets/scgs.PNG';
import ajira from '../assets/ajira.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

const cyanIcon = { background: 'linear-gradient(135deg,#22d3ee,#06b6d4)', color: '#0b1220' };
const violetIcon = { background: 'linear-gradient(135deg,#a78bfa,#8b5cf6)', color: '#0b1220' };
const fuchsiaIcon = { background: 'linear-gradient(135deg,#e879f9,#d946ef)', color: '#0b1220' };
const amberIcon = { background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', color: '#0b1220' };

// Projects
export const projects = [
  {
    id: 0,
    title: "Ajira Clinic",
    description: "A career services platform for East African job seekers — professional CV writing, ATS optimization, cover letters, LinkedIn profile optimization, interview coaching and career consultation. Trusted by clients from NMB, CRDB, Tigo, World Vision, UNDP, Equity Bank, Stanbic and TBL.",
    tags: ["React", "Tailwind CSS", "Node", "WhatsApp Integration"],
    image: ajira,
    github: "",
    demo: "https://ajira-clinic.onrender.com/",
  },
  {
    id: 1,
    title: "Tanzania Student Career Guidance System",
    description: "A comprehensive MERN stack platform designed to help Tanzanian students choose the right career paths, subjects, and universities based on their interests and grades.",
    tags: ["MongoDB", "Express", "React", "Node", "Tailwind CSS", "JWT"],
    image: scgs,
    github: "https://github.com/athumaniMfaume/Tanzania-Student-Career-Guidance-System",
    demo: "https://tanzania-student-career-guidance-system.onrender.com/",
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Laravel-based web app to manage employees, track leave, monitor payroll, and organize departments efficiently.",
    tags: ["Laravel", "MYSQL"],
    image: ems,
    github: "https://github.com/athumaniMfaume/employees-management-system",
    demo: "https://employees-management-system-2.onrender.com/",
  },
  {
    id: 3,
    title: "Multi School Management System (EduManage SMS)",
    description: "EduManage SMS is a monolithic Laravel 12 application with React integration, designed to manage multiple schools efficiently.",
    tags: ["Laravel 12", "React", "TypeScript", "Inertia", "Render", "PostgreSQL", "Tailwind CSS"],
    image: msms,
    github: "https://github.com/athumaniMfaume/edumanage-sms",
    demo: "https://edumanage-sms.onrender.com/",
  },
  {
    id: 4,
    title: "User Management System",
    description: "MERN stack app to manage users with authentication, roles, and secure access.",
    tags: ["MongoDB", "Express", "React", "Node", "JWT", "bcrypt"],
    image: user,
    github: "https://github.com/athumaniMfaume/mern-user-management-system",
    demo: "https://mern-user-management-system.onrender.com/",
  },
  {
    id: 5,
    title: "Appointment Request Website",
    description: "A smart website that allows users to request appointments via a calendar and send messages through an integrated contact form.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: eb,
    github: "https://github.com/athumaniMfaume/ebweb2",
    demo: "https://ebweb2.netlify.app",
  },
  {
    id: 6,
    title: "Notes Management System",
    description: "MERN stack app to create, organize, and manage notes efficiently.",
    tags: ["MongoDB", "Express", "React", "Node"],
    image: n1,
    github: "https://github.com/athumaniMfaume/mern-notes-management-system",
    demo: "https://mern-notes-management-system.onrender.com/",
  },
  {
    id: 7,
    title: "School Management System",
    description: "A web-based school management system built using Laravel 11 with AdminLTE template for managing students, teachers, and exams.",
    tags: ["Laravel 11", "AdminLTE", "MySQL", "Blade", "Bootstrap"],
    image: sms,
    github: "https://github.com/athumaniMfaume/School-Management-System",
    demo: "https://edumanage-sms.onrender.com/",
  },
  {
    id: 8,
    title: "E-commerce Website",
    description: "Laravel-based e-commerce system with user authentication, product management, cart, and payment integration.",
    tags: ["PHP", "Laravel", "MySQL", "CSS", "JavaScript"],
    image: c1,
    github: "https://github.com/athumaniMfaume/ecommerce-project",
    demo: "",
  },
  {
    id: 9,
    title: "Notes/Posts Management System",
    description: "Django web app with user authentication, role management, and post creation. Fully responsive.",
    tags: ["Python", "Django", "PostgreSQL", "CSS", "JavaScript"],
    image: dja1,
    github: "https://github.com/athumaniMfaume/blog-django",
    demo: "",
  },
  {
    id: 10,
    title: "Career Guidance Quiz",
    description: "The app allows users to answer multiple-choice questions and get personalized career suggestions based on their answers.",
    tags: ["React", "Tailwind CSS"],
    image: cms,
    github: "https://github.com/athumaniMfaume/career-quiz-react",
    demo: "https://careerquizreact.netlify.app/",
  },
];


// Timeline
export const timeline = [
  // Current Job
  {
    date: "Jan 2026 - Present",
    title: "Full Stack & AI Developer",
    subtitle: "Moinfo Tech",
    desc: `• Developing modern web and mobile applications powered by Claude AI (Anthropic).
• Building AI-assisted features — chat assistants, content generation, RAG pipelines and workflow automation — directly into client-facing products.
• Using Claude Code daily to accelerate development, refactor large codebases, and ship production-quality features faster.
• Working across the full stack: React/Next.js, Flutter, Laravel, Node.js and PostgreSQL/MongoDB.`,
    icon: <FontAwesomeIcon icon={faRobot} />,
    iconStyle: cyanIcon,
  },
  // Previous AI / engineering
  {
    date: "2024 - 2025",
    title: "AI Integration & Engineering",
    subtitle: "Claude (Anthropic), OpenAI GPT, Gemini",
    desc: `• Built production features powered by Claude (Anthropic API) — chat assistants, content generation, and code automation.
• Integrated OpenAI GPT and Google Gemini into web and mobile apps via REST APIs.
• Designed prompt-engineering workflows, retrieval-augmented generation (RAG), and tool-use pipelines.
• Used Claude Code and GitHub Copilot daily to accelerate development and refactor large codebases.`,
    icon: <FontAwesomeIcon icon={faRobot} />,
    iconStyle: violetIcon,
  },
  // Previous Software Dev role
  {
    date: "Mar 2023 - Dec 2025",
    title: "Software Developer",
    subtitle: "Melian Software Company",
    desc: `• Developed and maintained web and mobile applications improving user experience and operational efficiency.
• Managed social media platforms to increase engagement and drive traffic to the company's website.`,
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: violetIcon,
  },
  // Previous Job
  {
    date: "Jan 2021 - Feb 2023",
    title: "IT Support Specialist",
    subtitle: "Boom Software Technology",
    desc: `• Diagnosed and resolved hardware and software issues for desktops, laptops, and printers across the organisation.
• Set up, configured, and maintained LAN/Wi-Fi networks and network devices (routers, switches, access points).
• Installed, configured, and updated operating systems (Windows, Linux) and business applications.
• Managed user accounts, access control, and permissions (Active Directory / user management systems).
• Handled help desk tickets and resolved technical issues efficiently, maintaining high user satisfaction.
• Performed regular system backups, maintenance schedules, and security patch updates.
• Conducted IT training sessions that improved employee digital literacy and day-to-day productivity.`,
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: fuchsiaIcon,
  },
  // University
  {
    date: "Nov 2017 - Dec 2020",
    title: "Bachelor of Science in IT with Business",
    subtitle: "Mzumbe University",
    desc: `Studied core IT subjects including Programming, Database Management, Networking, Web Development, and Business Information Systems.`,
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: amberIcon,
  },
  // High School
  {
    date: "Jun 2015 - Jul 2017",
    title: "High School",
    subtitle: "Jitegemee High School",
    desc: "Studied Economics, Geography, Mathematics.",
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: amberIcon,
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
    title: "AI Integration",
    icon: FaRobot,
    description: "Integrating Claude, OpenAI GPT, and Gemini into apps — chat assistants, RAG, automation, and prompt engineering.",
  },
  {
    id: 4,
    title: "IT Support",
    icon: FaHeadset,
    description: "Hardware & software troubleshooting, network setup & configuration, OS administration (Windows/Linux), help desk support, remote assistance, and end-user IT training for businesses.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    icon: FaBullhorn,
    description: "Promoting businesses online using SEO, social media, and advertising strategies.",
  },
];
