export const contactEmail = "keithagreda@gmail.com";

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export interface Project {
  id: string;
  title: string;
  role: string;
  stack: string[];
  description: string;
  ownership: string;
  outcome?: string;
  details?: string;
  imageUrl?: string;
  link?: string;
  confidential?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "triangle-centre-court",
    title: "Triangle Centre Court",
    role: "Freelance · Sole developer",
    stack: [".NET", "Next.js", "SQL Server"],
    description:
      "Booking platform for a live pickleball venue. Players reserve courts, pay online, and track booking status.",
    ownership:
      "Owned client discovery, requirements, implementation, deployment, and ongoing support.",
    outcome: "300+ registered users",
    imageUrl: "/trianglecentrecourt.webp",
    link: "https://trianglecentrecourt.com/",
    featured: true,
  },
  {
    id: "stai",
    title: "STAI Smarter Trades AI Assistant",
    role: "Production voice assistant",
    stack: [".NET", "SQL Server", "Vapi", "Google Chat"],
    description:
      "Answers customer calls for California Pumping and Sanitation, identifies pumping service needs, and provides pricing estimates.",
    ownership:
      "Built .NET and SQL Server pricing tools for the Vapi voice workflow, using factors such as service location and gallon size.",
    outcome: "Production calls → pricing estimates → dispatcher handoff",
    details:
      "Call summaries and quoted estimates are sent to Google Chat for dispatcher review. Call history and short summaries are available through Vapi’s dashboard.",
    featured: true,
  },
  {
    id: "brigada-hrms",
    title: "Brigada HRMS",
    role: "Internal tool · NDA",
    stack: [".NET", "Angular", "SQL Server"],
    description:
      "Internal HR system supporting leave, official business and overtime requests, payroll adjustments, employee timesheets, and payroll processing.",
    ownership:
      "Led development to digitize HR and payroll workflows and support the move to paperless operations.",
    outcome: "Supports 900+ eligible employees",
    confidential: true,
    featured: true,
  },
  {
    id: "tgicecubes",
    title: "TGIceCubes POS & Inventory",
    role: "Freelance · Sole developer",
    stack: [".NET", "Angular", "PostgreSQL"],
    description:
      "Point-of-sale and inventory system that brings sales processing and stock tracking into one business application.",
    ownership:
      "Handled client requirements, development, deployment, and ongoing support.",
    imageUrl: "/tgicecubespos.webp",
  },
  {
    id: "alectric",
    title: "Alectric Engineering Services",
    role: "Freelance · Sole developer",
    stack: [".NET", "Next.js", "SQL Server"],
    description:
      "Service platform for engineering consultations and project management.",
    ownership:
      "Delivered the website from client discovery and requirements through implementation, deployment, and support.",
    imageUrl: "/alectricengineeringservices.webp",
    link: "https://alectric-solar-web.vercel.app",
  },
  {
    id: "rfi",
    title: "RFI Iceplant Monitoring System",
    role: "Sole developer",
    stack: [".NET", "Angular", "PostgreSQL"],
    description:
      "Operations monitoring system that helps an ice plant track activity and identify production issues.",
    ownership:
      "Owned requirements gathering, implementation, deployment, and support.",
    imageUrl: "/rfiiiceplantpos.webp",
  },
];

export interface Experience {
  tenure: string;
  name: string;
  company: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    tenure: "Feb 2025 – Present",
    name: "Mid Software Developer",
    company: "Brigada Group of Companies",
    highlights: [
      "Led development of an internal HR system using .NET, Angular, and SQL Server, supporting HR and payroll workflows for 900+ eligible employees.",
      "Digitized leave, official business and overtime requests, payroll adjustments, employee timesheets, and payroll processing.",
    ],
  },
  {
    tenure: "Aug 2023 – Feb 2025",
    name: "Junior Software Developer",
    company: "Brigada Group of Companies",
    highlights: [
      "Reduced a data consolidation process from 6 hours to 10–30 minutes, gathering data from 50+ cash register terminals across Brigada businesses into a central data warehouse for analytics.",
      "Worked with cross-functional teams to identify system bottlenecks and improve business processes.",
    ],
  },
  {
    tenure: "May 2022 – Jul 2022",
    name: "Intern",
    company: "Brigada Group of Companies",
    highlights: [
      "Built a Visitor Management System for pandemic health protocols, enabling visitor tracking and supporting physical distancing.",
    ],
  },
];

export const skills = [
  { name: "Backend", description: ".NET (C#), REST APIs, query optimization" },
  { name: "Frontend", description: "Angular, Next.js" },
  { name: "Databases", description: "SQL Server, PostgreSQL" },
  {
    name: "AI integrations",
    description: "Vapi voice agents, backend pricing tools, Google Chat handoffs",
  },
];
