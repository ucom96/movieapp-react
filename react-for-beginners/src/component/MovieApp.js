import { useState, useEffect } from "react";

//맨 첫 화면에 로딩을 보여준후
//앱이 처음으로 실행될때 coin을 select에 담아 보여준다

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  //console.log("data", data);
  return (
    <div>
      <h1>Movie App</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
