import { Trade } from "./types";

const generateMockData = (): Trade[] =>
  Array.from({ length: 50 }, () => ({
    trade_date: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    trade_type: (Math.random() > 0.5 ? "buy" : "sell") as "buy" | "sell",
    entry_price: Math.floor(Math.random() * 1000) + 1,
    exit_price: Math.floor(Math.random() * 1000) + 1,
    outcome: ["win", "loss", "breakeven"][Math.floor(Math.random() * 3)] as
      | "win"
      | "loss"
      | "breakeven",
    profit_loss: parseFloat((Math.random() * 1000).toFixed(2)),
    market_condition: ["low activity", "volatile"][
      Math.floor(Math.random() * 2)
    ] as "low activity" | "volatile",
    market_direction: ["range", "bullish", "bearish"][
      Math.floor(Math.random() * 3)
    ] as "range" | "bullish" | "bearish",
    emotional_state: ["calm", "anxious", "hesitant", "greedy"][
      Math.floor(Math.random() * 4)
    ] as "calm" | "anxious" | "hesitant" | "greedy",
  }));

const mockTradeData = generateMockData();

export default mockTradeData;
