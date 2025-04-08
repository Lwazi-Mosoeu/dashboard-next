// src/data/types.ts
export interface Trade {
  trade_date: string;
  trade_type: "buy" | "sell";
  entry_price: number;
  exit_price: number;
  outcome: "win" | "loss" | "breakeven";
  profit_loss: number;
  market_condition: "low activity" | "volatile";
  market_direction: "range" | "bullish" | "bearish";
  emotional_state: "calm" | "anxious" | "hesitant" | "greedy";
}
