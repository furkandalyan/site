import Link from "next/link";
import { getProjectsByLang } from "@/src/lib/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const projects = getProjectsByLang(lang === "tr" ? "tr" : "en");

  return (
    <div className="space-y-16">
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold">
          {lang === "tr" ? "Mahir Furkan Dalyan" : "Mahir Furkan Dalyan"}
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          {lang === "tr"
            ? "Yazılım geliştirici, ürün inşa edici."
            : "Software developer, product builder."}
        </p>
      </div>

      <section className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {lang === "tr" ? "Projeler" : "Projects"}
          </h2>
          <Link
            href={`/${lang}/projects`}
            className="text-sm text-white/70 hover:text-white transition"
          >
            {lang === "tr" ? "Tümünü gör" : "View all"}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={`${project.lang}-${project.slug}`}
              className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
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
      </section>
    </div>
  );
}
