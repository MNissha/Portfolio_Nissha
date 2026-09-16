import { skillSchema, type Skill } from "../types/skill.js";

const rawSkills: Skill[] = [
  { name: "HTML/CSS", level: "95%", color: "bg-orange-500" },
  { name: "JavaScript", level: "85%", color: "bg-yellow-500" },
  { name: "Tailwind CSS", level: "85%", color: "bg-cyan-500" },
  { name: "Git/GitHub", level: "85%", color: "bg-gray-700" },
  { name: "Figma", level: "85%", color: "bg-purple-500" },
  { name: "React", level: "80%", color: "bg-blue-500" },
  { name: "TypeScript", level: "75%", color: "bg-blue-600" },
  { name: "Node.js", level: "75%", color: "bg-green-500" },
  { name: "Express", level: "75%", color: "bg-gray-600" },
  { name: "PostgreSQL", level: "75%", color: "bg-sky-600" },
  { name: ".NET", level: "70%", color: "bg-indigo-600" },
  { name: "C# / Unity", level: "70%", color: "bg-purple-700" },
];

export const skills: Skill[] = skillSchema.array().parse(rawSkills);
