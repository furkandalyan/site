export default async function Contact({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {isTr ? "Iletisim" : "Contact"}
        </h1>
        <p className="text-white/70">
          {isTr
            ? "Benimle iletisime gecmek icin asagidaki kanallari kullanabilirsin."
            : "Feel free to reach out using the channels below."}
        </p>
      </header>

      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 p-5">
          <p className="text-white/60 text-sm">Email</p>
          <a
            href="mailto:dmf.furkan@gmail.com"
            className="text-white hover:opacity-80 transition"
          >
            dmf.furkan@gmail.com
          </a>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <p className="text-white/60 text-sm">GitHub</p>
          <a
            href="https://github.com/furkandalyan"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80 transition"
          >
            github.com/furkandalyan
          </a>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <p className="text-white/60 text-sm">LinkedIn</p>
          <a
            href="https://tr.linkedin.com/in/mahir-furkan-dalyan-316482320"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80 transition"
          >
            linkedin.com/in/mahir-furkan-dalyan-316482320
          </a>
        </div>
      </div>
    </div>
  );
}