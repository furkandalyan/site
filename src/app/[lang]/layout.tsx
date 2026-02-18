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
        <nav className="p-6 flex justify-between border-b border-gray-800">
          <div className="font-bold">Furkan Dalyan</div>
          <div className="space-x-6">
            <Link href={`/${lang}/projects`}>Projects</Link>
            <Link href={`/${lang}/blog`}>Blog</Link>
            <Link href={`/${lang}/about`}>About</Link>
            <Link
              href={`/${oppositeLang}`}
              className="border px-3 py-1 rounded"
            >
              {oppositeLang.toUpperCase()}
            </Link>
          </div>
        </nav>

        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
