import React from "react";
import { MdSend } from "react-icons/md";

import GoogleTrends from "../components/GoogleTrends";

export default function Main() {
  return (
    <div className="flex flex-col items-center h-[1400px] gap-20">
      <div className="mt-48 text-4xl font-bold">
        Discover Trends Before They're Trending in Korea
      </div>
      <div className="flex w-full gap-4 pt-10 justify-evenly">
        <GoogleTrends keyword="덴지" />
        <GoogleTrends keyword="블루아카이브 티어표" />
        <GoogleTrends keyword="루닉" />
        <GoogleTrends keyword="릴스" />
        <GoogleTrends keyword="수성의 마녀" />
      </div>
      <div className="flex w-12 gap-2 mt-10 lg:w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="새로운 트렌드에 귀를 기울일 E-mail을 입력해주세요."
          className="w-full font-bold text-center rounded-md bg-slate-100 h-14 focus:outline-sky-200 focus:outline-1"
        />
        <button className="px-10 text-xl font-semibold text-white rounded bg-cyan-700 hover:bg-cyan-600">
          <MdSend />
        </button>
      </div>
    </div>
  );
}
