import { useState, useEffect } from "react";
import Movie from "../component/Movie";
import PropTypes from "prop-types";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        //movies에는 각 movie객체들을 담은 배열을 담는다
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
