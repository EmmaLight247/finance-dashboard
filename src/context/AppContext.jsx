import { createContext, useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
 const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("transactions"); // get saved data
  return saved ? JSON.parse(saved) : initialData; // use it or fallback
});

  const [role, setRole] = useState("viewer");

    useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider value={{ transactions, setTransactions, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};
