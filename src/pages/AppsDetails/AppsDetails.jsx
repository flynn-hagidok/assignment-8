import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import reviewsIcon from "../../assets/icon-review.png"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { addToDB, getStoredData } from "../../utility/AddToDB";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const AppsDetails = () => {

    const appsData = useLoaderData();
    const { id } = useParams()
    const appId = parseInt(id)
    const singleApp = appsData.find(app => appId === app.id)

    const [isInstalled, setInstalled] = useState(false)

    const handleInstall = (id) => {
        addToDB(id)
        setInstalled(true)
        toast("App Installed!")
    }

    useEffect(() => {
        const installApps = getStoredData()
        setInstalled(installApps.includes(id))
    }, [id])

    const { title, image, companyName, downloads, reviews, ratingAvg, size, ratings, description } = singleApp

    return (
        <div className="mt-8 max-w-350 mx-auto p-4 lg:p-0">
            <div className="lg:flex gap-18 items-center border-b-2">
                <img src={image} alt="" className="h-60 rounded-sm mb-16 mx-auto" />
                <div className="flex flex-col w-full mb-16">
                    <div className="border-b-2">
                        <h2 className="font-bold text-[1.5rem]">{title}</h2>
                        <p className="mb-6 font-semibold text-[#627382]">Develop by: <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span></p>
                    </div>
                    <div className="flex flex-wrap gap-14 mt-6">
                        <div>
                            <img src={downloadIcon} alt="" />
                            <p className="text-[#627382]">Downloads</p>
                            <h2 className="text-[2rem] font-extrabold">{downloads}</h2>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="" />
                            <p className="text-[#627382]">Average Ratings</p>
                            <h2 className="text-[2rem] font-extrabold">{ratingAvg}</h2>
                        </div>
                        <div>
                            <img src={reviewsIcon} alt="" />
                            <p className="text-[#627382]">Total Reviews</p>
                            <h2 className="text-[2rem] font-extrabold">{reviews}</h2>
                        </div>
                    </div>
                    <button disabled={isInstalled} className={`w-50 p-4 rounded-sm mt-8 font-semibold
                        ${isInstalled
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer"
                        }`} onClick={() => handleInstall(id)}>{isInstalled ? "Installed" : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className="mt-16 border-b-2">
                <div className="h-100 mb-30">
                    <h2 className="text-[1.25rem] font-bold mb-6">Ratings</h2>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ratings} layout="vertical">
                            <XAxis type="number"></XAxis>
                            <YAxis dataKey="name" type="category"></YAxis>
                            <Tooltip formatter={(value) => [`${value} Users`, "Total Ratings"]}></Tooltip>
                            <Bar dataKey="count" fill="#632EE3"></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-[1.25rem] font-bold mb-6">Description</h2>
                <p className="text-justify text-[#627382]">{description}</p>
            </div>
        </div>
    )
}

export default AppsDetails;