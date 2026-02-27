export type Project = {
  slug: string;
  title: string;
  summary: string;
  lang: "tr" | "en";
  tags?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Örnek Proje",
    summary: "Kısa açıklama: Bu proje neyi çözer?",
    lang: "tr",
    tags: ["SaaS", "Django"],
  },
  {
    slug: "flappy-bird-game",
    title: "Flappy Bird Game",
    summary: "Pygame ile geliştirilmiş Flappy Bird klonu. Özel tasarımlar, PNG skor göstergesi, akıcı kontroller ve kalıcı en yüksek skor sistemi.",
    lang: "tr",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Flappy-Bird.git",
  },
  {
    slug: "perfect-timer-game",
    title: "Perfect Timer Game",
    summary: "Python ve Tkinter ile geliştirilmiş refleks oyunu. Hedef süre belirle ve tam anında durdur: ne erken ne geç, sadece zamanlama ustalığı.",
    lang: "tr",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Perfect-Timer-Game.git",
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    summary: "Python ve Pygame ile geliştirilmiş modern Snake oyunu. Klasik nostaljiyi akıcı hareket, sade UI ve genişletilebilir yapıyla sunar.",
    lang: "tr",
    tags: ["Python", "Pygame"],
    github: "https://github.com/furkandalyan/Snake-Game.git",
  },
  {
    slug: "smart-data-analyzer",
    title: "Smart Data Analyzer",
    summary: "Streamlit tabanlı interaktif veri keşif uygulaması. CSV/Excel/JSON yükle, otomatik analiz ve grafikler oluştur, PDF rapor dışarı aktar.",
    lang: "tr",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/furkandalyan/SmartDataAnalyzer.git",
  },
  {
    slug: "borsaapp",
    title: "BorsaApp",
    summary: "Türk hisseleri için teknik analiz platformu. RSI, MACD, Bollinger Bands ve daha fazlası.",
    lang: "tr",
    tags: ["Django", "Finance"],
    github: "https://github.com/furkandalyan/BorsaApp.git",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    summary: "Python ile geliştirilmiş Tic-Tac-Toe oyunu. CLI ve Tkinter GUI, çoklu oyuncu ve AI modları, tema değiştirme, tam ekran ve CSV dışarı aktarma.",
    lang: "tr",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/furkandalyan/Tic-Tac-Toe.git",
  },
  {
    slug: "fast-writing-game",
    title: "Fast Writing Game",
    summary: "Yazı hızını ve doğruluğunu geliştiren yazma uygulaması. Rastgele cümleler, anlık hata vurgusu, skor tablosu ve sürekli yazma modu.",
    lang: "tr",
    tags: ["Python", "GUI"],
    github: "https://github.com/furkandalyan/FastWriting-Game.git",
  },
  {
    slug: "pdf-tool-box",
    title: "PDF TOOL BOX",
    summary: "PDF yönetimi için masaüstü uygulaması. Birleştirme, bölme, sayfa silme, toplu şifreleme/döndürme, OCR ve metadata düzenleme.",
    lang: "tr",
    tags: ["Python", "Desktop", "OCR"],
    github: "https://github.com/furkandalyan/PDF-TOOL-BOX.git",
  },
  {
    slug: "aes-locker",
    title: "AES Locker",
    summary: "Modern dosya/klasör şifreleme aracı. AES-256, sürükle-bırak GUI, RSA hibrit destek, anahtar süreleri ve çok dilli arayüz.",
    lang: "tr",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/AESLocker-.git",
  },
  {
    slug: "password-vault",
    title: "Password Vault",
    summary: "AES-256 şifreleme, kategori düzeni, güç metre, QR paylaşım ve modern dark/light arayüzlü parola yöneticisi.",
    lang: "tr",
    tags: ["Python", "Security", "Desktop"],
    github: "https://github.com/furkandalyan/Password-Vault.git",
  },
  {
    slug: "sheet-sweep",
    title: "Sheet Sweep",
    summary: "Excel temizleme ve dönüştürme aracı. Sütun seçimi, boş satır silme, adları normalize etme, tekrar temizleme, format standardizasyonu.",
    lang: "tr",
    tags: ["Python", "Desktop", "Data"],
    github: "https://github.com/furkandalyan/Sheet-Sweep.git",
  },
  {
    slug: "qr-code-generator-scanner",
    title: "QR Code Generator And Scanner",
    summary: "QR kod üretme ve tarama uygulaması. Metin/URL ile QR oluştur, renk/boyut özelleştir, PNG/JPG kaydet, webcam ile tara.",
    lang: "tr",
    tags: ["Python", "Desktop", "QR"],
    github: "https://github.com/furkandalyan/QR-Code-Generator-Scanner.git",
  },
  {
    slug: "borsa-v2",
    title: "borsa-v2",
    summary: "Django tabanlı finans analiz web app. yfinance veri çekimi, Plotly grafikler, teknik indikatörler, BIST sembol kolaylığı, izleme listesi ve alarmlar.",
    lang: "tr",
    tags: ["Django", "Finance", "Data"],
    github: "https://github.com/furkandalyan/borsa-v2.git",
  },
  {
    slug: "turkey-earthquake",
    title: "TurkeyEarthquake",
    summary: "Django tabanlı deprem veri platformu. Veri toplama, analiz ve görselleştirme; istatistik, tahmin ve bölgesel trend sayfaları.",
    lang: "tr",
    tags: ["Django", "Data", "Visualization"],
    github: "https://github.com/furkandalyan/TurkeyEarthquake.git",
  },
  {
    slug: "bug-tracking-system",
    title: "BugTrackingSystem",
    summary: "Django tabanlı bug tracking sistemi. Rol bazlı görünümler, bug kaydı oluşturma/güncelleme ve yönetim paneli.",
    lang: "tr",
    tags: ["Django", "Web", "Productivity"],
    github: "https://github.com/furkandalyan/BugTrackingSystem.git",
  },
  {
    slug: "order-system",
    title: "Order System",
    summary: "Django tabanlı e-ticaret/marketplace. Alıcı-satıcı rolleri, ürün listeleme, sipariş akışı, analitik ve AI önerileri.",
    lang: "tr",
    tags: ["Django", "E-Commerce", "Marketplace"],
    github: "https://github.com/furkandalyan/OrderSystem.git",
  },
  {
    slug: "tempus-naviga",
    title: "Tempus Naviga",
    summary: "Zaman yönetimi ve üretkenlik odaklı, görev planlama, raporlama ve topluluk modülleri sunan web uygulaması.",
    lang: "tr",
    tags: ["Web", "Productivity", "Community"],
    github: "https://github.com/furkandalyan/tempus-naviga.git",
  },
  {
    slug: "surecim",
    title: "Surecim",
    summary: "Türkiye'deki resmi işlemleri adım adım takip etmeyi sağlayan web uygulaması; belge, süre, maliyet ve resmi bağlantı detaylarıyla ilerleme takibi.",
    lang: "tr",
    tags: ["Web", "Productivity", "GovTech"],
    github: "https://github.com/furkandalyan/surecim.git",
    demo: "https://surecim.mahirfurkandalyan.com/",
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
  {
    slug: "surecim",
    title: "Surecim",
    summary:
      "Web app for step-by-step tracking of official procedures in Turkey, with documents, time, cost, and official links plus progress tracking.",
    lang: "en",
    tags: ["Web", "Productivity", "GovTech"],
    github: "https://github.com/furkandalyan/surecim.git",
    demo: "https://surecim.mahirfurkandalyan.com/",
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
