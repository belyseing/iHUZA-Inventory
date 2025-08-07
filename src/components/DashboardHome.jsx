

import Dashboard from "./Dashboard";
import SystemOverview from "./SystemOverview";
import Categories from "./Categories";
import  Products from "./Products";
import UserList from "./UserList";

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-6">
      <Dashboard />
      <SystemOverview />
      <Categories />
      <Products />
      <UserList />
    </div>
  );
}
