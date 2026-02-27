import { notFound } from "next/navigation";
import { getMdxContent, getProjectMdxPath } from "@/src/lib/mdx";
import { getProject, getProjectsByLang } from "@/src/lib/projects";
import Link from "next/link";

export async function generateStaticParams() {
  const langs: Array<"tr" | "en"> = ["tr", "en"];
  return langs.flatMap((lang) =>
    getProjectsByLang(lang).map((project) => ({
      lang,
      slug: project.slug,
    }))
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ lang: "tr" | "en"; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProject(lang, slug);
  if (!project) {
    notFound();
  }

  const filePath = getProjectMdxPath(lang, slug);
  const { content } = await getMdxContent(filePath);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link 
        href={`/${lang}/projects`}
        className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
        {lang === "tr" ? "Projelere Dön" : "Back to Projects"}
      </Link>

      <header className="mb-16 border-b border-white/10 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags?.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xl text-white/60 leading-relaxed max-w-3xl mb-8">
          {project.summary}
        </p>


        {(project.demo || project.github) && (
          <div className="flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border border-white/30 text-white/90 hover:text-white hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8"/><path d="M18 13a4 4 0 0 0-7.69-1.5"/><path d="M2 12a6 6 0 0 1 10.33-4"/></svg>
                {lang === "tr" ? "Canlı Site" : "Live Site"}
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                {lang === "tr" ? "GitHub'da İncele" : "View on GitHub"}
              </a>
            )}
          </div>
        )}
      </header>

      <div className="relative mt-6">
        <div
          className="absolute -inset-2 md:-inset-4 rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent blur-2xl opacity-70 pointer-events-none"
          aria-hidden="true"
        ></div>
        <article className="project-content relative max-w-none rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 md:px-10 md:py-12 shadow-2xl shadow-black/30 backdrop-blur-sm">
          {content}
        </article>
      </div>
    </div>
  );
}
