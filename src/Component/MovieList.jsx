import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../assets/Services/GlobalApi";
import MovieCart from "./MovieCart";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCart from "./HrMovieCart";
const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += 550;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 550;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`hidden text-white md:block p-2 text-[50px] absolute ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[150px]"
        }  cursor-pointer`}
        onClick={() => sliderLeft(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10"
      >
        {movieList?.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCart key={item.id} movie={item} />
            ) : (
              <MovieCart key={item.id} movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[150px]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
