import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <div className="mt-10 bg-[#001931] p-10 lg:p-20">
            <div className="lg:flex justify-between border-b-2 mb-10">
                <div className="flex items-center gap-2 mb-10">
                    <img src={logo} alt="" className="h-8"/>
                    <h3 className="font-bold">HERO.IO</h3>
                </div>
                <div className="mb-10">
                    <p className="font-bold">Social Links</p>
                    <ul className="flex gap-6 mt-4">
                        <FaInstagram className="cursor-pointer"></FaInstagram>
                        <RiTwitterXFill className="cursor-pointer"></RiTwitterXFill>
                        <FaLinkedin className="cursor-pointer"></FaLinkedin>
                        <FaFacebook className="cursor-pointer"></FaFacebook>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p>Copyright &copy; 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;