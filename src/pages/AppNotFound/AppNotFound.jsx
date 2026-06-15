import { useNavigate } from "react-router";
import appNotFound from "../../assets/App-Error.png"

const AppNotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="text-center mt-10 w-350 py-16 space-y-2">
            <img src={appNotFound} alt="" className="mx-auto" />
            <h2 className="font-semibold text-[3rem]">OPPS!! APP NOT FOUND</h2>
            <p className="text-[1.25rem] text-[#627382]">The App you are requesting is not found on our system. Please try another apps</p>
            <button className="cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-6 rounded-sm font-semibold"
            onClick={() => navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default AppNotFound;