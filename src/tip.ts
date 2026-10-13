export interface TipResult {
  tip: number;
  total: number;
}

function roundToCents(amount: number): number {
  return Math.round(amount * 100) / 100;
}

/** Tip and total for a bill, at the given percent, rounded to the nearest cent. */
export function calculateTip(bill: number, tipPercent: number): TipResult {
  const tip = roundToCents(bill * (tipPercent / 100));
  const total = roundToCents(bill + tip);
  return { tip, total };
}
