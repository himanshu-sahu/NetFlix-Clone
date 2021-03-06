import React, { useState, useEffect } from "react";
import requests from "./Request";
import axios from "./axios";
import "./Banner.css";

function Banner() {
   const [movie, setMovies] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
         console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
         return request;
      }
      fetchData();
   }, []);

   console.log(movie);

   function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }
   return (
      <header
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                    "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition: "center center",
         }}
      >
         <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie.name || movie?.original_name}</h1>

            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>

            <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
         </div>
         <div className="banner_fadeBottom" />
      </header>
   );
}

export default Banner;
