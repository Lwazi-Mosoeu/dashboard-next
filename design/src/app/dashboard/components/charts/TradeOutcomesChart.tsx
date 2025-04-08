"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import mockTradeData from "@/app/data/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

const TradeOutcomesChart: React.FC = () => {
  const outcomeCounts = mockTradeData.reduce((acc, trade) => {
    acc[trade.outcome] = (acc[trade.outcome] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(outcomeCounts),
    datasets: [
      {
        label: "Trade Outcomes",
        data: Object.values(outcomeCounts),
        backgroundColor: ["#4BC0C0", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#4BC0C0", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="text-lg font-bold mb-4">Trade Outcomes</h2>
      <Pie data={data} />
    </div>
  );
};

export default TradeOutcomesChart;
