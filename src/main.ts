/** What the page shows, from the project's first function. */
import { hello } from "./hello.ts";
import { calculateTip } from "./tip.ts";

document.getElementById("greeting")!.textContent = hello();

const bill = document.getElementById("bill") as HTMLInputElement;
const tipPercent = document.getElementById("tip-percent") as HTMLSelectElement;
const tipAmount = document.getElementById("tip-amount")!;
const totalAmount = document.getElementById("total-amount")!;

function format(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function update(): void {
  const { tip, total } = calculateTip(
    Number(bill.value) || 0,
    Number(tipPercent.value),
  );
  tipAmount.textContent = format(tip);
  totalAmount.textContent = format(total);
}

bill.addEventListener("input", update);
tipPercent.addEventListener("change", update);
update();
