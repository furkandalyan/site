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
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {lang === "tr" ? "Projelerim" : "My Projects"}
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={`${project.lang}-${project.slug}`}
            className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-white/60">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/40">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link
              href={`/${lang}/projects/${project.slug}`}
              className="mt-6 inline-block text-sm text-white/80 hover:text-white transition"
            >
              {lang === "tr" ? "Read More" : "Read More"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
