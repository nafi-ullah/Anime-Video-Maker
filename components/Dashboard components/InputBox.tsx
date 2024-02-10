import React from "react";


export const InputBox: React.FC = () => {
  return (
    <div className="flex items-center mt-12">
    <div className="w-3/5 flex flex-col items-center">

    <textarea 
    id="srtInput"
    className="w-full h-48 px-4 text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
   
    placeholder="Enter text here..."
  ></textarea>
    <button className="h-[50px] w-[200px] bg-zinc-100 rounded-xl m-9 text-[24px] hover:bg-sky-500 hover:text-white">Complete</button>
    </div>
   
  </div>
  );
};
