export default async function About({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="max-w-4xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Mahir Furkan Dalyan</h1>
        <p className="text-white/70 text-lg">
          {isTr
            ? "Computer Engineering Student | Product Builder | Tech Entrepreneur (in progress)"
            : "Computer Engineering Student | Product Builder | Tech Entrepreneur (in progress)"}
        </p>
        <p className="text-white/70 text-lg">Founder Mindset</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {isTr ? "Bakis Acim" : "My Perspective"}
        </h2>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Yazilim gelistirmeyi yalnizca teknik bir disiplin olarak degil, deger uretme araci olarak goruyorum. Kod yazmak benim icin bir amac degil; olceklenebilir sistemler kurmanin, problem cozmenin ve surdurulebilir urunler gelistirmenin aracidir."
            : "I see software development not just as a technical discipline, but as a way to create value. Writing code is not the goal itself; it is the tool for building scalable systems, solving problems, and creating sustainable products."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Projelerimde her zaman su perspektifle ilerliyorum: Bu sistem 10 kullanicidan 10.000 kullaniciya cikarsa ne olur?"
            : "I always work with this question in mind: what happens if this system grows from 10 users to 10,000?"}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Mimariyi bastan buna gore tasarliyor; veri yapisindan deployment surecine kadar uretim ortamini dusunerek gelistiriyorum."
            : "I design the architecture from day one with this in mind, thinking through everything from data structures to deployment for real production environments."}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {isTr ? "Urun Gelistirme Yaklasimim" : "My Product Development Approach"}
        </h2>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>{isTr ? "Once problemi tanimlarim" : "Define the problem first"}</li>
          <li>
            {isTr
              ? "Kullanici davranisini analiz ederim"
              : "Analyze user behavior"}
          </li>
          <li>
            {isTr
              ? "Minimum calisabilir sistemi kurarim"
              : "Build a minimum viable system"}
          </li>
          <li>
            {isTr
              ? "Sonra olceklenebilir mimariyi insa ederim"
              : "Then build the scalable architecture"}
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {isTr ? "Teknik Arka Plan" : "Technical Background"}
        </h2>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Backend tarafinda Python & Django ile rol bazli sistemler, dashboard yapilari, veri akis mekanizmalari ve raporlama sistemleri gelistiriyorum. PostgreSQL tabanli veritabani tasarimi, deployment surecleri (Render, VPS mantigi), domain ve SSL yonetimi gibi production sureclerine hakimim."
            : "On the backend, I build role-based systems, dashboards, data flow mechanisms, and reporting systems with Python & Django. I am experienced with PostgreSQL database design and production workflows like deployment (Render, VPS), domain setup, and SSL management."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Mobil tarafta Flutter ile kullanici etkilesimi odakli uygulamalar gelistiriyorum. Unity ve C# ile interaktif sistemler uzerinde calistim. C ailesi ile algoritmik dusunme ve sistem seviyesinde mantik gelistirdim."
            : "On mobile, I build interaction-focused apps with Flutter. I have worked on interactive systems with Unity and C#. The C family helped me develop algorithmic thinking and system-level logic."}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {isTr ? "Insa Ettigim Sistem Turleri" : "Types of Systems I Build"}
        </h2>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>
            {isTr
              ? "Rol bazli yonetim panelleri"
              : "Role-based management panels"}
          </li>
          <li>
            {isTr
              ? "Saglik sektoru icin web tabanli yonetim uygulamalari"
              : "Web-based management apps for the health sector"}
          </li>
          <li>
            {isTr ? "Egitim yonetim sistemleri" : "Education management systems"}
          </li>
          <li>
            {isTr
              ? "SaaS mantiginda gelistirilen kullanici odakli urunler"
              : "User-focused products built with SaaS logic"}
          </li>
          <li>
            {isTr
              ? "Gercek musteriye yonelik ticari projeler"
              : "Commercial projects for real customers"}
          </li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Benim icin onemli olan; sistemin calismasi degil, buyuyebilmesi."
            : "For me, what matters is not just that the system works, but that it can grow."}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {isTr ? "Uzun Vadeli Vizyon" : "Long-Term Vision"}
        </h2>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Kisa vadede; universite surecini bir hazirlik donemi degil, aktif uretim donemi olarak goruyorum. Gercek musterilere hizmet eden sistemler gelistirerek teknik kapasitemi ticari karsiliga donusturmeyi hedefliyorum."
            : "Short term, I see my university years not as preparation, but as an active production phase. I aim to transform my technical capacity into real commercial value by building systems that serve real customers."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Orta vadede; SaaS temelli, abonelik modeliyle calisan, olceklenebilir yazilim urunleri uretmek istiyorum. Saglik, egitim ve yonetim sistemleri gibi alanlarda dijitallesmeyi hizlandiran cozumler gelistirmeyi amacliyorum."
            : "Mid term, I want to build scalable SaaS products with subscription models, creating solutions that accelerate digitalization in areas like healthcare, education, and management systems."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Uzun vadede ise; yalnizca gelistirici degil, sistem mimari ve teknoloji girisimcisi olarak konumlanmak istiyorum."
            : "Long term, I want to position myself not just as a developer, but as a system architect and tech entrepreneur."}
        </p>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>
            {isTr
              ? "Kendi yazilim markasini olusturan"
              : "Building my own software brand"}
          </li>
          <li>
            {isTr
              ? "Urun gelistirme ekipleri yoneten"
              : "Leading product development teams"}
          </li>
          <li>
            {isTr ? "Global pazara acilan" : "Expanding to global markets"}
          </li>
          <li>
            {isTr
              ? "Surdurulebilir teknoloji sirketi kuran"
              : "Building a sustainable technology company"}
          </li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          {isTr ? "bir yapi insa etmeyi hedefliyorum." : "That is the structure I want to build."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Amacim freelance projeler yapmak degil; deger ureten, buyuyen ve yatirim alabilecek seviyeye gelen urunler gelistirmek."
            : "My goal is not to do freelance projects, but to build products that create value, grow, and can reach investment-ready scale."}
        </p>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Kod yazan biri degil, teknoloji insa eden biri olmak istiyorum."
            : "I want to be someone who builds technology, not just writes code."}
        </p>
      </section>
    </div>
  );
}