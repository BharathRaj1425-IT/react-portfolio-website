import aboutImg from "../images/About.jpeg";
import reactGreatLearning from "../images/React Certification.jpeg";
import sql from "../images/SQL Advanced.jpeg";
import frontEnd from "../images/FrontEnd Certification.jpeg";
import javaScript from "../images/JavaScript.jpeg";
import hysea from "../images/HYSEA Event.jpeg";
import hea from "../images/HEA Summit.jpeg";
import finnovoFirstJob from "../images/firstJob.jpeg";
import finnovoFirstAnniversary from "../images/Finnovo 1st Anniversary.jpeg";

export const personalInfo = {
  name: "Bharath Raj",
  title: "Software Engineer & IT Enthusiast",
  tagline: "Building exceptional digital experiences with modern technologies",
  email: "bharatharjun14259@gmail.com",
  phone: "+91 9505004481",
  location: "Hyderabad, India",
  github: "https://github.com/BharathRaj1425-IT",
  linkedin: "https://www.linkedin.com/in/bharath-raj-taduri/",
};

export const aboutData = {
  description:
    "I'm a passionate Full Stack Developer with 1.5+ years of experience building scalable web applications. I specialize in React, Node.js, and Cloud technologies. My approach combines Technical Expertise with creative Problem-Solving to deliver innovative solutions that drive business growth.",
  image: aboutImg,
  highlights: [
    "1.5+ years of professional development experience.",
    "Passionate about clean code and best practices.",
    "Currently exploring to broaden my backend knowledge.",
    "Thrive in collaborative environments where and technology come together.",
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Redux", level: 80 },
      { name: "React Native", level: 85 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Django Rest Framework", level: 80 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Postman", level: 88 },
      { name: "Git", level: 95 },
      { name: "PyCharm", level: 90 },
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "FINNOVO Tech Functional Pvt. Ltd",
    location: "Hyderabad, India",
    period: "Oct 2024 - Present",
    description:
      "Software Engineer in a Saas Platform of over 20+ clients and 2000+ users.",
    achievements: [
      "Integrated Zoho, Gmail, Google Meet, and Twilio APIs to automate interview scheduling, communication workflows, and WhatsApp-based payslip delivery, reducing manual effort by ~90%.",
      "Implemented Bulk Candidate Status Updates and Interview Scheduling interface improving recruitment efficiency by ~70%.",
      "Built Client Schema Configuration and a Support Ticketing System, improving workflow customization and cutting issue resolution time by ~35%",
    ],
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Algorithm Pod",
    location: "Remote",
    period: "Jan 2023 - Mar 2023",
    description:
      "Contributed to Frontend Development of E-Commerce Platform. Worked closely with design team to implement pixel-perfect UIs.",
    achievements: [
      "Implemented responsive designs for mobile and desktop",
      "Optimized page load times by 50%",
      "Collaborated with team of 8 developers",
    ],
  },
];

export const galleryData = [
  {
    id: 1,
    title: "React Certification from Great Learning",
    image: reactGreatLearning,
    category: "Certifications",
  },
  {
    id: 2,
    title: "JavaScript Developer from Simplilearn",
    image: javaScript,
    category: "Certifications",
  },
  {
    id: 3,
    title: "Front End Developer from HackerRank",
    image: frontEnd,
    category: "Certifications",
  },
  {
    id: 4,
    title: "PostgreSQL Developer from HackerRank",
    image: sql,
    category: "Certifications",
  },
  {
    id: 5,
    title: "HEA Summit - November, 2025",
    image: hea,
    category: "Events",
  },
  {
    id: 6,
    title: "HYSEA Event - February, 2025",
    image: hysea,
    category: "Events",
  },
  {
    id: 7,
    title: "FINNOVO - 1 Year Anniversary",
    image: finnovoFirstAnniversary,
    category: "Achievements & Milestones",
  },
  {
    id: 8,
    title: "FINNOVO - 1st Job",
    image: finnovoFirstJob,
    category: "Achievements & Milestones",
  },
];

export const projectsData = [];
