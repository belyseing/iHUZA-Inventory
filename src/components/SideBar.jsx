import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext"; 
import { RxCube } from "react-icons/rx";
import { CiLaptop } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";
import { RiStackLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

export default function SideBar() {
  const navigate = useNavigate();
  const { logout } = useLogin(); 
  const {theme} = useTheme ();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <div className={`w-64 fixed min-h-screen  border-r  ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700"}`}>
      <div className="pt-6 ml-3">
        <div className="flex items-center space-x-3 pl-3">
          <div className="p-2 bg-primary-500 rounded-lg">
            <RxCube className="w-6 h-6 text-white font-bold" />
          </div>
          <div>
            <h1 className={`font-bold text-xl ${theme === "light"? "" : "text-white"}`}>iHUZA</h1>
            <p className="text-gray-500 text-sm">INVENTORY</p>
          </div>
        </div>

        <div className="p-2 mt-6 flex flex-col gap-2 text-sm font-medium text-gray-700">
          <div 
            onClick={() => navigate("/dashboard")} 
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-primary-600 cursor-pointer"
          >
            <CiLaptop className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span className={`${theme === "light"? "" : "text-gray-400"}`}>Dashboard</span>
          </div>

          <div
            onClick={() => navigate("/dashboard/users")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-primary-600 cursor-pointer"
          >
            <TbUsers className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span className={`${theme === "light"? "" : "text-gray-400"}`}>Users</span>
            <div className={`ml-auto  text-xs font-semibold px-3 py-0.5 rounded-full ${theme === "light" ? "bg-primary-50 text-gray-600" : "bg-gray-600 text-gray-300"}`}>
              100
            </div>
          </div>

          <div
            onClick={() => navigate("/dashboard/products")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <RxCube className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span className={`${theme === "light"? "" : "text-gray-400"}`}>Products</span>
            <div className={`ml-auto  text-xs font-semibold px-3 py-0.5 rounded-full ${theme === "light" ? "bg-primary-50 text-gray-600" : "bg-gray-600 text-gray-300"}`}>
              110
            </div>
          </div>

          <div
            onClick={() => navigate("/dashboard/assignments")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <VscListSelection className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span className={`${theme === "light"? "" : "text-gray-400 "}`}>Assignments</span>
            <div className={`ml-auto  text-xs font-semibold px-3 py-0.5 rounded-full ${theme === "light" ? "bg-primary-50 text-gray-600" : "bg-gray-600 text-gray-300"}`}>
              10
            </div>
          </div>

          <div
            onClick={() => navigate("/dashboard/categories")}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          >
            <RiStackLine className="text-2xl text-gray-400 group-hover:text-blue-600" />
            <span className={`${theme === "light"? "" : "text-gray-400"}`}>Categories</span>
          </div>

         
          <div
            onClick={handleLogout}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-100 hover:text-primary-600 cursor-pointer mt-20"
          >
            <LuLogOut className="text-2xl text-gray-400 group-hover:text-primary-600" />
            <span className={`${theme === "light"? "" : "text-gray-400"}`}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}