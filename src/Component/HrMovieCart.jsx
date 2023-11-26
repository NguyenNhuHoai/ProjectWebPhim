import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCart = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={IMG_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
      />
      <h2 className="w-[110px] md:w-[200px] text-white mt-2">{movie.title}</h2>
    </section>
  );
};

export default HrMovieCart;
