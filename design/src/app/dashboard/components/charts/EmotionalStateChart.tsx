"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import mockTradeData from "@/app/data/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionalStateChart: React.FC = () => {
  const emotionalStateCounts = mockTradeData.reduce((acc, trade) => {
    acc[trade.emotional_state] = (acc[trade.emotional_state] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(emotionalStateCounts),
    datasets: [
      {
        label: "Emotional State Distribution",
        data: Object.values(emotionalStateCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="text-lg font-bold mb-4">Emotional State Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default EmotionalStateChart;
