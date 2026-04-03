import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function BalanceChart() {
  const { transactions } = useContext(AppContext);

  let balance = 0;
  const data = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return { date: t.date, balance };
  });

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition">
      <h2 className="font-semibold mb-4">Balance Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
