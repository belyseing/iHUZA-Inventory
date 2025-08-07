import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext"; 
import { RxCube } from "react-icons/rx";
import { CiLaptop } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";
import { RiStackLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";

export default function SideBar() {
  const navigate = useNavigate();
  const { logout } = useLogin(); 

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <div className="w-64 fixed min-h-screen bg-white border-r border-gray-200 space-y-8">
      <div className="pt-6 ml-3">
        <div className="flex items-center space-x-3 pl-3">
          <div className="p-2 bg-primary-500 rounded-lg">
            <RxCube className="w-6 h-6 text-white font-bold" />
          </div>
          <div>
            <h1 className="font-bold text-xl">iHUZA</h1>
            <p className="text-gray-500 text-sm">INVENTORY</p>
          </div>
        </div>

        <div className="p-2 mt-6 flex flex-col gap-2 text-sm font-medium text-gray-700">
          <div 
            onClick={() => navigate("/")} 
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-primary-600 cursor-pointer"
          >
            <CiLaptop className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span>Dashboard</span>
          </div>

          <div
            onClick={() => navigate("/users")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-primary-600 cursor-pointer"
          >
            <TbUsers className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span>Users</span>
            <div className="bg-primary-50 ml-auto text-gray-600 text-xs font-semibold px-3 py-0.5 rounded-full">
              100
            </div>
          </div>

          <div
            onClick={() => navigate("/products")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <RxCube className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span>Products</span>
            <div className="bg-primary-50 ml-auto text-gray-600 text-xs font-semibold px-3 py-0.5 rounded-full">
              110
            </div>
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <VscListSelection className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span>Assignments</span>
            <div className="bg-primary-50 ml-auto text-gray-600 text-xs font-semibold px-3 py-0.5 rounded-full">
              10
            </div>
          </div>

          <div
            onClick={() => navigate("/categories")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <RiStackLine className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span>Categories</span>
          </div>

          <div
            onClick={handleLogout}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 cursor-pointer mt-20"
          >
            <LuLogOut className="text-2xl text-gray-400 group-hover:text-red-600" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
