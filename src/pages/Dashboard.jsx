import { useState, useEffect } from "react";
import SummaryCards from "../components/SummaryCards";
import TransactionsTable from "../components/TransactionsTable";
import RoleSwitcher from "../components/RoleSwitcher";
import BalanceChart from "../components/charts/BalanceChart";
import ExpenseChart from "../components/charts/ExpenseChart";
import Insights from "../components/Insights";

export default function Dashboard() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 space-y-6 transition-colors duration-300">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Finance Dashboard</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>

      <RoleSwitcher />

      <SummaryCards />

      <div className="grid md:grid-cols-2 gap-4">
        <BalanceChart />
        <ExpenseChart />
      </div>

      <Insights />

      <TransactionsTable />
    </div>
  );
}
