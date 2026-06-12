import downloadImg from "../../assets/icon-downloads.png"
import ratingLogo from "../../assets/icon-ratings.png"

const AllApps = ({ app }) => {

    const {image, title, downloads, ratingAvg} = app;
    // console.log(app)
    

    return (
        <div className="p-4 bg-[#ffff] text-black cursor-pointer">
            <img src={image} alt="" className="h-60 w-full rounded-sm object-cover shadow" />

            <h4 className="text-left text-[1.25rem] font-medium mt-4">{title}</h4>

            <div className="flex justify-between items-center mt-2">
                <button className="flex items-center bg-[#F1F5E8] rounded-sm px-2 gap-2 text-[#00D390] cursor-pointer">
                    <img src={downloadImg} alt="" className="w-4" />
                    <p className="text-[#00D390]">{downloads}</p>
                </button>

                <button className="flex items-center bg-[#FFF0E1] rounded-sm px-2 gap-2 text-[#FF8811]">
                    <img src={ratingLogo} alt="" className="w-4" />
                    {ratingAvg}
                </button>
            </div>
        </div>
    );
};

export default AllApps;