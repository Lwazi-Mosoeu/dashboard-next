"use client";

import React from "react";
import AdvancedChart from "@/app/charts/components/AdvancedChart";
import SymbolOverview from "@/app/charts/components/SymbolOverview";
import MiniChart from "@/app/charts/components/MiniChart";
import MarketOverview from "@/app/charts/components/MarketOverview";
import StockMarket from "@/app/charts/components/StockMarket";
import TickerTape from "@/app/charts/components/TickerTape";
import Ticker from "@/app/charts/components/Ticker";
import SingleTicker from "@/app/charts/components/SingleTicker";
import StockHeatmap from "@/app/charts/components/StockHeatmap";
import CryptoHeatmap from "@/app/charts/components/CryptoHeatmap";
import ETFHeatmap from "@/app/charts/components/ETFHeatmap";
import ForexCrossRates from "@/app/charts/components/ForexCrossRates";
import ForexHeatmap from "@/app/charts/components/ForexHeatmap";
import Screener from "@/app/charts/components/Screener";
import CryptocurrencyMarket from "@/app/charts/components/CryptocurrencyMarket";
import SymbolInfo from "@/app/charts/components/SymbolInfo";
import TechnicalAnalysis from "@/app/charts/components/TechnicalAnalysis";
import FundamentalData from "@/app/charts/components/FundamentalData";
import CompanyProfile from "@/app/charts/components/CompanyProfile";
import News from "@/app/charts/components/News";
import EconomicCalendar from "@/app/charts/components/EconomicCalendar";

const ChartsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Market Charts</h1>

        {/* Ticker Tape */}
        <div className="mb-6">
          <TickerTape />
        </div>

        {/* Top Row Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <MiniChart />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <MarketOverview />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <StockMarket />
          </div>
        </div>

        {/* Advanced and Symbol Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg border bg-white p-4 shadow-md h-[500px]">
            <AdvancedChart />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md h-[500px]">
            <SymbolOverview />
          </div>
        </div>

        {/* Tickers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <Ticker />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <SingleTicker />
          </div>
        </div>

        {/* Additional Widgets */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Additional Widgets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <StockHeatmap />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <CryptoHeatmap />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <ETFHeatmap />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <ForexCrossRates />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <ForexHeatmap />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <Screener />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <CryptocurrencyMarket />
          </div>
        </div>

        {/* Company and Technical Information */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Company and Technical Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <SymbolInfo />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <TechnicalAnalysis />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <FundamentalData />
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-md">
            <CompanyProfile />
          </div>
        </div>

        {/* News Widget */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Market News
        </h2>
        <div className="rounded-lg border bg-white p-4 shadow-md">
          <News />
        </div>

        {/* Economic Calendar */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Economic Calendar
        </h2>
        <div className="rounded-lg border bg-white p-4 shadow-md">
          <EconomicCalendar />
        </div>
      </div>
    </main>
  );
};

export default ChartsPage;
