import React, { useState } from "react";
import "./App.css";

function App() {
  const movieData = [
    {
      imdbID: "1",
      Title: "Avengers: Endgame",
      Year: "2019",
      Poster:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    },
    {
      imdbID: "2",
      Title: "Spider-Man",
      Year: "2021",
      Poster:
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400",
    },
    {
      imdbID: "3",
      Title: "Batman",
      Year: "2022",
      Poster:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400",
    },
    {
      imdbID: "4",
      Title: "Joker",
      Year: "2019",
      Poster:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    },
    {
      imdbID: "5",
      Title: "Interstellar",
      Year: "2014",
      Poster:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
    },
  ];

  const [movies] = useState(movieData);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  const addToWishlist = (movie) => {
    if (!wishlist.find((m) => m.imdbID === movie.imdbID)) {
      setWishlist([...wishlist, movie]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((m) => m.imdbID !== id));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎬 Movie Wishlist App</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Movies</h2>

      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>

            <button onClick={() => addToWishlist(movie)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      <h2>❤️ Wishlist</h2>

      <button onClick={clearWishlist}>Clear Wishlist</button>

      <div className="movie-container">
        {wishlist.length === 0 ? (
          <p>No movies in wishlist</p>
        ) : (
          wishlist.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>

              <button onClick={() => removeFromWishlist(movie.imdbID)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;