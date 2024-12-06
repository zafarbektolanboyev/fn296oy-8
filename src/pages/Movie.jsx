import React, { useState } from "react";
import axios from "axios";

function Movie() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState(null);
  const TOKEN = "1cbb9b8e";

  function handleClick(e) {
    e.preventDefault();
    if (movie) {
      axios
        .get(`http://www.omdbapi.com/?s=${movie}&apikey=${TOKEN}`)
        .then((res) => {
          if (res.status === 200 && res.data.Search) {
            setData(res.data.Search);
          } else {
            setData([])
          }
        })
        .catch((err) => {
          console.log(err);
          setData([]);
        });
    }
  }

  return (
    <div className="flex flex-col w-[350px] rounded-md p-[8px] mt-[50px] border mx-auto">
      <h2>Movie search</h2>
      <form className="flex mt-[10px]">
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Enter Movie Name"
          className="w-[300px] border p-[12px] rounded-md"
        />
        <button
          className="btn bg-blue-600 text-white p-[12px] rounded-md"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
      <div className="mt-[20px]">
        {data && data.length > 0 ? (
          data.map((el, index) => (
            <div key={index} className="flex flex-col items-center mb-[10px]">
              <img
                src={el.Poster !== "N/A" ? el.Poster : "default_image_url.jpg"}
                alt={el.Title}
                className="w-[200px] h-[300px] object-contain"
              />
              <p className="mt-[5px] text-center">{el.Title}</p>
            </div>
          ))
        ) : (
          data && <p className="text-center text-red-500">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Movie;
