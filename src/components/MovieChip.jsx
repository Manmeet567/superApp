import React from "react";

const MovieChip = ({ category, setSelectedMovies }) => {
  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie !== category)
    );
  };
  return (
    <button className="bg-[#148A08] text-white w-40 flex items-center justify-between text-lg rounded-3xl py-1 px-5">
      {category.movie} <span className="text-[#555555]" onClick={() => removeSelection(category)}>X</span>
    </button>
  );
};

export default MovieChip;