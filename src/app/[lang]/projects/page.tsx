import Link from "next/link";
import { getProjectsByLang } from "@/src/lib/projects";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const projects = getProjectsByLang(lang === "tr" ? "tr" : "en");

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
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={`${project.lang}-${project.slug}`}
            href={`/${lang}/projects/${project.slug}`}
            className="group relative flex flex-col h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="p-8 flex flex-col flex-grow relative z-10">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
