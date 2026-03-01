import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang }: { lang: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-8 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          aria-label="Home"
        >
          <Image
            src="/logo4.svg"
            alt="Logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </Link>
        <span className="text-xs text-white/40">© {year}</span>
      </div>
    </footer>
  );
}
