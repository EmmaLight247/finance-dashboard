import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function ExpenseChart() {
  const { transactions } = useContext(AppContext);
  const expenses = transactions.filter(t => t.type === "expense");

  const categoryMap = {};
  expenses.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const data = Object.keys(categoryMap).map(key => ({ name: key, value: categoryMap[key] }));

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition">
      <h2 className="font-semibold mb-4">Spending Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#3b82f6" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
