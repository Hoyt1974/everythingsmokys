export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-white to-sky-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Everything Smokys</h1>
      <p className="text-lg mb-8">
        Discover the best places to stay, eat, and explore in the Smoky Mountains.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a href="#" className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-100 transition">
          <h2 className="text-2xl font-semibold">Where to Stay</h2>
          <p>Cabins, hotels, and cozy mountain getaways</p>
        </a>
        <a href="#" className="bg-white shadow-md rounded-xl p-6 hover:bg-green-100 transition">
          <h2 className="text-2xl font-semibold">Where to Eat</h2>
          <p>Local diners, food trucks, and hidden gems</p>
        </a>
        <a href="#" className="bg-white shadow-md rounded-xl p-6 hover:bg-yellow-100 transition">
          <h2 className="text-2xl font-semibold">What to Do</h2>
          <p>Attractions, hiking, museums, and events</p>
        </a>
      </div>

      <div className="mt-10">
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          Join the SmokeyVerse Co-op
        </a>
      </div>
    </main>
  );
}
