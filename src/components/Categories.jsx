 import { TbUsers } from "react-icons/tb";
 import { RxCube } from "react-icons/rx";
 import { SiTicktick } from "react-icons/si";
 import { FiAlertTriangle } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
 
 
 export default function Categories (){
     const {theme} = useTheme ();



    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-950 text-white"}`}>
         <div className="flex gap-6 px-5 pt-6 ml-65">
              <div className={` rounded-xl shadow-sm flex items-start space-x-4 px-6 py-6 w-[240px]  border ${theme === "light" ? "bg-white  border-gray-100" : "bg-gray-800 border-gray-600"}`}>
               
                <div className="bg-primary-50 p-3 mt-2 rounded-lg">
                  <TbUsers className="w-6 h-6 font-bold text-primary-500" />
                </div>
                <div className="text-black ">
                  <p className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>116</p>
                 <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>Total Users</p>     
                </div>
              </div>

                 <div className={`rounded-xl shadow-sm flex items-start space-x-4 px-6 py-6 w-[240px]  border ${theme === "light" ? "bg-white  border-gray-100" : "bg-gray-800 border-gray-600"}`}>
               
                <div className="bg-primary-50 p-3 mt-2 rounded-lg">
                  <RxCube className="w-6 h-6  text-primary-500" />
                </div>
                <div className="text-black ">
                  <p className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>100</p>
                 <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>Total Products</p>     
                </div>
              </div>
                 <div className={`rounded-xl shadow-sm flex items-start space-x-4 px-6 py-6 w-[240px]  border ${theme === "light" ? "bg-white  border-gray-100" : "bg-gray-800 border-gray-600"}`}>
               
                <div className="bg-green-100 p-3 mt-2 rounded-lg">
                  <SiTicktick className="w-6 h-6  text-green-400" />
                </div>
                <div className="text-black ">
                  <p className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>10</p>
                 <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>Assigned Products</p>     
                </div>
              </div>
                 <div className={`rounded-xl shadow-sm flex items-start space-x-4 px-6 py-6 w-[240px]  border ${theme === "light" ? "bg-white  border-gray-100" : "bg-gray-800 border-gray-600"}`}>
               
                <div className="bg-yellow-100 p-3 mt-2 rounded-lg">
                  <FiAlertTriangle className="w-6 h-6   text-yellow-500" />
                </div>
                <div className="text-black  ">
                  <p className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>90</p>
                 <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>unassigned Products</p>     
                </div>
              </div>
              
            </div>
            </div>
    )
 }