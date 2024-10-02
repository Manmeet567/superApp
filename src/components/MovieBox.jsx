import React from "react";

const MovieBox = ({ category, selectedMovies, setSelectedMovies }) => {

    const handleSelection = (category) => () => {
        if(selectedMovies.includes(category)){
            setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
        } else {
            setSelectedMovies([...selectedMovies, category])
        }
    }

  return (
    <div
    className="w-[190px] xl:w-[150px] h-[190px] xl:h-[150px] p-[15px] xl:p-[10px] rounded-[20px] xl:rounded-[15px]"
      style={{
        backgroundColor: `${category.bg}`,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        margin: "10px",
        border: `6px solid ${
          selectedMovies.includes(category) ? "#11B800" : category.bg
        }`,
        cursor:"pointer"
      }}
      
      onClick={handleSelection(category)}
    >
      <p className="text-white font-medium text-3xl xl:text-xl dm-sans">{category.movie}</p>
      <img className="rounded-lg h-[90px] xl:h-[70px] shadow-[0_2px_4px_0_#0000008C]" src={category.img} alt="img" />
    </div>
  );
};

export default MovieBox;