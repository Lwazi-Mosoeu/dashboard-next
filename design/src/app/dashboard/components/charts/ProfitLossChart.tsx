"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement, // Register PointElement to resolve the error
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import mockTradeData from "@/app/data/mockData";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
); // Ensure PointElement is registered

const ProfitLossChart: React.FC = () => {
  const sortedData = [...mockTradeData].sort(
    (a, b) =>
      new Date(a.trade_date).getTime() - new Date(b.trade_date).getTime()
  );

  const cumulativeProfitLoss = sortedData.map((trade, index) =>
    sortedData.slice(0, index + 1).reduce((sum, t) => sum + t.profit_loss, 0)
  );

  const data = {
    labels: sortedData.map((trade) => trade.trade_date),
    datasets: [
      {
        label: "Cumulative Profit/Loss",
        data: cumulativeProfitLoss,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toFixed(2)}`, // Customize tooltip format
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Trade Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative Profit/Loss ($)",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-lg font-bold mb-4">Cumulative Profit/Loss</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProfitLossChart;
