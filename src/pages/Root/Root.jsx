import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader"


const Root = () => {

    const navigation = useNavigation()
    return (
        <div className="flex flex-col min-h-screen">
            {
                navigation.state === "loading" ?
                    <Loader></Loader> :
                    <>
                        <Navbar></Navbar>

                        <main className="flex-1">
                            <Outlet></Outlet>
                        </main>

                        <Footer></Footer>
                    </>
            }

        </div>
    );
};

export default Root;