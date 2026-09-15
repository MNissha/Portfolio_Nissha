import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              >
                MyPortfolio
              </a>
            </div>

            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <ul className="md:hidden py-4 space-y-3 border-t border-gray-100">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header> */}

      <Header />

      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== ABOUT SECTION ===== */}
      {/* <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              I’m a creative developer with a background in Multimedia
              Computing, passionate about turning ideas into meaningful,
              engaging, and user-friendly digital experiences. My interests lie
              at the intersection of UI/UX design, full-stack development, and
              data. I enjoy combining creative thinking with technical skills to
              design intuitive interfaces, build functional applications, and
              make sense of data through visualisation. My technical foundation
              includes HTML, CSS, JavaScript, MongoDB, SQL, C#, and React, along
              with experience working with tools and technologies such as Unity,
              Power Platform, Copilot Studio, n8n, and data visualisation
              libraries. Currently, I’m expanding my knowledge in Data
              Analytics, UI/UX Design, and Data Visualisation, while continuing
              to strengthen my development skills and explore new technologies.
              Curious by nature. Creative by mindset. Always learning, always
              building. 🚀
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
      </section> */}
      <About />

      {/* ===== PROJECTS SECTION ===== */}
      <Projects />

      {/* ===== SKILLS SECTION ===== */}
      {/* <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "React", level: "70%", color: "bg-blue-500" },
              { name: "JavaScript", level: "85%", color: "bg-yellow-500" },
              { name: "Tailwind CSS", level: "80%", color: "bg-cyan-500" },
              { name: "Node.js", level: "70%", color: "bg-green-500" },
              { name: "HTML/CSS", level: "95%", color: "bg-orange-500" },
              { name: ".Net", level: "70%", color: "bg-blue-600" },
              { name: "Git/GitHub", level: "85%", color: "bg-gray-700" },
              { name: "Figma", level: "90%", color: "bg-purple-500" },
            ].map((skill, index) => (
              <div key={index} className="text-center">
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
      </section> */}
      <Skills />

      {/* ===== CONTACT SECTION ===== */}
      <Contact />

      {/* ===== FOOTER ===== */}
      {/* <footer className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 MyPortfolio. Built with React & Tailwind CSS
          </p>
        </div>
      </footer> */}
      <Footer />
    </>
  );
}

export default App;

// // this is html file (whatever shows on the UI)
// // components
// // if we create the component in different file, we should import here - then onlt will appear on the ui
