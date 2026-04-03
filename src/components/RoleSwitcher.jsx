import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="mb-4 flex items-center gap-2">
      <label className="font-semibold">Role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border rounded p-2 bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 transition"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}
