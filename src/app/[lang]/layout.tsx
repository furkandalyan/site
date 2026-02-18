import Link from "next/link";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const oppositeLang = lang === "tr" ? "en" : "tr";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto max-w-screen-xl px-6 h-14 flex items-center justify-between">
          <Link 
            href={`/${lang}`} 
            className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity duration-200 cursor-pointer font-serif italic whitespace-nowrap"
          >
            Mahir Furkan Dalyan
          </Link>
          
          <div className="flex items-center gap-6 text-[13px] font-medium text-white/80">
            <Link
              href={`/${lang}/projects`}
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href={`/${lang}/blog`}
              className="hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href={`/${lang}/about`}
              className="hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href={`/${oppositeLang}`}
              className="ml-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs transition-all duration-200 border border-transparent hover:border-white/10"
            >
              {oppositeLang.toUpperCase()}
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 mx-auto w-full max-w-screen-xl p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
