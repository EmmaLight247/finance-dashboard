import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);
  const expenses = transactions.filter(t => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const topCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0] || ""
  );

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition mt-6">
      <h2 className="text-lg font-semibold mb-2">Insights</h2>
      {topCategory ? (
        <p>💡 Highest spending category: <b>{topCategory}</b></p>
      ) : (
        <p>No insights available</p>
      )}
    </div>
  );
}
