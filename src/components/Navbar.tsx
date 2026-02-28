"use client";

import Image from "next/image";
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
  const currentLangLabel = lang.toUpperCase();
  const oppositeLangLabel = oppositeLang.toUpperCase();
  const switchTitle =
    oppositeLang === "tr" ? "Switch to Turkish" : "Switch to English";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
          </Link>

          <div className="flex items-center gap-3 sm:hidden">
            <div className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2 py-1 shadow-[0_0_0_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_16px_0_rgba(255,255,255,0.25)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                Lang
              </span>
              <span className="text-xs font-semibold text-white/70">
                {currentLangLabel}
              </span>
              <Link
                href={`/${oppositeLang}`}
                title={switchTitle}
                aria-label={switchTitle}
                className="relative overflow-hidden rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-black shadow transition duration-300 hover:bg-white/90 group-hover:scale-[1.02]"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400/60 animate-ping"
                />
                {oppositeLangLabel}
              </Link>
            </div>
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
            <div className="group ml-2 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2 py-1 shadow-[0_0_0_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_16px_0_rgba(255,255,255,0.25)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                Lang
              </span>
              <span className="text-xs font-semibold text-white/70">
                {currentLangLabel}
              </span>
              <Link
                href={`/${oppositeLang}`}
                title={switchTitle}
                aria-label={switchTitle}
                className="relative overflow-hidden rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-black shadow transition duration-300 hover:bg-white/90 group-hover:scale-[1.02]"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400/60 animate-ping"
                />
                {oppositeLangLabel}
              </Link>
            </div>
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
