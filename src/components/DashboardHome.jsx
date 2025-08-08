

import Dashboard from "./Dashboard";
import SystemOverview from "./SystemOverview";
import Categories from "./Categories";
import  Products from "./Products";
import UserList from "./UserList";
import { useTheme } from "../context/ThemeContext";

export default function DashboardHome() {
  const {theme} = useTheme ();
  return (
    <div className={`flex flex-col gap-6 ${theme === "light" ? "" : "bg-gray-950 text-white"}`}>
      <Dashboard />
      <SystemOverview />
      <Categories />
      <Products />
      <UserList />
    </div>
  );
}
