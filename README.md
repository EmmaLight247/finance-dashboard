<HEAD
# finance-dashboard

A responsive, interactive finance dashboard built with React + Vite + Tailwind CSS. Users can track income, expenses, and financial trends, with light/dark mode and role-based UI features.

# Tech Stack

React (Vite template)
Tailwind CSS for styling
Recharts for charts
Context API for state management
Local Storage for data persistence

# Features

Dashboard Summary: Displays Balance, Income, Expenses in cards.
Charts:
Balance Trend: Line chart showing balance over time.
Spending Breakdown: Pie chart of expenses by category.
Transactions Table:
Search by category.
Filter by income/expense.
Role-based UI: Admin can see “Add/Edit” options.
Insights Section: Shows the highest spending category.
Role Simulation: Viewer vs Admin.
Dark Mode: Toggle between light and dark themes.
Responsive Design: Works on mobile, tablet, and desktop.
Local Storage: Data persists after page reloads.
Smooth Animations: Hover and transition effects on cards, tables, and buttons.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 e1cff97 (Initial commit - Finance Dashboard)