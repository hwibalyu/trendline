import React, { useEffect } from "react";

export default function GoogleTrends({ keyword }) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ssl.gstatic.com/trends_nrtr/3261_RC05/embed_loader.js";
    script.onload = function () {
      const trendbox = document.getElementById(`trend-${keyword}`);
      if (trendbox.children.length == 0) {
        window.trends.embed.renderExploreWidgetTo(
          trendbox,
          "TIMESERIES",
          {
            comparisonItem: [
              { keyword: `${keyword}`, geo: "KR", time: "today 12-m" },
            ],
            category: 0,
            property: "",
          },
          {
            exploreQuery: `q=${keyword}&date=today 12-m`,
            guestPath: "https://trends.google.com:443/trends/embed/",
          }
        );
      }
    };

    document.body.appendChild(script);

    // clean ups
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id={`trend-${keyword}`} className="flex" />;
}
