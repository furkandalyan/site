import Image from "next/image";

export default async function About({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo4.svg"
            alt="Logo"
            width={80}
            height={80}
            className="h-20 w-20"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          Mahir Furkan Dalyan
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
          {isTr
            ? "Computer Engineering Student | Product Builder | Tech Entrepreneur (in progress)"
            : "Computer Engineering Student | Product Builder | Tech Entrepreneur (in progress)"}
        </p>
        <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80">
          Founder Mindset
        </div>
      </header>

      <div className="space-y-24">
        {/* Perspective Section */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 to-transparent rounded-full hidden md:block"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {isTr ? "Bakış Açım" : "My Perspective"}
          </h2>
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              {isTr
                ? "Yazılım geliştirmeyi yalnızca teknik bir disiplin olarak değil, değer üretme aracı olarak görüyorum. Kod yazmak benim için bir amaç değil; ölçeklenebilir sistemler kurmanın, problem çözmenin ve sürdürülebilir ürünler geliştirmenin aracıdır."
                : "I see software development not just as a technical discipline, but as a way to create value. Writing code is not the goal itself; it is the tool for building scalable systems, solving problems, and creating sustainable products."}
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-white/90">
              {isTr
                ? "\"Projelerimde her zaman şu perspektifle ilerliyorum: Bu sistem 10 kullanıcıdan 10.000 kullanıcıya çıkarsa ne olur?\""
                : "\"I always work with this question in mind: what happens if this system grows from 10 users to 10,000?\""}
            </div>
            <p>
              {isTr
                ? "Mimariyi baştan buna göre tasarlıyor; veri yapısından deployment sürecine kadar üretim ortamını düşünerek geliştiriyorum."
                : "I design the architecture from day one with this in mind, thinking through everything from data structures to deployment for real production environments."}
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {isTr ? "Ürün Geliştirme Yaklaşımım" : "My Product Development Approach"}
            </h2>
            <ul className="space-y-4">
              {[
                isTr ? "Önce problemi tanımlarım" : "Define the problem first",
                isTr ? "Kullanıcı davranışını analiz ederim" : "Analyze user behavior",
                isTr ? "Minimum çalışabilir sistemi kurarım" : "Build a minimum viable system",
                isTr ? "Sonra ölçeklenebilir mimariyi inşa ederim" : "Then build the scalable architecture"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white/80 text-lg">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold border border-white/10">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-semibold mb-4 text-white relative z-10">
              {isTr ? "Odak Noktam" : "My Focus"}
            </h3>
            <p className="text-white/60 leading-relaxed relative z-10">
              {isTr
                ? "Benim için önemli olan; sistemin çalışması değil, büyüyebilmesi."
                : "For me, what matters is not just that the system works, but that it can grow."}
            </p>
          </div>
        </section>

        {/* Technical Background */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            {isTr ? "Teknik Arka Plan" : "Technical Background"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Backend & Systems</h3>
              <p className="text-white/60 leading-relaxed">
                {isTr
                  ? "Python & Django ile rol bazlı sistemler, dashboard yapıları, veri akış mekanizmaları. PostgreSQL, deployment süreçleri (Render, VPS), domain ve SSL yönetimi."
                  : "Role-based systems, dashboards, data flow with Python & Django. PostgreSQL, deployment (Render, VPS), domain and SSL management."}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Mobile & Interactive</h3>
              <p className="text-white/60 leading-relaxed">
                {isTr
                  ? "Flutter ile kullanıcı etkileşimi odaklı uygulamalar. Unity ve C# ile interaktif sistemler. C ailesi ile algoritmik düşünme ve sistem seviyesinde mantık."
                  : "Interaction-focused apps with Flutter. Interactive systems with Unity and C#. Algorithmic thinking and system-level logic with C family."}
              </p>
            </div>
          </div>
        </section>

        {/* Systems Built */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {isTr ? "İnşa Ettiğim Sistem Türleri" : "Types of Systems I Build"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              isTr ? "Rol bazlı yönetim panelleri" : "Role-based management panels",
              isTr ? "Sağlık sektörü için web tabanlı yönetim uygulamaları" : "Web-based management apps for health sector",
              isTr ? "Eğitim yönetim sistemleri" : "Education management systems",
              isTr ? "SaaS mantığında geliştirilen kullanıcı odaklı ürünler" : "User-focused products built with SaaS logic",
              isTr ? "Gerçek müşteriye yönelik ticari projeler" : "Commercial projects for real customers"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 mt-1 flex-shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-white/80 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            {isTr ? "Uzun Vadeli Vizyon" : "Long-Term Vision"}
          </h2>
          
          <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12">
            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-black border-4 border-white/20"></span>
              <h3 className="text-xl font-semibold text-white mb-3">{isTr ? "Kısa Vade" : "Short Term"}</h3>
              <p className="text-white/60 leading-relaxed">
                {isTr
                  ? "Üniversite sürecini bir hazırlık dönemi değil, aktif üretim dönemi olarak görüyorum. Gerçek müşterilere hizmet eden sistemler geliştirerek teknik kapasitemi ticari karşılığa dönüştürmeyi hedefliyorum."
                  : "I see my university years not as preparation, but as an active production phase. I aim to transform my technical capacity into real commercial value by building systems that serve real customers."}
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-black border-4 border-white/40"></span>
              <h3 className="text-xl font-semibold text-white mb-3">{isTr ? "Orta Vade" : "Mid Term"}</h3>
              <p className="text-white/60 leading-relaxed">
                {isTr
                  ? "SaaS temelli, abonelik modeliyle çalışan, ölçeklenebilir yazılım ürünleri üretmek istiyorum. Sağlık, eğitim ve yönetim sistemleri gibi alanlarda dijitalleşmeyi hızlandıran çözümler geliştirmeyi amaçlıyorum."
                  : "I want to build scalable SaaS products with subscription models, creating solutions that accelerate digitalization in areas like healthcare, education, and management systems."}
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></span>
              <h3 className="text-xl font-semibold text-white mb-3">{isTr ? "Uzun Vade" : "Long Term"}</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {isTr
                  ? "Yalnızca geliştirici değil, sistem mimarı ve teknoloji girişimcisi olarak konumlanmak istiyorum."
                  : "I want to position myself not just as a developer, but as a system architect and tech entrepreneur."}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  isTr ? "Kendi yazılım markasını oluşturan" : "Building my own software brand",
                  isTr ? "Ürün geliştirme ekipleri yöneten" : "Leading product development teams",
                  isTr ? "Global pazara açılan" : "Expanding to global markets",
                  isTr ? "Sürdürülebilir teknoloji şirketi kuran" : "Building a sustainable technology company"
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 px-4 py-3 rounded-xl border border-white/5 text-white/80 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/10 to-transparent border border-white/10 text-center">
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
              {isTr
                ? "\"Kod yazan biri değil, teknoloji inşa eden biri olmak istiyorum.\""
                : "\"I want to be someone who builds technology, not just writes code.\""}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
