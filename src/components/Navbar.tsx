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
  const isTr = lang === "tr";

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
            <div className="relative flex items-center rounded-full border border-white/30 bg-white/10 p-1 shadow-[0_0_0_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_16px_0_rgba(255,255,255,0.25)]">
              <span
                aria-hidden="true"
                className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-white shadow transition-transform duration-300 ${
                  isTr ? "translate-x-0" : "translate-x-full"
                }`}
              />
              <Link
                href="/tr"
                title={switchTitle}
                aria-label="Switch to Turkish"
                className={`relative z-10 min-w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                  isTr ? "text-black" : "text-white/70"
                }`}
              >
                TR
              </Link>
              <Link
                href="/en"
                title={switchTitle}
                aria-label="Switch to English"
                className={`relative z-10 min-w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                  isTr ? "text-white/70" : "text-black"
                }`}
              >
                EN
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
            <div className="relative ml-2 flex items-center rounded-full border border-white/30 bg-white/10 p-1 shadow-[0_0_0_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_16px_0_rgba(255,255,255,0.25)]">
              <span
                aria-hidden="true"
                className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-white shadow transition-transform duration-300 ${
                  isTr ? "translate-x-0" : "translate-x-full"
                }`}
              />
              <Link
                href="/tr"
                title={switchTitle}
                aria-label="Switch to Turkish"
                className={`relative z-10 min-w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                  isTr ? "text-black" : "text-white/70"
                }`}
              >
                TR
              </Link>
              <Link
                href="/en"
                title={switchTitle}
                aria-label="Switch to English"
                className={`relative z-10 min-w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                  isTr ? "text-white/70" : "text-black"
                }`}
              >
                EN
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
