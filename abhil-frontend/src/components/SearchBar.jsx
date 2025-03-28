import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function SearchBar() {
  const placeholderText = "Type here to search...";
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const resetDelay = 30000;

    if (index < placeholderText.length) {
      const timeout = setTimeout(() => {
        setTypedPlaceholder(placeholderText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setTypedPlaceholder("");
        setIndex(0);
      }, resetDelay);
    }
  }, [index]);

  return (
    <div className="relative flex items-center w-full max-w-md">
      <input
        type="text"
        placeholder={typedPlaceholder}
        className="w-full text-center pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 placeholder-opacity-100 transition-opacity duration-300 ease-in-out"
      />

      <ArrowRight
        className="absolute rounded-full bg-gray-100 right-3 text-gray-300 p-1 transition-transform duration-300 hover:scale-110"
        size={30}
      />
    </div>
  );
}

export default SearchBar;
