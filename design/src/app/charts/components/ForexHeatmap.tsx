"use client";

import React, { useEffect, useRef, memo } from "react";

const ForexHeatmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{
        "width": 550,
        "height": 400,
        "currencies": ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en",
        "backgroundColor": "#ffffff"
      }`;

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(ForexHeatmap);
