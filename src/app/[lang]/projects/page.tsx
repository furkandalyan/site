export default function Projects({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {params.lang === "tr" ? "Projelerim" : "My Projects"}
      </h1>
    </div>
  );
}
