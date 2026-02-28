import Link from "next/link";
import { getProjectsByLang } from "@/src/lib/projects";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const projects = getProjectsByLang(lang === "tr" ? "tr" : "en");
  const liveProjects = projects.filter((project) => project.demo);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          {lang === "tr" ? "Projelerim" : "My Projects"}
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
          {lang === "tr" 
            ? "Fikirlerin gerçeğe dönüştüğü, kod ve tasarımın buluştuğu dijital deneyimler." 
            : "Digital experiences where ideas turn into reality, meeting code and design."}
        </p>

        {liveProjects.length > 0 && (
          <div className="mt-8 flex justify-center">
            <a
              href="#live-projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:text-white"
            >
              {lang === "tr" ? "Canli Projelere Git" : "Jump to Live Projects"}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>
        )}
      </div>

      {liveProjects.length > 0 && (
        <section id="live-projects" className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
            <h2 className="text-xl font-light tracking-widest uppercase text-white/80">
              {lang === "tr" ? "Canli Projeler" : "Live Projects"}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((project) => (
              <div
                key={`${project.lang}-${project.slug}-live`}
                className="group relative flex flex-col h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Link
                  href={`/${lang}/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`${project.title} ${lang === "tr" ? "detay" : "details"}`}
                />

                <div className="p-7 flex flex-col flex-grow relative z-20 pointer-events-none">
                  <span className="text-[11px] uppercase tracking-widest text-white/50 mb-4">
                    {lang === "tr" ? "Canli" : "Live"}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/70 transition-colors line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/15 group-hover:text-white/60 group-hover:bg-white/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.demo && (
                    <div className="mt-6 flex items-center gap-3 pointer-events-auto">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/90 transition-all duration-300 hover:border-white/60 hover:text-white"
                      >
                        {lang === "tr" ? "Canli Site" : "Live Site"}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
        <h2 className="text-xl font-light tracking-widest uppercase text-white/80">
          {lang === "tr" ? "Tum Projeler" : "All Projects"}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={`${project.lang}-${project.slug}`}
            className="group relative flex flex-col h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <Link
              href={`/${lang}/projects/${project.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`${project.title} ${lang === "tr" ? "detay" : "details"}`}
            />
            
            <div className="p-8 flex flex-col flex-grow relative z-20 pointer-events-none">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <span className="text-white/30 group-hover:text-white/80 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors tracking-tight">
                {project.title}
              </h2>
              
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow group-hover:text-white/70 transition-colors line-clamp-3">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/15 group-hover:text-white/60 group-hover:bg-white/10 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags && project.tags.length > 3 && (
                   <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/15 group-hover:text-white/60 group-hover:bg-white/10 transition-all duration-300">
                     +{project.tags.length - 3}
                   </span>
                )}
              </div>

              {project.demo && (
                <div className="mt-6 flex items-center gap-3 pointer-events-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/90 transition-all duration-300 hover:border-white/60 hover:text-white"
                  >
                    {lang === "tr" ? "Canli Site" : "Live Site"}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
