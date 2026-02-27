import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const oppositeLang = lang === "tr" ? "en" : "tr";
  const navLabels: Record<string, { projects: string; blog: string; about: string; contact: string }> = {
    en: {
      projects: "Projects",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    tr: {
      projects: "Projeler",
      blog: "Blog",
      about: "Hakkýmda",
      contact: "Ýletiþim",
    },
  };
  const labels = navLabels[lang] ?? navLabels.en;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar lang={lang} oppositeLang={oppositeLang} labels={labels} />

      <main className="flex-1 mx-auto w-full max-w-screen-xl p-6 md:p-10">
        {children}
      </main>

      <Footer lang={lang} />
    </div>
  );
}