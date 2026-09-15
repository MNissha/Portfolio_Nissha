import { skills } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">
                {skill.name}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`${skill.color} h-2.5 rounded-full transition-all duration-1000`}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
