export default async function Contact({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-16 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          {isTr ? "İletişim" : "Contact"}
        </h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          {isTr
            ? "Projeler, iş birlikleri veya sadece merhaba demek için aşağıdaki kanallardan bana ulaşabilirsiniz."
            : "Feel free to reach out for projects, collaborations, or just to say hello through the channels below."}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Email Card */}
        <a
          href="mailto:dmf.furkan@gmail.com"
          className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">
            dmf.furkan@gmail.com
          </p>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/furkandalyan"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
          <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">
            @furkandalyan
          </p>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://tr.linkedin.com/in/mahir-furkan-dalyan-316482320"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
          <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">
            Mahir Furkan Dalyan
          </p>
        </a>
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">
          {isTr ? "Birlikte Çalışalım" : "Let's Work Together"}
        </h3>
        <p className="text-white/60 max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
          {isTr
            ? "Yeni bir proje fikriniz mi var? Veya mevcut sisteminizi ölçeklendirmek mi istiyorsunuz? Detayları konuşmak için her zaman açığım."
            : "Have a new project idea? Or looking to scale your existing system? I'm always open to discussing details."}
        </p>
        <a
          href="mailto:dmf.furkan@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10 relative z-10"
        >
          {isTr ? "Mesaj Gönder" : "Send Message"}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </a>
      </div>
    </div>
  );
}
