import { notFound } from "next/navigation";
import { getMdxContent, getProjectMdxPath } from "@/src/lib/mdx";
import { getProject, getProjectsByLang } from "@/src/lib/projects";

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
    <article className="prose prose-invert max-w-3xl">
      {content}
    </article>
  );
}
