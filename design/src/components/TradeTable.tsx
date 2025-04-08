"use client";

import React, { useState } from "react";
import mockTradeData from "@/app/data/mockData";
import Pagination from "@/components/ui/pagination";

const TradeTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(mockTradeData.length / rowsPerPage);
  const displayedData = mockTradeData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-200">
        <thead className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold border-b border-gray-300">
          <tr>
            <th className="py-3 px-4 border">Trade Date</th>
            <th className="py-3 px-4 border">Type</th>
            <th className="py-3 px-4 border">Entry Price</th>
            <th className="py-3 px-4 border">Exit Price</th>
            <th className="py-3 px-4 border">Outcome</th>
            <th className="py-3 px-4 border">Profit/Loss</th>
            <th className="py-3 px-4 border">Market Condition</th>
            <th className="py-3 px-4 border">Market Direction</th>
            <th className="py-3 px-4 border">Emotional State</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((trade, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
            >
              <td className="py-2 px-4 border">{trade.trade_date}</td>
              <td className="py-2 px-4 border">{trade.trade_type}</td>
              <td className="py-2 px-4 border">{trade.entry_price}</td>
              <td className="py-2 px-4 border">{trade.exit_price}</td>
              <td
                className={`py-2 px-4 border font-semibold ${
                  trade.outcome === "win"
                    ? "text-green-500"
                    : trade.outcome === "loss"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {trade.outcome}
              </td>
              <td className="py-2 px-4 border">{trade.profit_loss}</td>
              <td className="py-2 px-4 border">{trade.market_condition}</td>
              <td className="py-2 px-4 border">{trade.market_direction}</td>
              <td className="py-2 px-4 border">{trade.emotional_state}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TradeTable;
