 import { TbUsers } from "react-icons/tb";
 import { RxCube } from "react-icons/rx";
 import { SiTicktick } from "react-icons/si";
 import { FiAlertTriangle } from "react-icons/fi";
 
 
 export default function Categories (){




    return (
        <div>
         <div className="flex gap-6 px-5 pt-6 ml-65">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4 px-6 py-6 w-[240px]">
               
                <div className="bg-primary-50 p-3 mt-2 rounded-lg">
                  <TbUsers className="w-6 h-6 font-bold text-primary-500" />
                </div>
                <div className="text-black ">
                  <p className="text-4xl font-bold">116</p>
                 <p className="text-gray-600 text-sm">Total Users</p>     
                </div>
              </div>
                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4 px-6 py-6 w-[250px]">
               
                <div className="bg-primary-100 p-3 mt-2 rounded-lg">
                  <RxCube className="w-6 h-6  text-primary-500" />
                </div>
                <div className="text-black ">
                  <p className="text-4xl font-bold">100</p>
                 <p className="text-gray-600 text-sm">Total Products</p>     
                </div>
              </div>
                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4 px-6 py-6 w-[250px]">
               
                <div className="bg-green-100 p-3 mt-2 rounded-lg">
                  <SiTicktick className="w-6 h-6  text-green-400" />
                </div>
                <div className="text-black ">
                  <p className="text-4xl font-bold">10</p>
                 <p className="text-gray-600 text-sm">Assigned Products</p>     
                </div>
              </div>
                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4 px-4 py-6 w-[250px]">
               
                <div className="bg-yellow-100 p-3 mt-2 rounded-lg">
                  <FiAlertTriangle className="w-6 h-6   text-yellow-500" />
                </div>
                <div className="text-black ">
                  <p className="text-4xl font-bold">90</p>
                 <p className="text-gray-600 text-sm">unassigned Products</p>     
                </div>
              </div>
              
            </div>
            </div>
    )
 }