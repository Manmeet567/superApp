import React, { useState, useEffect } from "react";

function NotesWidget() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes === "") {
      localStorage.removeItem("notes"); 
    } else {
      localStorage.setItem("notes", notes); 
    }
  }, [notes]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="notes-section bg-[#F1C75B] w-[48%] h-full rounded-[19px] py-5 pl-8 pr-7">
      <p className="font-semibold text-[28px] 2xl:text-[38px] mb-4">All Notes</p>
      <textarea
        className="notes-area w-full bg-transparent h-[80%] outline-none resize-none overflow-auto text-[16px] 2xl:text-[21px] leading-[30px] tracking-[4%]"
        value={notes}
        autoFocus
        onChange={handleNotesChange}
      />
    </div>
  );
}

export default NotesWidget;
