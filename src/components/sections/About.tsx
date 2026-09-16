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
            I'm a full-stack developer with a background in Multimedia
            Computing, passionate about turning ideas into meaningful,
            user-friendly digital experiences. My work sits at the
            intersection of UI/UX design, full-stack development, and data. I
            build production-grade web applications with React, TypeScript,
            and Node — with a particular focus on authentication, data
            modelling, and clean layered architecture. My most recent
            project, JomDekan, is a campus platform for Malaysian university
            students featuring JWT auth with refresh-token rotation,
            PostgreSQL with 31 versioned migrations, and a full admin
            moderation portal with audit logging. Alongside full-stack work,
            I have hands-on experience in AR development (PawsAR, my
            final-year project, built in Unity with Vuforia and voice NLP)
            and UI/UX design (a full redesign of the Carlo Rino e-commerce
            site). My technical foundation includes HTML, CSS, JavaScript,
            TypeScript, C#, .NET, SQL, and React, along with experience using
            Unity, Figma, and Git. Currently, I'm expanding my knowledge in
            UI/UX design and Data Analytics while continuing to strengthen
            my backend engineering skills. Curious by nature. Creative by
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
