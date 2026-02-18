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
    slug: "snake-game",
    title: "Snake Game",
    summary:
      "Python ve Pygame ile gelistirilmis modern Snake oyunu. Klasik nostaljiyi akici hareket, sade UI ve genisletilebilir yapiyla sunar.",
    lang: "tr",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Snake-Game.git",
  },
  {
    slug: "smart-data-analyzer",
    title: "Smart Data Analyzer",
    summary:
      "Streamlit tabanli interaktif veri kesif uygulamasi. CSV/Excel/JSON yukle, otomatik analiz ve grafikler olustur, PDF rapor disari aktar.",
    lang: "tr",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/furkandalyan/SmartDataAnalyzer.git",
  },
  {
    slug: "borsaapp",
    title: "BorsaApp",
    summary:
      "Turk hisseleri icin teknik analiz platformu. RSI, MACD, Bollinger Bands ve daha fazlasi.",
    lang: "tr",
    tags: ["Django", "Finance"],
    github: "https://github.com/furkandalyan/BorsaApp.git",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    summary:
      "Python ile gelistirilmis Tic-Tac-Toe oyunu. CLI ve Tkinter GUI, coklu oyuncu ve AI modlari, tema degistirme, tam ekran ve CSV disari aktarma.",
    lang: "tr",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Tic-Tac-Toe.git",
  },
  {
    slug: "fast-writing-game",
    title: "Fast Writing Game",
    summary:
      "Yazi hizini ve dogrulugunu gelistiren yazma uygulamasi. Rastgele cumleler, anlik hata vurgusu, skor tablosu ve surekli yazma modu.",
    lang: "tr",
    tags: ["Python", "GUI"],
    github: "https://github.com/furkandalyan/FastWriting-Game.git",
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
  {
    slug: "snake-game",
    title: "Snake Game",
    summary:
      "Modern Snake Game built with Python and Pygame. Nostalgic gameplay with smooth movement, simple UI, and an expandable code structure.",
    lang: "en",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Snake-Game.git",
  },
  {
    slug: "smart-data-analyzer",
    title: "Smart Data Analyzer",
    summary:
      "Interactive data exploration app built with Python and Streamlit. Upload CSV/Excel/JSON, auto-generate insights and charts, export a PDF report.",
    lang: "en",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/furkandalyan/SmartDataAnalyzer.git",
  },
  {
    slug: "borsaapp",
    title: "BorsaApp",
    summary:
      "Django-based platform for technical analysis of Turkish stocks. Includes RSI, MACD, Bollinger Bands, and more.",
    lang: "en",
    tags: ["Django", "Finance"],
    github: "https://github.com/furkandalyan/BorsaApp.git",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    summary:
      "Tic-Tac-Toe game app built with Python. Offers CLI and Tkinter GUI, multiplayer and AI modes, theme switching, fullscreen support, and CSV export.",
    lang: "en",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Tic-Tac-Toe.git",
  },
  {
    slug: "fast-writing-game",
    title: "Fast Writing Game",
    summary:
      "Typing practice app with a modern GUI. Random sentences, real-time mistake highlighting, best-time scoreboard, and continuous writing mode.",
    lang: "en",
    tags: ["Python", "GUI"],
    github: "https://github.com/furkandalyan/FastWriting-Game.git",
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