export default function About({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {params.lang === "tr" ? "Hakkımda" : "About Me"}
      </h1>
    </div>
  );
}
