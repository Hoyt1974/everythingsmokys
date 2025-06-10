export default function HomePage() {
  return (
   <main
  className="min-h-screen bg-cover bg-center text-white"
  style={{
    backgroundImage: "url('/smoky-sunrise.png')"
  }}
>
  <div className="bg-white/80 text-black p-8 rounded-xl max-w-4xl mx-auto mt-12 shadow-lg">
    <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Everything Smokys</h1>
    <p className="text-lg mb-8 text-center">
      Discover the best places to stay, eat, and explore in the Smoky Mountains.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Your cards here */}
    </div>

    <div className="text-center mt-8">
      <a href="#" className="text-blue-700 underline">
        Join the SmokeyVerse Co-op
      </a>
    </div>
  </div>
</main>

  );
}
