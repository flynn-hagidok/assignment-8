import hero from "../../assets/hero.png"
import googlePlay from "../../assets/google_play.png"
import appStore from "../../assets/app_store.png"

const Banner = () => {
    return (
        <div className="text-black mt-8 text-center text-white">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-[4.5rem]">We Build<br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productivity</span> Apps</h2>
                <p className="mt-4 text-[#627382]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex mt-8 gap-6">
                    <button><a href="" className="flex items-center gap-2 rounded-md border-2 border-gray-400 px-6 py-2"><img src={googlePlay} alt="" className="h-6" />Google Play</a></button>
                    <button><a href="" className="flex items-center gap-2 rounded-md border-2 border-gray-400 px-6 py-2"><img src={appStore} alt="" className="h-6" />App Store</a></button>
                </div>
            </div>

            <img src={hero} alt="" className="mx-auto w-3/6 mt-10" />

            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg- py-10">
                <h2 className="text-[3rem] font-bold">Trusted By Millions, Built For You</h2>
                <div className="lg:flex justify-center items-center gap-50 mt-10">
                    <div>
                        <p>Total Downloads</p>
                        <h2 className="text-[4rem] font-extrabold">29.6M</h2>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h2 className="text-[4rem] font-extrabold">906K</h2>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h2 className="text-[4rem] font-extrabold">132+</h2>
                        <p>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;