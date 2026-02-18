export default async function Blog({
  params,
}: {
  params: Promise<{ lang: "tr" | "en" }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {lang === "tr" ? "Yazılarım" : "My Articles"}
      </h1>
    </div>
  );
}
