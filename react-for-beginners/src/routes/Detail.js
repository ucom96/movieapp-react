import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => setTitle(json.data.movie.title));
  }, []);
  return (
    <>
      <h1>{title}</h1>
      <img src="https://yts.mx/assets/images/movies/rocketry_the_nambi_effect_2022/background.jpg"></img>
    </>
  );
}

export default Detail;
