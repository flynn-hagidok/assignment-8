import { useLoaderData, useNavigate } from "react-router";
import Banner from "../../components/Banner/Banner";
import HomeApps from "./HomeApps";


const Home = () => {

    const apps = useLoaderData()
    const homeApps = apps.slice(0, 8)

    const navigate = useNavigate()

    return (
        <div className="">
            <Banner></Banner>
            <div className="text-center mt-20 lg:max-w-350 mx-auto p-4 lg:p-0">
                <h2 className="text-[3rem] font-bold">Trending Apps</h2>
                <p className="text-[#627382]">Explore All Trending Apps on the Market Developed by us</p>

                <div className="grid lg:grid-cols-4 mt-10 gap-10">
                    {
                        homeApps.map(homeApp => <HomeApps key={homeApp.id} homeApp={homeApp}></HomeApps>)
                    }
                </div>

                <button className="mt-10 py-3 px-10 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm cursor-pointer" onClick={() => navigate("/apps")}>Show All</button>
            </div>
        </div>
    );
};

export default Home;