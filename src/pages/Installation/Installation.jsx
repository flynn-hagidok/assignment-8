import { useLoaderData } from "react-router";
import { getStoredData } from "../../utility/AddToDB";
import { useEffect, useState } from "react";
import InstalledApps from "../InstalledApps/InstalledApps";


const Installation = () => {

    const [installApp, setInstallApp] = useState([])
    const [sort, setSort] = useState("")

    const appData = useLoaderData()
    // console.log(appData)
    // const installedApps = getStoredData()
    // console.log(installedApps)
    useEffect(() => {
        const installedApps = getStoredData()
        const converToNum = installedApps.map(appId => parseInt(appId))

        const myInstalledApps = appData.filter(singleApp => converToNum.includes(singleApp.id))

        setInstallApp(myInstalledApps)
    }, [appData])


    const handleSort = (type) => {
        setSort(type)
        if(type === "lowHigh"){
            const sortApps = [...installApp].sort((a, b) => a.ratingAvg - b.ratingAvg)
            setInstallApp(sortApps)
        }if(type === "highLow"){
            const sortApps = [...installApp].sort((a, b) => b.ratingAvg - a.ratingAvg) 
            setInstallApp(sortApps)
        }
    }


    return (
        <div className="mt-8 max-w-350 mx-auto px-4 lg:p-0">
            <div className="text-center">
                <h2 className="text-[3rem] font-bold">Your Installed Apps</h2>
                <p className="text-[1.25rem] text-[#627382]">Explore All Apps on the Market developed by us</p>
            </div>
            <div className="lg:flex justify-between mt-8">
                <p className="font-semibold text-[1.5rem] mb-4 lg:mb-0">({installApp.length}) Apps Found</p>
                <select value={sort} className="text-black bg-white rounded-sm px-2 cursor-pointer" onChange={(e) => handleSort(e.target.value)}>
                    <option value="" disabled>Sort By Rating</option>
                    <option value="lowHigh">Low-High</option>
                    <option value="highLow">High-Low</option>
                </select>
            </div>
            <div className="mt-10 space-y-4">
                {
                    installApp.map(singleApp => <InstalledApps key={singleApp.id} sigleApp={singleApp} setInstallApp={setInstallApp}></InstalledApps>)
                }
            </div>
        </div>
    );
};

export default Installation;