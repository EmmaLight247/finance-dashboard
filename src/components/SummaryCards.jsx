import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  const Card = ({ title, value }) => (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition hover:scale-105 transform">
      <h3 className="text-gray-500 dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold">${value}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} />
      <Card title="Expenses" value={expenses} />
    </div>
  );
}
