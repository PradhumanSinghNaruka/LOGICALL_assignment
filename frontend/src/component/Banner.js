import React, { useEffect, useState } from 'react';
import Slidebar from "../component/Slidebar";

const API_KEY = "77f558b474214ffc8968744d8e8ae938";
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

function GameCards() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        return response.json();
      })
      .then((data) => {
        setGames(data.results);
        setFilteredGames(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle Category Selection
  const handleCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  // Handle Search Query
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter games based on both category and search query
  useEffect(() => {
    let tempGames = [...games];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      tempGames = tempGames.filter(game =>
        game.genres.some(genre => genre.slug === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      tempGames = tempGames.filter(game =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredGames(tempGames);
  }, [searchQuery, selectedCategory, games]);

  if (loading) return <p className="text-white text-center mt-10">Loading games...</p>;
  if (error) return (
    <div className="text-red-500 text-center mt-10">
      <p>{error}</p>
      <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  return (
    <div className="p-10 flex">
      <Slidebar onCategorySelect={handleCategorySelect} />
      <div className="mt-14 md:mt-24 w-[80%] ml-0 md:ml-16">
        <h1 className=" text-2xl md:text-8xl font-bold text-white">
          {selectedCategory ? selectedCategory.replace(/-/g, " ") : "New and Trending"}
        </h1>

        {/* Search Box */}
        <div className="mt-6 mb-6">
          <input
            type="text"
            placeholder="Search for a game..."
            className="px-4 py-2 rounded-full focus:outline-none text-black w-full md:w-1/2 bg-gray-800"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Banner Section - Only Show If At Least 3 Games Exist */}
        {filteredGames.length >= 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-72 md:w-auto">
            {filteredGames.slice(0, 3).map((game) => (
              <div key={game.id} className="relative h-64 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img src={game.background_image || "fallback-image.jpg"} alt={game.name} className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{game.name}</h2>
                  <p className="text-gray-300 text-sm">{game.genres.map(g => g.name).join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Games Grid */}
        {filteredGames.length === 0 && (
          <p className="text-white text-center mt-10">No games found for this category or search.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 cursor-pointer w-72 md:w-auto">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110">
              <img src={game.background_image || "fallback-image.jpg"} alt={game.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-white">{game.name}</h2>
              <p className="text-gray-400 mt-2">
                Categories:{" "}
                {game.genres && game.genres.length > 0
                  ? game.genres.map((genre) => genre.name).join(", ")
                  : "Unknown"}
              </p>
              <p className="text-gray-400 mt-2">
                <strong>Release Year:</strong> {game.released ? game.released.split("-")[0] : "Unknown"}
              </p>
              <p className="text-gray-400">⭐ {game.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameCards;
