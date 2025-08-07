import { RxCube } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";

export default function SystemOverview() {
  return (
    <div className="px-5 pt-6 ml-65">
      <div className="bg-primary-600 rounded-lg p-6 flex items-start space-x-4 w-[1060px]">
       
        <div className="bg-primary-400 p-3 rounded-lg">
          <RxCube className="w-6 h-6 text-white" />
        </div>

      
        <div className="text-white">
          <h1 className="text-xl font-bold">iHUZA INVENTORY - System Overview</h1>
          <p className="text-sm text-white/90 mt-1">
            Monitor your iHUZA inventory and product assignments in real-time.
          </p>

        
          <div className="flex items-center gap-2 mt-3 text-white">
            <SiTicktick className="text-green-300" />
            <p className="text-sm font-light">All System Operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}
