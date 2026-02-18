export type Project = {
  slug: string;
  title: string;
  summary: string;
  lang: "tr" | "en";
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Örnek Proje",
    summary: "Kýsa açýklama: Bu proje neyi çözüyor?",
    lang: "tr",
    tags: ["SaaS", "Django"],
  },
  {
    slug: "sample-project",
    title: "Sample Project",
    summary: "Short summary: What does this project solve?",
    lang: "en",
    tags: ["SaaS", "Django"],
  },
];

export function getProjectsByLang(lang: "tr" | "en") {
  return projects.filter((project) => project.lang === lang);
}

export function getProject(lang: "tr" | "en", slug: string) {
  return projects.find(
    (project) => project.lang === lang && project.slug === slug
  );
}
