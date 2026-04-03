import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionsTable() {
  const { transactions, role } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = transactions.filter(t => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || t.type === filter)
    );
  });

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 mt-6 transition">
      <div className="flex justify-between flex-wrap gap-2 mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search category..."
            className="border p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 transition"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 transition"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {role === "admin" && (
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition">
            Add Transaction
          </button>
        )}
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <th className="py-2">Date</th>
            <th className="py-2">Category</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Type</th>
            {role === "admin" && <th className="py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={role === "admin" ? 5 : 4} className="text-center py-4">
                No transactions found
              </td>
            </tr>
          ) : (
            filtered.map((t) => (
              <tr key={t.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2">{t.date}</td>
                <td className="py-2">{t.category}</td>
                <td className="py-2">${t.amount}</td>
                <td className="py-2">{t.type}</td>
                {role === "admin" && <td className="py-2">Edit</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
