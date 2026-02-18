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

      <header className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags?.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
          {project.summary}
        </p>
      </header>

      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl prose-img:shadow-2xl prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
        {content}
      </article>
    </div>
  );
}
