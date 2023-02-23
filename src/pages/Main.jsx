import React from "react";
import GoogleTrends from "../components/GoogleTrends";

export default function Main() {
  return (
    <div className="flex flex-col items-center h-[2000px]">
      <div className="mt-48 text-4xl font-bold">
        Discover Trends Before They're Trending in Korea
      </div>
      <div className="flex w-full gap-4 pt-10 justify-evenly">
        <GoogleTrends keyword="덴지" />
        <GoogleTrends keyword="블루아카이브 티어표" />
        <GoogleTrends keyword="루닉" />
        <GoogleTrends keyword="릴스" />
        <GoogleTrends keyword="수성의 마녀" />
        {/* <GoogleTrends keyword="인게이지" />
        <GoogleTrends keyword="트위치 1080" /> */}
      </div>
    </div>
  );
}
