import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameReviewPage = ({ gameId }) => {
  const [gameData, setGameData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch game data (this includes basic info about the game)
    axios
      .get(`https://api.rawg.io/api/games/${gameId}`)
      .then((response) => {
        setGameData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch game data");
        setLoading(false);
      });

    // Fetch reviews (this part depends on the API you are using)
    // Example using IGDB or any external reviews API
    axios
      .get(`https://api.example.com/reviews?game_id=${gameId}`)
      .then((response) => {
        setReviews(response.data.reviews.slice(0, 5)); // Show only top 5 reviews
      })
      .catch((error) => {
        setError("Failed to fetch reviews");
      });
  }, [gameId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="game-review-page">
      <h1 className="text-3xl font-bold text-white">{gameData?.name}</h1>

      <div className="reviews-section">
        <h2 className="text-xl font-bold text-white">Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          <div>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-card p-4 mb-4 bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="review-header flex items-center justify-between">
                  <h3 className="text-lg text-white">{review.author}</h3>
                  <span className="text-yellow-400">{review.rating} / 10</span>
                </div>
                <p className="text-gray-300 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameReviewPage;
