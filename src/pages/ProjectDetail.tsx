import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import NotFound from "./NotFound.jsx";

const LOCAL_VIDEO_FILE = /^\/.*\.(mp4|webm|mov)$/i;

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const details = project.details;
  const meta = details
    ? [details.role, details.year, details.duration].filter(Boolean)
    : [];
  const links = details?.links;
  const hasLinks =
    links &&
    (links.live ||
      links.repo ||
      (links.repos && links.repos.length > 0) ||
      links.figma ||
      links.video);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
        >
          <span aria-hidden>←</span> Back to Projects
        </Link>
      </div>

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

      {details && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          {meta.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-gray-500">
              {meta.map((value, idx) => (
                <span key={value} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-gray-300">·</span>}
                  {value}
                </span>
              ))}
            </div>
          )}

          {details.overview && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {details.overview}
              </p>
            </div>
          )}

          {details.highlights && details.highlights.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Highlights
              </h2>
              <ul className="space-y-3">
                {details.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}
                    ></span>
                    <span className="text-gray-600 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details.video && (details.video.thumbnail || details.video.url) && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Video</h2>
              {details.video.url && LOCAL_VIDEO_FILE.test(details.video.url) ? (
                <div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={details.video.thumbnail}
                    className="w-full max-h-[500px] object-contain"
                  >
                    <source src={details.video.url} />
                  </video>
                </div>
              ) : details.video.url ? (
                <a
                  href={details.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block rounded-lg border border-gray-200 bg-gray-50 overflow-hidden group"
                >
                  {details.video.thumbnail && (
                    <img
                      src={details.video.thumbnail}
                      alt={details.video.caption ?? "Video thumbnail"}
                      className="w-full h-auto"
                    />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center text-2xl group-hover:bg-black/80 transition-colors">
                      ▶
                    </span>
                  </span>
                </a>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                  <img
                    src={details.video.thumbnail}
                    alt={details.video.caption ?? "Video thumbnail"}
                    className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
                  />
                </div>
              )}
              {details.video.caption && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  {details.video.caption}
                </p>
              )}
            </div>
          )}

          {details.stack && details.stack.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {details.stack.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {details.beforeAfter && details.beforeAfter.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Before &amp; After
              </h2>
              <div className="space-y-10">
                {details.beforeAfter.map((pair) => (
                  <div key={pair.after}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative aspect-video rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                        <img
                          src={pair.before}
                          alt={
                            pair.caption
                              ? `${pair.caption} — before`
                              : "Before"
                          }
                          className="w-full h-full object-contain"
                        />
                        <span className="absolute top-2 left-2 bg-gray-900/70 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Before
                        </span>
                      </div>
                      <div className="relative aspect-video rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                        <img
                          src={pair.after}
                          alt={
                            pair.caption ? `${pair.caption} — after` : "After"
                          }
                          className="w-full h-full object-contain"
                        />
                        <span className="absolute top-2 left-2 bg-purple-600/80 text-white text-xs px-2 py-1 rounded-full font-medium">
                          After
                        </span>
                      </div>
                    </div>
                    {pair.caption && (
                      <p className="text-center text-sm text-gray-500 mt-3">
                        {pair.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {details.gallery && details.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Gallery
              </h2>
              <div className="columns-1 md:columns-2 gap-4">
                {details.gallery.map((item) => (
                  <div key={item.src} className="break-inside-avoid mb-4">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.caption ?? project.title}
                        className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-center text-sm text-gray-500 mt-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {details.learnings && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Learnings
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {details.learnings}
              </p>
            </div>
          )}

          {hasLinks && (
            <div className="flex flex-wrap gap-4">
              {links?.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200`}
                >
                  Live Site
                </a>
              )}
              {links?.repo && (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  Repository
                </a>
              )}
              {links?.repos?.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  {repo.label} Repo
                </a>
              ))}
              {links?.figma && (
                <a
                  href={links.figma}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  Figma
                </a>
              )}
              {links?.video && (
                <a
                  href={links.video}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  Video
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default ProjectDetail;
