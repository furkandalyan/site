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
    <html lang={lang}>
      <body className="bg-black text-white">
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <div className="text-sm tracking-[0.25em] uppercase font-semibold">
              Furkan Dalyan
            </div>
            <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
              <Link
                href={`/${lang}/projects`}
                className="text-white/70 hover:text-white transition"
              >
                Projects
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="text-white/70 hover:text-white transition"
              >
                Blog
              </Link>
              <Link
                href={`/${lang}/about`}
                className="text-white/70 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href={`/${oppositeLang}`}
                className="border border-white/30 px-3 py-1.5 rounded-full text-white/90 hover:border-white hover:text-white transition"
              >
                {oppositeLang.toUpperCase()}
              </Link>
            </div>
          </div>
        </nav>

        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
