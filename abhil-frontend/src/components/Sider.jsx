import { LayoutDashboard } from "lucide-react";
import React from "react";

function Sider({ isExpanded, setIsExpanded }) {
  const name = "ABHIL Dashboard";

  return (
    <div
      className={`bg-neutral-100 h-screen fixed left-0 top-0 ${
        isExpanded ? "w-50" : "w-14"
      } transition-[width] duration-500 ease-in-out flex flex-col items-center p-3`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {!isExpanded && (
        <div className="flex justify-center mt-3">
          <span className="bg-black text-white font-semibold rounded-br-lg rounded-tl-lg flex items-center justify-center text-sm w-6 h-6">
            {name.charAt(0)}
          </span>
        </div>
      )}

      {isExpanded && (
        <div className="flex items-center space-x-2 transition-all duration-500 mt-3">
          <span className="bg-black text-white font-semibold rounded-br-lg rounded-tl-lg flex items-center justify-center text-xs w-5 h-5"></span>
          <span className="text-black font-medium text-sm truncate">
            {name}
          </span>
        </div>
      )}

      <div className="mt-10 flex space-x-3 text-blue-500">
        <LayoutDashboard className="ml-3 w-5 h-5 transition-all duration-500" />
        <span
          className={`text-sm font-medium transition-all duration-100 ${
            isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          Dashboard
        </span>
      </div>
    </div>
  );
}

export default Sider;
