import React from "react";


export const Navbar: React.FC = () => {
  return (
    <div className="w-full max-h-12 flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
    <h1 className="text-lg font-semibold">Reels Maker</h1>
    <ul className="flex gap-[40px] text-m">
      <li>Home</li>
      <li>product</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </div>
  );
};
