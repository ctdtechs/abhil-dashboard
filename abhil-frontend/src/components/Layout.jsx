import React, { useState } from "react";
import Sider from "./Sider";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      <Sider isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div
        className={`flex-1 bg-neutral-100 transition-all duration-500 ${
          isExpanded ? "ml-50" : "ml-14"
        }`}
      >
        <div className="bg-white rounded-tl-[15px]  p-4 border-l border-t border-gray-300 sticky top-0 z-10">
          <div className="flex items-start justify-between mt-1">
            <h1 className="text-lg text-black font-semibold">
              Aadhar Masking
            </h1>
            <SearchBar />
            <img src={logo} className="w-30 h-9" />
          </div>
        </div>

        {/* <div className="bg-white h-[calc(100vh-64px)] overflow-y-auto p-4 border-l border-gray-300">
          {children}
        </div> */}
        <div className="bg-white h-[calc(100vh-64px)] overflow-y-auto p-4 border-l border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
