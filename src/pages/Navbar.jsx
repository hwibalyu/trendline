import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed flex items-center justify-center w-screen h-20 backdrop-blur-sm border-b-[1px] text-slate-600">
        <ul className="flex items-center gap-24 font-medium">
          <span className="text-3xl italic font-black text-slate-700">
            TRENDLine...
          </span>
          <li>EXTENSION</li>
          <li>REPORT</li>
          <li>EXPLORE TRENDS</li>
          <li>INSIGHTS</li>
          <li>DATA</li>
        </ul>
      </div>
    </>
  );
}
