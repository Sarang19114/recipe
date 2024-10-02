import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white">
      <h1 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        🍲 Delicious Recipes Await! 🍝
      </h1>
      <p className="text-xl mb-10 font-light text-center max-w-md drop-shadow-md">
        🥘 Discover mouth-watering recipes and bring the magic of home-cooked meals to your kitchen.
      </p>
      <Link
        href="/recipes-detail"
        className="text-2xl px-8 py-4 bg-white text-red-600 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
      >
        🍳 Explore Recipes 🍴
      </Link>
      <div className="mt-10 text-4xl">
        🧑‍🍳🥗🍕🍰
      </div>
    </div>
  );
}
