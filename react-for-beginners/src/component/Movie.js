import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//맨 첫 화면에 로딩을 보여준후
//앱이 처음으로 실행될때 coin을 select에 담아 보여준다

function Movie({ id, coverImage, title, summary, genres }) {
  //console.log("data", data);
  return (
    <div>
      <img src={coverImage} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={id}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
