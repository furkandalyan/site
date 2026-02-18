export default async function About({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          {isTr ? "Hakkımda" : "About Me"}
        </h1>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Ben Mahir Furkan Dalyan. Acibadem Universitesi'nde 3. sinif ogrencisiyim."
            : "I am Mahir Furkan Dalyan, a 3rd-year student at Acibadem University."}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          {isTr ? "Deneyim Alanlari" : "Experience Areas"}
        </h2>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Gecmiste Unity, Python ve C ailesinin bircok tureviyle calistim. Web app, mobil app ve masaustu app tarafinda deneyim elde ettim ve projeler gelistirdim."
            : "I have worked with Unity, Python, and many variants of the C family. I have built projects across web apps, mobile apps, and desktop apps."}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          {isTr ? "Odak" : "Focus"}
        </h2>
        <p className="text-white/70 leading-relaxed">
          {isTr
            ? "Uretilebilir, temiz mimarili ve kullanici odakli urunler gelistirmeye odaklaniyorum."
            : "I focus on building maintainable, clean-architecture, user-focused products."}
        </p>
      </div>
    </div>
  );
}
