"use client";

import Link from "next/link";
import { useState } from "react";

type NavLabels = {
  projects: string;
  blog: string;
  about: string;
  contact: string;
};

export default function Navbar({
  lang,
  oppositeLang,
  labels,
}: {
  lang: string;
  oppositeLang: string;
  labels: NavLabels;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            href={`/${lang}`}
            className="text-xl sm:text-2xl font-normal tracking-wide hover:opacity-70 transition-opacity duration-200 cursor-pointer font-serif italic whitespace-nowrap"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Mahir Furkan Dalyan
          </Link>

          <div className="flex items-center gap-3 sm:hidden">
            <Link
              href={`/${oppositeLang}`}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs transition-all duration-200 border border-transparent hover:border-white/10"
            >
              {oppositeLang.toUpperCase()}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white hover:border-white/40 transition"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="flex h-4 w-5 flex-col justify-between">
                <span className="block h-0.5 w-full bg-current" />
                <span className="block h-0.5 w-full bg-current" />
                <span className="block h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[13px] font-medium text-white/80">
            <Link
              href={`/${lang}/projects`}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.projects}
            </Link>
            <Link
              href={`/${lang}/blog`}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.blog}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.contact}
            </Link>
            <Link
              href={`/${oppositeLang}`}
              className="ml-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs transition-all duration-200 border border-transparent hover:border-white/10"
            >
              {oppositeLang.toUpperCase()}
            </Link>
          </div>
        </div>

        <div id="mobile-menu" className={open ? "block sm:hidden pb-3" : "hidden sm:hidden"}>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
            <Link
              href={`/${lang}/projects`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.projects}
            </Link>
            <Link
              href={`/${lang}/blog`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.blog}
            </Link>
            <Link
              href={`/${lang}/about`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              {labels.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
