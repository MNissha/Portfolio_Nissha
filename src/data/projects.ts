import { projectSchema, type Project } from "../types/project.js";

const rawProjects: Project[] = [
  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",
    desc: "Full-featured online store with shopping cart, user authentication, and payment integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "from-purple-500 to-pink-500",
    icon: "🛒",
  },
  {
    slug: "pawsar-ar-pet-adoption-app",
    title: "PawsAR: AR Pet Adoption App",
    desc: "Marker-based AR application allowing users to view 3D pets in real-world environments for adoption.",
    tech: ["Unity", "C#", "Vuforia", "AR Foundation", "ARCore"],
    color: "from-blue-500 to-cyan-500",
    icon: "🐾",
  },
  {
    slug: "carlo-rino-website-redesign-ui-ux",
    title: "Carlo Rino Website Redesign – UI/UX",
    desc: "Complete UI/UX redesign of Carlo Rino website with improved user experience and modern visual design.",
    tech: ["User Research", "Wireframing", "Prototyping", "UI/UX", "Visual Design"],
    color: "from-green-500 to-teal-500",
    icon: "🎨",
  },
];

export const projects: Project[] = projectSchema.array().parse(rawProjects);
