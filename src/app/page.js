export default function HomePage() {
  return (
   <main
  className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4"
  style={{
    backgroundImage: "url('/smoky-sunrise.png')"
  }}
>
  <h1 className="text-4xl font-bold mb-4 text-center bg-black/40 px-4 py-2 rounded-lg">
    Welcome to Everything Smokys
  </h1>
  <p className="text-lg mb-8 text-center bg-black/30 px-4 py-2 rounded-lg max-w-2xl">
    Discover the best places to stay, eat, and explore in the Smoky Mountains.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <a href="#" className="bg-white text-black shadow-md rounded-xl p-6 hover:bg-blue-100 transition">
      <h2 className="text-2xl font-semibold">Where to Stay</h2>
      <p>Cabins, hotels, and cozy mountain getaways</p>
    </a>
    <a href="#" className="bg-white text-black shadow-md rounded-xl p-6 hover:bg-green-100 transition">
      <h2 className="text-2xl font-semibold">Where to Eat</h2>
      <p>Local diners, food trucks, and hidden gems</p>
    </a>
    <a href="#" className="bg-white text-black shadow-md rounded-xl p-6 hover:bg-yellow-100 transition">
      <h2 className="text-2xl font-semibold">What to Do</h2>
      <p>Attractions, hiking, museums, and events</p>
    </a>
  </div>

  <a href="#" className="text-blue-300 underline text-center bg-black/40 px-4 py-2 rounded-lg">
    Join the SmokeyVerse Co-op
  </a>
</main>


  );
}
