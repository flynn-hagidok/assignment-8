import { toast } from "react-toastify";
import dowloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { removeFromDB } from "../../utility/AddToDB";

const InstalledApps = ({ sigleApp, setInstallApp }) => {

    const { id, image, title, downloads, ratingAvg, size} = sigleApp;

    // console.log(sigleApp)

    const handleUnistall = (id) => {
        removeFromDB(id)
        setInstallApp(remove => remove.filter(app => app.id !== id) )

        toast("App Uninstalled!")
    }

    return (
        <div className="lg:flex lg:justify-between text-center items-center p-2 bg-[#ffff] text-black rounded-md">
            <div className="flex items-center gap-4 justify-around lg:justify-normal">
                <img src={image} alt="" className="w-20 h-20 object-fill rounded-sm shadow-sm" />
                <div>
                    <h5 className="font-medium text-[1.25rem]">{title}</h5>
                    <div className="flex gap-4">
                        <p className="flex items-center gap-1"><img src={dowloadIcon} alt="" className="h-4" />{downloads}</p>
                        <p className="flex items-center gap-1"><img src={ratingIcon} alt="" className="h-4" />{ratingAvg}</p>
                        <p>{size}</p>
                    </div>
                </div>
            </div>

            <button className="bg-[#00D390] px-4 py-2 rounded-md text-[#ffff] mt-6 lg:mt-0 font-semibold cursor-pointer" onClick={() => handleUnistall(id)}>Uninstall</button>
        </div>
    );
};

export default InstalledApps;