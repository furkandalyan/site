import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="relative mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur opacity-20 animate-pulse"></div>
        <div className="relative px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 backdrop-blur-sm">
          {isTr ? "Portfolyoma Hoş Geldiniz" : "Welcome to my Portfolio"}
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent max-w-4xl">
        {isTr 
          ? "Fikirleri Dijital Gerçekliğe Dönüştürüyorum" 
          : "Turning Ideas into Digital Reality"}
      </h1>

      <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed font-light">
        {isTr
          ? "Modern web teknolojileri ve ölçeklenebilir sistemler ile kullanıcı odaklı ürünler geliştiriyorum."
          : "Building user-centric products with modern web technologies and scalable systems."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href={`/${lang}/projects`}
          className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2"
        >
          {isTr ? "Projelerimi İncele" : "View My Projects"}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
        
        <Link
          href={`/${lang}/about`}
          className="group px-8 py-4 bg-white/5 text-white rounded-full font-semibold text-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          {isTr ? "Hakkımda" : "About Me"}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"><path d="M20 6 9 17l-5-5"/></svg>
        </Link>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Tech Stack Icons / Logos could go here - using text for now */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-white">Next.js</span>
          <span className="text-xs text-white/50">Framework</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-white">Python</span>
          <span className="text-xs text-white/50">Language</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-white">Django</span>
          <span className="text-xs text-white/50">Backend</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-white">Flutter</span>
          <span className="text-xs text-white/50">Mobile</span>
        </div>
      </div>
    </div>
  );
}
