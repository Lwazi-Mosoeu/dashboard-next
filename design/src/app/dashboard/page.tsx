import React from "react";
import SummaryCards from "./components/SummaryCards";
import ProfitLossChart from "./components/charts/ProfitLossChart";
import EmotionalStateChart from "./components/charts/EmotionalStateChart";
import MarketConditionsChart from "./components/charts/MarketConditionsChart";
import TradeOutcomesChart from "./components/charts/TradeOutcomesChart";
import DashboardLayout from "./components/layouts/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Cards at the Top */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCards />
        </div>
      </section>

      {/* Charts Layout */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Top Row: Line and Bar Charts */}
        <div className="space-y-8">
          <ProfitLossChart />
          <MarketConditionsChart />
        </div>

        {/* Bottom Row: Pie Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EmotionalStateChart />
          <TradeOutcomesChart />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
