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
    slug: "pdf-tool-box",
    title: "PDF TOOL BOX",
    summary:
      "PDF yonetimi icin masaustu uygulamasi. Birlestirme, bolme, sayfa silme, toplu sifreleme/dondurme, OCR ve metadata duzenleme.",
    lang: "tr",
    tags: ["Python", "Desktop", "OCR"],
    github: "https://github.com/furkandalyan/PDF-TOOL-BOX.git",
  },
  {
    slug: "aes-locker",
    title: "AES Locker",
    summary:
      "Modern dosya/klasor sifreleme araci. AES-256, surukle-birak GUI, RSA hibrit destek, anahtar sureleri ve cok dilli arayuz.",
    lang: "tr",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/AESLocker-.git",
  },
  {
    slug: "password-vault",
    title: "Password Vault",
    summary:
      "AES-256 sifreleme, kategori duzeni, guc metre, QR paylasim ve modern dark/light arayuzlu parola yoneticisi.",
    lang: "tr",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/Password-Vault.git",
  },
  {
    slug: "sheet-sweep",
    title: "Sheet Sweep",
    summary:
      "Excel temizleme ve donusturme araci. Sutun secimi, bos satir silme, adlari normalize etme, tekrar temizleme, format standardizasyonu.",
    lang: "tr",
    tags: ["Python", "Desktop", "Data"],
    github: "https://github.com/furkandalyan/Sheet-Sweep.git",
  },
  {
    slug: "qr-code-generator-scanner",
    title: "QR Code Generator And Scanner",
    summary:
      "QR kod uretme ve tarama uygulamasi. Metin/URL ile QR olustur, renk/boyut ozellestir, PNG/JPG kaydet, webcam ile tara.",
    lang: "tr",
    tags: ["Python", "Desktop", "QR"],
    github: "https://github.com/furkandalyan/QR-Code-Generator-Scanner.git",
  },
  {
    slug: "borsa-v2",
    title: "borsa-v2",
    summary:
      "Django tabanli finans analiz web app. yfinance veri cekimi, Plotly grafikler, teknik indikatorler, BIST sembol kolayligi, izleme listesi ve alarmlar.",
    lang: "tr",
    tags: ["Django", "Finance", "Data"],
    github: "https://github.com/furkandalyan/borsa-v2.git",
  },
  {
    slug: "turkey-earthquake",
    title: "TurkeyEarthquake",
    summary:
      "Django tabanli deprem veri platformu. Veri toplama, analiz ve gorsellestirme; istatistik, tahmin ve bolgesel trend sayfalari.",
    lang: "tr",
    tags: ["Django", "Data", "Visualization"],
    github: "https://github.com/furkandalyan/TurkeyEarthquake.git",
  },
  {
    slug: "bug-tracking-system",
    title: "BugTrackingSystem",
    summary:
      "Django tabanli bug tracking sistemi. Rol bazli gorunumler, bug kaydi olusturma/guncelleme ve yonetim paneli.",
    lang: "tr",
    tags: ["Django", "Web", "Productivity"],
    github: "https://github.com/furkandalyan/BugTrackingSystem.git",
  },
  {
    slug: "order-system",
    title: "Order System",
    summary:
      "Django tabanli e-ticaret/marketplace. Alici-satici rolleri, urun listeleme, siparis akisi, analitik ve AI onerileri.",
    lang: "tr",
    tags: ["Django", "E-Commerce", "Marketplace"],
    github: "https://github.com/furkandalyan/OrderSystem.git",
  },
  {
    slug: "tempus-naviga",
    title: "Tempus Naviga",
    summary:
      "Zaman yonetimi ve uretkenlik odakli, gorev planlama, raporlama ve topluluk modulleri sunan web uygulamasi.",
    lang: "tr",
    tags: ["Web", "Productivity", "Community"],
    github: "https://github.com/furkandalyan/tempus-naviga.git",
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
  {
    slug: "pdf-tool-box",
    title: "PDF TOOL BOX",
    summary:
      "Modern PDF desktop app with a dark UI. Merge, split, delete pages, batch encrypt/rotate, OCR text extraction, and metadata editing.",
    lang: "en",
    tags: ["Python", "Desktop", "OCR"],
    github: "https://github.com/furkandalyan/PDF-TOOL-BOX.git",
  },
  {
    slug: "aes-locker",
    title: "AES Locker",
    summary:
      "User-friendly file/folder encryption tool with AES-256, drag-and-drop GUI, RSA hybrid option, key files, and bilingual UI.",
    lang: "en",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/AESLocker-.git",
  },
  {
    slug: "password-vault",
    title: "Password Vault",
    summary:
      "Modern password manager with AES-256, categories, strength meter, QR sharing, and dark/light GUI.",
    lang: "en",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/Password-Vault.git",
  },
  {
    slug: "sheet-sweep",
    title: "Sheet Sweep",
    summary:
      "Excel cleaner for transforming data. Select columns, remove empty rows, normalize names, dedupe, standardize formats, batch export.",
    lang: "en",
    tags: ["Python", "Desktop", "Data"],
    github: "https://github.com/furkandalyan/Sheet-Sweep.git",
  },
  {
    slug: "qr-code-generator-scanner",
    title: "QR Code Generator And Scanner",
    summary:
      "Generate and scan QR codes. Create from text/URL, customize colors and size, save PNG/JPG, scan via webcam or image.",
    lang: "en",
    tags: ["Python", "Desktop", "QR"],
    github: "https://github.com/furkandalyan/QR-Code-Generator-Scanner.git",
  },
  {
    slug: "borsa-v2",
    title: "borsa-v2",
    summary:
      "Django-based finance analytics app with yfinance data, Plotly charts, indicators, BIST helpers, watchlists, alerts, and analysis pages.",
    lang: "en",
    tags: ["Django", "Finance", "Data"],
    github: "https://github.com/furkandalyan/borsa-v2.git",
  },
  {
    slug: "turkey-earthquake",
    title: "TurkeyEarthquake",
    summary:
      "Django-based earthquake data dashboard with ingestion, analysis, trends, and forecasting views.",
    lang: "en",
    tags: ["Django", "Data", "Visualization"],
    github: "https://github.com/furkandalyan/TurkeyEarthquake.git",
  },
  {
    slug: "bug-tracking-system",
    title: "BugTrackingSystem",
    summary:
      "Django-based bug tracking system with auth, role-based views, and bug workflows.",
    lang: "en",
    tags: ["Django", "Web", "Productivity"],
    github: "https://github.com/furkandalyan/BugTrackingSystem.git",
  },
  {
    slug: "order-system",
    title: "Order System",
    summary:
      "Django-based ecommerce/marketplace with buyer-seller roles, order flow, analytics, and AI recommendations.",
    lang: "en",
    tags: ["Django", "E-Commerce", "Marketplace"],
    github: "https://github.com/furkandalyan/OrderSystem.git",
  },
  {
    slug: "tempus-naviga",
    title: "Tempus Naviga",
    summary:
      "Comprehensive web app for task planning, productivity tracking, and community sharing.",
    lang: "en",
    tags: ["Web", "Productivity", "Community"],
    github: "https://github.com/furkandalyan/tempus-naviga.git",
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
