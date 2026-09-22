function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            {/* I'm a full-stack developer with a background in Multimedia
            Computing, passionate about turning ideas into meaningful,
            user-friendly digital experiences. My two most recent projects
            show the range of how I build: JomDekan, a campus platform for
            Malaysian university students built with a five-person team,
            where I owned the Forum and Favorites modules, several admin
            components, and fixed the CI pipeline issues that kept our
            builds green; and Bean & Leaf, a solo full-stack e-commerce
            platform for a coffee and matcha shop, where I designed the JWT
            authentication, modelled the relational schema, and orchestrated
            a four-service Docker Compose stack. It's local-only for now and
            not yet deployed, but the engineering behind it — multi-stage
            builds, health checks, and auto-seeding — reflects how I like to
            build. Alongside this, I've also built PawsAR, an AR
            pet-adoption app in Unity, and redesigned the Carlo Rino
            e-commerce site in Figma — reminders that my interests stretch
            beyond the backend. My technical foundation includes React,
            Node.js, Express, PostgreSQL, Docker, and TypeScript, alongside
            Unity, Figma, and Git. Currently, I'm expanding my knowledge in
            UI/UX design and Data Analytics while continuing to sharpen my
            backend engineering skills. Curious by nature. Creative by
            mindset. Always learning, always building. 🚀 */}
            I'm a full-stack developer with a background in Multimedia
            Computing, passionate about building meaningful, user-friendly
            digital experiences. I enjoy turning ideas into functional products,
            from developing JomDekan, a campus platform built with a five-person
            team, to creating Bean & Leaf, a solo full-stack e-commerce platform
            where I explored authentication, database design, and containerised
            development with Docker. Beyond web development, I've also built
            PawsAR, an AR pet-adoption app in Unity, and applied UI/UX through
            my Carlo Rino e-commerce redesign in Figma. My technical foundation
            includes React, Node.js, Express, PostgreSQL, Docker, TypeScript,
            Unity, Figma, and Git. I'm currently deepening my skills in backend
            engineering, UI/UX design, and Data Analytics, while continuing to
            learn, experiment, and build. Curious by nature. Creative by
            mindset. Always learning, always building. 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">3+</div>
              <div className="text-sm text-gray-600">Years Coding</div>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-indigo-600">4</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">12+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-indigo-600">Open</div>
              <div className="text-sm text-gray-600">For Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
