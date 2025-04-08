import React from "react";
import TradeTable from "@/components/TradeTable";

const TradeTablePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Trade Records</h1>
        <TradeTable />
      </div>
    </main>
  );
};

export default TradeTablePage;
