export default async function About({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {lang === "tr" ? "Hakkımda" : "About Me"}
      </h1>
    </div>
  );
}
