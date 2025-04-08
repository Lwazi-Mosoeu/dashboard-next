import React from "react";
import Card from "./Card";
import { BarChart, Percent, DollarSign, TrendingUp } from "lucide-react";
import mockData from "@/app/data/mockData"; // Mock data import

const calculateMetrics = () => {
  const totalTrades = mockData.length;
  const winRate = (
    (mockData.filter((trade) => trade.outcome === "win").length / totalTrades) *
    100
  ).toFixed(2);
  const totalProfitLoss = mockData.reduce(
    (sum, trade) => sum + trade.profit_loss,
    0
  );
  const avgEntryPrice = (
    mockData.reduce((sum, trade) => sum + trade.entry_price, 0) / totalTrades
  ).toFixed(2);
  const avgExitPrice = (
    mockData.reduce((sum, trade) => sum + trade.exit_price, 0) / totalTrades
  ).toFixed(2);

  return { totalTrades, winRate, totalProfitLoss, avgEntryPrice, avgExitPrice };
};

const SummaryCards: React.FC = () => {
  const { totalTrades, winRate, totalProfitLoss, avgEntryPrice, avgExitPrice } =
    calculateMetrics();

  return (
    <>
      <Card
        icon={<BarChart className="h-6 w-6" />}
        value={totalTrades}
        label="Total Trades"
      />
      <Card
        icon={<Percent className="h-6 w-6" />}
        value={`${winRate}%`}
        label="Win Rate"
      />
      <Card
        icon={<DollarSign className="h-6 w-6" />}
        value={`$${totalProfitLoss}`}
        label="Total Profit/Loss"
      />
      <Card
        icon={<TrendingUp className="h-6 w-6" />}
        value={`$${avgEntryPrice} / $${avgExitPrice}`}
        label="Avg Entry/Exit Price"
      />
    </>
  );
};

export default SummaryCards;
