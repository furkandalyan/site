import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";

export async function getMdxContent(filePath: string) {
  const source = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(source);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });

  return { content: mdxContent, frontmatter: data };
}

export function getProjectMdxPath(lang: "tr" | "en", slug: string) {
  return path.join(
    process.cwd(),
    "src",
    "content",
    "projects",
    lang,
    `${slug}.mdx`
  );
}
