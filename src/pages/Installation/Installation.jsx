import { useLoaderData } from "react-router";
import InstalledApps from "../InstalledApps/InstalledApps";


const Installation = () => {

    const appData = useLoaderData()
    // console.log(appData)

    return (
        <div className="mt-8 max-w-350 mx-auto px-4 lg:p-0">
            <div className="text-center">
                <h2 className="text-[3rem] font-bold">Your Installed Apps</h2>
                <p className="text-[1.25rem] text-[#627382]">Explore All Apps on the Market developed by us</p>
            </div>
            <div className="lg:flex justify-between mt-8">
                <p className="font-semibold text-[1.5rem] mb-4 lg:mb-0">({appData.length}) Apps Found</p>
                <select name="" id="" className="text-black bg-white rounded-sm px-2 cursor-pointer">
                    <option value="" disabled>Sort By Size</option>
                    <option value="">Low-High</option>
                    <option value="">High-Low</option>
                </select>
            </div>
            <div>
                {
                    appData.map(singleApp => <InstalledApps key={singleApp.id} sigleApp={singleApp}></InstalledApps>)
                }
            </div>
        </div>
    );
};

export default Installation;