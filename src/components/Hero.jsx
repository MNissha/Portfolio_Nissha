import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                MNissha
              </span>
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
              Aspiring UI/UX Designer | Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={heroImg}
                alt="Hero"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-200 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
