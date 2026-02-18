export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <div className="text-center mt-32">
      <h1 className="text-5xl font-bold">
        {lang === "tr" ? "Furkan Dalyan" : "Furkan Dalyan"}
      </h1>

      <p className="mt-6 text-xl text-gray-400">
        {lang === "tr"
          ? "Yazılım geliştirici, ürün inşa edici."
          : "Software developer, product builder."}
      </p>
    </div>
  );
}
