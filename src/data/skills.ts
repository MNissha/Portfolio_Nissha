import { skillSchema, type Skill } from "../types/skill.js";

const rawSkills: Skill[] = [
  { name: "React", level: "70%", color: "bg-blue-500" },
  { name: "JavaScript", level: "85%", color: "bg-yellow-500" },
  { name: "Tailwind CSS", level: "80%", color: "bg-cyan-500" },
  { name: "Node.js", level: "70%", color: "bg-green-500" },
  { name: "HTML/CSS", level: "95%", color: "bg-orange-500" },
  { name: ".Net", level: "70%", color: "bg-blue-600" },
  { name: "Git/GitHub", level: "85%", color: "bg-gray-700" },
  { name: "Figma", level: "90%", color: "bg-purple-500" },
];

export const skills: Skill[] = skillSchema.array().parse(rawSkills);
