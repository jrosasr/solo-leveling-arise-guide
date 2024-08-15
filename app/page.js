import CharacterSlider from "@/components/CharacterSlider/index.jsx";
export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-7xl mx-auto p-24 bg-gray-900 relative">
        <section className="flex min-h-screen flex-col items-center justify-between">
          <CharacterSlider></CharacterSlider>
        </section>
      </main>
    </>
  );
}
