import Image from "next/image";
import Link from "next/link";
import { getProjectsByLang } from "@/src/lib/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";
  const liveProjects = getProjectsByLang(lang).filter((project) => project.demo);

  const techCategories = [
    {
      title: isTr ? "Backend & Mimari" : "Backend & Architecture",
      description: isTr 
        ? "Güçlü, ölçeklenebilir ve güvenli sunucu tarafı sistemler." 
        : "Robust, scalable, and secure server-side systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      mainTech: "Python & Django",
      skills: [
        "Django ORM", "DRF (Rest Framework)", "Role-based Auth", 
        "PostgreSQL", "SQLite", "Admin Panel Customization"
      ]
    },
    {
      title: isTr ? "Mobil Geliştirme" : "Mobile Development",
      description: isTr 
        ? "Akıcı, cross-platform ve kullanıcı odaklı mobil deneyimler." 
        : "Fluid, cross-platform, and user-centric mobile experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      ),
      mainTech: "Flutter (Dart)",
      skills: [
        "State Management", "REST API Integration", "Auth Logic", 
        "Responsive UI", "Custom Widgets"
      ]
    },
    {
      title: isTr ? "Frontend & UI" : "Frontend & UI",
      description: isTr 
        ? "Modern, reaktif ve estetik web arayüzleri." 
        : "Modern, reactive, and aesthetic web interfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 16v.01"/><path d="M12 12v.01"/><path d="M12 17v.01"/><path d="M12 7v.01"/></svg>
      ),
      mainTech: "Next.js & React",
      skills: [
        "Tailwind CSS", "Component Architecture", "Responsive Design", 
        "HTML/CSS/JS", "Premium UI/UX"
      ]
    },
    {
      title: isTr ? "DevOps & Deployment" : "DevOps & Deployment",
      description: isTr 
        ? "Sürekli entegrasyon ve production ortamı yönetimi." 
        : "Continuous integration and production environment management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
      ),
      mainTech: "Render & Cloud",
      skills: [
        "Git & GitHub", "CI/CD Pipelines", "DNS & Domain Management", 
        "Cloudflare", "Auto Deploy"
      ]
    },
    {
      title: isTr ? "Temel & Geçmiş" : "Roots & Foundation",
      description: isTr 
        ? "Algoritmik düşünce yapısının temelleri." 
        : "The foundations of algorithmic thinking.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 2-2v-3"/><path d="m8 18-2-2v-3"/><path d="M4 10h16"/><path d="M4 6h16"/><path d="M4 14h16"/><path d="M4 18h16"/></svg>
      ),
      mainTech: "C Family & Unity",
      skills: [
        "C#", "C", "Unity Game Engine", "Algorithms", "System Logic"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      {/* Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-32">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo4.svg"
            alt="Logo"
            width={96}
            height={96}
            className="h-20 w-20"
            priority
          />
        </div>
        <div className="relative mb-8 inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur opacity-20 animate-pulse"></div>
          <div className="relative px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 backdrop-blur-sm">
            {isTr ? "Portfolyoma Hoş Geldiniz" : "Welcome to my Portfolio"}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          {isTr 
            ? "Fikirleri Dijital Gerçekliğe Dönüştürüyorum" 
            : "Turning Ideas into Digital Reality"}
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {isTr
            ? "Modern web teknolojileri, ölçeklenebilir backend sistemleri ve mobil uygulamalar ile uçtan uca çözümler üretiyorum."
            : "Building end-to-end solutions with modern web technologies, scalable backend systems, and mobile applications."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
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

          {liveProjects.length > 0 && (
            <Link
              href={`/${lang}/projects#live-projects`}
              className="group px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              {isTr ? "Canli Projeler" : "Live Projects"}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </Link>
          )}
        </div>
      </div>

      {liveProjects.length > 0 && (
        <section className="w-full max-w-6xl mx-auto mb-24" id="live-projects">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
            <h2 className="text-xl font-light tracking-widest uppercase text-white/80">
              {isTr ? "Canli Projeler" : "Live Projects"}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveProjects.map((project) => (
              <div
                key={`${project.lang}-${project.slug}`}
                className="group relative flex flex-col h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Link
                  href={`/${lang}/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`${project.title} ${isTr ? "detay" : "details"}`}
                />

                <div className="p-7 flex flex-col flex-grow relative z-20 pointer-events-none">
                  <span className="text-[11px] uppercase tracking-widest text-white/50 mb-4">
                    {isTr ? "Canli" : "Live"}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/70 transition-colors line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/15 group-hover:text-white/60 group-hover:bg-white/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.demo && (
                    <div className="mt-6 flex items-center gap-3 pointer-events-auto">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/90 transition-all duration-300 hover:border-white/60 hover:text-white"
                      >
                        {isTr ? "Canli Site" : "Live Site"}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
          <h2 className="text-2xl font-light tracking-widest uppercase text-white/80">
            {isTr ? "Teknoloji Yığını" : "Tech Stack"}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-white/50 text-sm mb-6 h-10">
                  {category.description}
                </p>

                <div className="mb-6">
                  <span className="text-lg font-semibold text-white/90 block mb-3 border-b border-white/10 pb-2">
                    {category.mainTech}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-white/60 border border-white/5 group-hover:border-white/10 group-hover:text-white/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
