import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { BsExclamationTriangleFill } from "react-icons/bs";
import categories from "../data/categories";

export default function Selection() {
  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);

  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/info");
    }
  };

  return (
    <div className="bg-black w-full h-screen flex flex-col p-28 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="w-[40%]">
          <p className="app-name text-[#72DB73] text-left leading-[70px] text-[38px] xl:text-[45px] 2xl:text-[67px]">
            Super app
          </p>

          <p
            className="text-white leading-[94px] mt-8 mb-6 text-7xl xl:text-6xl"
            style={{ fontWeight: "600" }}
          >
            Choose your entertainment category
          </p>

          <div className="w-[55%] md:w-full lg:w-full xl:w-full grid grid-cols-2 gap-5">
            {selectedMovies.map((category) => (
              <p key={category.id}>
                <MovieChip
                  key={category.id}
                  category={category}
                  setSelectedMovies={setSelectedMovies}
                />
              </p>
            ))}
          </div>

          {selectedMovies.length < 3 && (
            <p
              style={{
                color: "red",
              }}
            >
              <span className="flex items-center mt-5 text-xl">
                <BsExclamationTriangleFill className="mr-2" /> Minimum 3
                category required
              </span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 ml-[40px] gap-[10px] mb-[40px]">
          {categories.map((category) => (
            <div key={category.id}>
              <MovieBox
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
                category={category}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="bg-[#148A08] text-white w-[180px] dm-sans rounded-full py-[5px] tracking[2%] text-xl cursor-pointer"
          onClick={moveNext}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
