function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4">Here are some of my recent works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* DRY: Projects data */}
          {[
            {
              title: "E-Commerce Website",
              desc: "Full-featured online store with shopping cart, user authentication, and payment integration.",
              tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
              color: "from-purple-500 to-pink-500",
              icon: "🛒",
            },
            {
              title: "PawsAR: AR Pet Adoption App",
              desc: "Marker-based AR application allowing users to view 3D pets in real-world environments for adoption.",
              tech: ["Unity", "C#", "Vuforia", "AR Foundation", "ARCore"],
              color: "from-blue-500 to-cyan-500",
              icon: "🐾",
            },
            {
              title: "Carlo Rino Website Redesign – UI/UX",
              desc: "Complete UI/UX redesign of Carlo Rino website with improved user experience and modern visual design.",
              tech: [
                "User Research",
                "Wireframing",
                "Prototyping",
                "UI/UX",
                "Visual Design",
              ],
              color: "from-green-500 to-teal-500",
              icon: "🎨",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{project.icon}</div>
              <div
                className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.color} mb-4`}
              ></div>
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
