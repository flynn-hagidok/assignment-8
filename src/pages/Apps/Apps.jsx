import { useLoaderData } from "react-router";
import AllApps from "../AllApps/AllApps";
import { useState } from "react";
import AppNotFound from "../AppNotFound/AppNotFound";


const Apps = () => {

    const appsData = useLoaderData()
    const [search, setSearch] = useState("")

    const filterApps = appsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="mt-8 max-w-350 mx-auto px-4 lg:p-0">
            <div className="text-center">
                <h2 className="text-[3rem] font-bold">Our All Application</h2>
                <p className="text-[1.25rem] text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="lg:flex justify-between mt-8">
                <p className="font-semibold text-[1.5rem] mb-4 lg:mb-0">({filterApps.length}) Apps Found</p>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" className="bg-white text-black w-80 px-2 py-1 outline-none rounded-sm"/>
            </div>
            <div className="grid lg:grid-cols-4 gap-10 mt-6">
                {
                    filterApps.length > 0 ? (filterApps.map(appData => <AllApps key={appData.id} appData={appData}></AllApps>)) :
                    (<div><AppNotFound></AppNotFound></div>)
                }
            </div>
        </div>
    )
}

export default Apps;