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
            I’m a creative developer with a background in Multimedia Computing,
            passionate about turning ideas into meaningful, engaging, and
            user-friendly digital experiences. My interests lie at the
            intersection of UI/UX design, full-stack development, and data. I
            enjoy combining creative thinking with technical skills to design
            intuitive interfaces, build functional applications, and make sense
            of data through visualisation. My technical foundation includes
            HTML, CSS, JavaScript, MongoDB, SQL, C#, and React, along with
            experience working with tools and technologies such as Unity, Power
            Platform, Copilot Studio, n8n, and data visualisation libraries.
            Currently, I’m expanding my knowledge in Data Analytics, UI/UX
            Design, and Data Visualisation, while continuing to strengthen my
            development skills and explore new technologies. Curious by nature.
            Creative by mindset. Always learning, always building. 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">3+</div>
              <div className="text-sm text-gray-600">Years Learning</div>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-indigo-600">3+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">5+</div>
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
