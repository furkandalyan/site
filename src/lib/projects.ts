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
    title: "Ornek Proje",
    summary: "Kisa aciklama: Bu proje neyi cozer?",
    lang: "tr",
    tags: ["SaaS", "Django"],
  },
  {
    slug: "flappy-bird-game",
    title: "Flappy Bird Game",
    summary:
      "Pygame ile gelistirilmis Flappy Bird klonu. Ozel tasarimlar, PNG skor gostergesi, akici kontroller ve kalici en yuksek skor sistemi.",
    lang: "tr",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Flappy-Bird.git",
  },
  {
    slug: "perfect-timer-game",
    title: "Perfect Timer Game",
    summary:
      "Python ve Tkinter ile gelistirilmis refleks oyunu. Hedef sure belirle ve tam aninda durdur: ne erken ne gec, sadece zamanlama ustaligi.",
    lang: "tr",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Perfect-Timer-Game.git",
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
  {
    slug: "perfect-timer-game",
    title: "Perfect Timer Game",
    summary:
      "Precision reflex game built with Python and Tkinter. Set a target time and stop the timer at the exact moment. No early clicks. No late ones.",
    lang: "en",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Perfect-Timer-Game.git",
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