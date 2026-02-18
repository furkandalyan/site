export default async function About({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  await params;

  return (
    <div className="max-w-4xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Mahir Furkan Dalyan</h1>
        <p className="text-white/70 text-lg">
          Computer Engineering Student | Product Builder | Tech Entrepreneur (in
          progress)
        </p>
        <p className="text-white/70 text-lg">Founder Mindset</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Bakis Acim</h2>
        <p className="text-white/70 leading-relaxed">
          Yazilim gelistirmeyi yalnizca teknik bir disiplin olarak degil, deger
          uretme araci olarak goruyorum. Kod yazmak benim icin bir amac degil;
          olceklenebilir sistemler kurmanin, problem cozmenin ve surdurulebilir
          urunler gelistirmenin aracidir.
        </p>
        <p className="text-white/70 leading-relaxed">
          Projelerimde her zaman su perspektifle ilerliyorum: Bu sistem 10
          kullanicidan 10.000 kullaniciya cikarsa ne olur?
        </p>
        <p className="text-white/70 leading-relaxed">
          Mimariyi bastan buna gore tasarliyor; veri yapisindan deployment
          surecine kadar uretim ortamini dusunerek gelistiriyorum.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Urun Gelistirme Yaklasimim</h2>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>Once problemi tanimlarim</li>
          <li>Kullanici davranisini analiz ederim</li>
          <li>Minimum calisabilir sistemi kurarim</li>
          <li>Sonra olceklenebilir mimariyi insa ederim</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Teknik Arka Plan</h2>
        <p className="text-white/70 leading-relaxed">
          Backend tarafinda Python & Django ile rol bazli sistemler, dashboard
          yapilari, veri akis mekanizmalari ve raporlama sistemleri
          gelistiriyorum. PostgreSQL tabanli veritabani tasarimi, deployment
          surecleri (Render, VPS mantigi), domain ve SSL yonetimi gibi production
          sureclerine hakimim.
        </p>
        <p className="text-white/70 leading-relaxed">
          Mobil tarafta Flutter ile kullanici etkilesimi odakli uygulamalar
          gelistiriyorum. Unity ve C# ile interaktif sistemler uzerinde calistim.
          C ailesi ile algoritmik dusunme ve sistem seviyesinde mantik
          gelistirdim.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Insa Ettigim Sistem Turleri</h2>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>Rol bazli yonetim panelleri</li>
          <li>Saglik sektoru icin web tabanli yonetim uygulamalari</li>
          <li>Egitim yonetim sistemleri</li>
          <li>SaaS mantiginda gelistirilen kullanici odakli urunler</li>
          <li>Gercek musteriye yonelik ticari projeler</li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          Benim icin onemli olan; sistemin calismasi degil, buyuyebilmesi.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Uzun Vadeli Vizyon</h2>
        <p className="text-white/70 leading-relaxed">
          Kisa vadede; universite surecini bir hazirlik donemi degil, aktif
          uretim donemi olarak goruyorum. Gercek musterilere hizmet eden
          sistemler gelistirerek teknik kapasitemi ticari karsiliga donusturmeyi
          hedefliyorum.
        </p>
        <p className="text-white/70 leading-relaxed">
          Orta vadede; SaaS temelli, abonelik modeliyle calisan, olceklenebilir
          yazilim urunleri uretmek istiyorum. Saglik, egitim ve yonetim
          sistemleri gibi alanlarda dijitallesmeyi hizlandiran cozumler
          gelistirmeyi amacliyorum.
        </p>
        <p className="text-white/70 leading-relaxed">
          Uzun vadede ise; yalnizca gelistirici degil, sistem mimari ve teknoloji
          girisimcisi olarak konumlanmak istiyorum.
        </p>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>Kendi yazilim markasini olusturan</li>
          <li>Urun gelistirme ekipleri yoneten</li>
          <li>Global pazara acilan</li>
          <li>Surdurulebilir teknoloji sirketi kuran</li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          bir yapi insa etmeyi hedefliyorum.
        </p>
        <p className="text-white/70 leading-relaxed">
          Amacim freelance projeler yapmak degil; deger ureten, buyuyen ve
          yatirim alabilecek seviyeye gelen urunler gelistirmek.
        </p>
        <p className="text-white/70 leading-relaxed">
          Kod yazan biri degil, teknoloji insa eden biri olmak istiyorum.
        </p>
      </section>
    </div>
  );
}