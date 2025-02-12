import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId,index_}) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  const screenWidth = window.innerWidth; // Define screenWidth

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]); // Add genreId as a dependency

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results); // Corrected to `results`
    });
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110; // Use elementRef.current
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110; // Use elementRef.current
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
         onClick={(element)=>sliderLeft(elementRef.current)} // Use sliderLeft directly
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth pt-5 px-3 pb-10"
      >
        {movieList.map((item) => (
            <>
            {index_%3==0? <HrMovieCard movie={item}/>: <MovieCard key={item.id} movie={item} />}
            </>
          // Add key prop
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={(element)=>sliderRight(elementRef.current)}// Use sliderRight directly
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[150px]  ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
      />
    </div>
  );
}

export default MovieList;