import loaderImg from "../../assets/logo.png"

const Loader = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <p className="flex items-center font-bold text-[3rem] zoom-loader">L<img src={loaderImg} alt="" className="animate-spin w-20"/>oding</p>
        </div>
    );
};

export default Loader;