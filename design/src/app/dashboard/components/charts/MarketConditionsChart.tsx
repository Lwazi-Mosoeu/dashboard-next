"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import mockTradeData from "@/app/data/mockData";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MarketConditionsChart: React.FC = () => {
  const marketConditionCounts = mockTradeData.reduce((acc, trade) => {
    acc[trade.market_condition] = (acc[trade.market_condition] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(marketConditionCounts),
    datasets: [
      {
        label: "Market Condition Distribution",
        data: Object.values(marketConditionCounts),
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Trades",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-lg font-bold mb-4">Market Conditions Analysis</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MarketConditionsChart;
