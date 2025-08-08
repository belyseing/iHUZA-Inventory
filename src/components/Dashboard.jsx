import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { useLogin } from "../context/LoginContext";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { loginUser } = useLogin();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`w-full p-5  border-b ${theme === 'light' ? 'border-primary-50' : ' bg-gray-800 border-gray-700'}`}>
      <div className="flex items-center justify-between">
        <div className="ml-65">
          <h2 className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Dashboard</h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome Back, {loginUser?.email}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-700 pr-4">
          <button 
            onClick={toggleTheme}
            className={`p-1 rounded-full ${theme === 'dark' ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
          <IoSettingsOutline className={theme === 'dark' ? 'text-white' : ''} />
          <IoMdNotificationsOutline className={theme === 'dark' ? 'text-white' : ''} />
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : ''}`}>
            {loginUser?.email}
          </p>
          <div className={`px-2 py-2 rounded-full ${theme === 'dark' ? 'bg-primary-600' : 'bg-primary-600'} text-white`}>
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
}