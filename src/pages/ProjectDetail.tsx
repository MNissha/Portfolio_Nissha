import { useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import NotFound from "./NotFound.jsx";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-5xl mb-4">{project.icon}</div>
        <div
          className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.color} mb-4`}
        ></div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {project.title}
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
