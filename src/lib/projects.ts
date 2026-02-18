export type Project = {
  slug: string;
  title: string;
  summary: string;
  lang: "tr" | "en";
  tags?: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Örnek Proje",
    summary: "Kısa açıklama: Bu proje neyi çözüyor?",
    lang: "tr",
    tags: ["SaaS", "Django"],
  },
  {
    slug: "flappy-bird-game",
    title: "Flappy Bird Game",
    summary:
      "Pygame ile geliştirilmiş Flappy Bird klonu. Özel tasarımlar, PNG skor göstergesi, akıcı kontroller ve kalıcı en yüksek skor sistemi.",
    lang: "tr",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Flappy-Bird.git",
  },
  {
    slug: "sample-project",
    title: "Sample Project",
    summary: "Short summary: What does this project solve?",
    lang: "en",
    tags: ["SaaS", "Django"],
  },
  {
    slug: "flappy-bird-game",
    title: "Flappy Bird Game",
    summary:
      "Flappy Bird clone built with Python and Pygame. Custom assets, PNG score display, smooth controls, and persistent high score system.",
    lang: "en",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Flappy-Bird.git",
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
