import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet /> 
      </main>
    </div>
  );
}
