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

        {project.github && (
          <div className="flex items-center">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              {lang === "tr" ? "GitHub'da İncele" : "View on GitHub"}
            </a>
          </div>
        )}
      </header>

      <article className="prose prose-invert prose-lg max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
        prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
        prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-white/90
        prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-white prose-a:underline prose-a:decoration-white/30 prose-a:underline-offset-4 hover:prose-a:decoration-white/80 hover:prose-a:text-white prose-a:transition-all
        prose-strong:text-white prose-strong:font-semibold
        prose-code:text-white/90 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-2xl prose-pre:my-8
        prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-12 prose-img:w-full
        prose-li:text-white/70 prose-li:marker:text-white/30 prose-li:my-2
        prose-ul:my-6 prose-ol:my-6
        prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60 prose-blockquote:my-10 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
        prose-hr:border-white/10 prose-hr:my-16">
        {content}
      </article>
    </div>
  );
}
