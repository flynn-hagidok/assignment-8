import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";


const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;