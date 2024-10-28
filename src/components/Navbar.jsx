/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <h1 className="px-8 py-2 mt-8 font-mono text-6xl font-bold tracking-tighter uppercase border rounded-2xl backdrop-blur-sm">
        Event Spot Lite
      </h1>
      <nav className="flex flex-col items-center justify-between p-2 border rounded-2xl backdrop-blur-sm border-black/15">
        <input
          className="px-4 py-1 border rounded-lg bg-inherit border-black/15 focus:border-black/30 active:border-black/30"
          type="text"
          placeholder="Search by events..."
          value={query}
          onChange={handleSearch}
        />
        
      </nav>
    </>
  );
};

export default Navbar;
