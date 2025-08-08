import { RxCube } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

export default function SystemOverview() {
  const { theme } = useTheme(); 
  
  return (
    <div className={`px-5 pt-6 ml-65 ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-950 text-gray-100"}`}>
      <div className={`rounded-lg p-6 flex items-start space-x-4 w-[1020px] ${
        theme === "light" 
          ? "bg-primary-600" 
          : "bg-primary-600 "
      }`}>
       
        <div className={`p-3 rounded-lg ${
          theme === "light" 
            ? "bg-primary-400" 
            : "bg-primary-400"
        }`}>
          <RxCube className="w-6 h-6 text-white" />
        </div>

        <div className="text-white">
          <h1 className="text-xl font-bold">iHUZA INVENTORY - System Overview</h1>
          <p className={`text-sm mt-1`}>
            Monitor your iHUZA inventory and product assignments in real-time.
          </p>

          <div className="flex items-center gap-2 mt-3">
            <SiTicktick className={
              "text-green-400"
            } />
            <p className={"text-sm font-light"}>
              All System Operational
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}