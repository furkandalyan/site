export default function Blog({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {params.lang === "tr" ? "Yazılarım" : "My Articles"}
      </h1>
    </div>
  );
}
