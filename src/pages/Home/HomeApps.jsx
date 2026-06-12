import { useNavigate } from "react-router";
import downloadImg from "../../assets/icon-downloads.png"
import ratingLogo from "../../assets/icon-ratings.png"

const HomeApps = ({ homeApp }) => {

    const { id, title, image, downloads, ratingAvg } = homeApp;
    // console.log(homeApp)
    const navigate = useNavigate()

    return (
        <div className="bg-white p-4 rounded-md text-black cursor-pointer" onClick={() => navigate(`apps-details/${id}`)}>
            <img src={image} alt="" className="h-60 w-full rounded-sm object-cover shadow"/>

            <h4 className="text-left text-[1.25rem] font-medium mt-4">{title}</h4>

            <div className="flex justify-between items-center mt-2">
                <button className="flex items-center bg-[#F1F5E8] rounded-sm px-2 gap-2 text-[#00D390] cursor-pointer">
                    <img src={downloadImg} alt="" className="w-4"/>
                    <p className="text-[#00D390]">{downloads}</p>
                </button>

                <button className="flex items-center bg-[#FFF0E1] rounded-sm px-2 gap-2 text-[#FF8811]">
                    <img src={ratingLogo} alt="" className="w-4"/>
                    {ratingAvg}
                </button>
            </div>
        </div>
    )
}

export default HomeApps;