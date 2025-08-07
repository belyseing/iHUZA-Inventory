import { MdOutlineDarkMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { useLogin } from "../context/LoginContext";

export default function Dashboard() {
  const { loginUser } = useLogin();

  return (
    <div className="w-full p-5 border-b border-primary-50">
      <div className="flex items-center justify-between">
        <div className=" ml-65">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <p className="text-gray-600 text-sm">Welcome Back, Admin</p>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-700 pr-4">
          <MdOutlineDarkMode />
          <IoSettingsOutline />
          <IoMdNotificationsOutline />
          <p className="text-sm">{loginUser?.email}</p>
          <div className="px-2 py-2 rounded-full bg-primary-600 text-white">
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
}
