import HomeHeader from "../Components/HomeHeader.jsx";
import {Outlet} from "react-router-dom";
import Home from "./Home.jsx";

const HomePage = () => {
    return(<>
        <HomeHeader />
        <Outlet />
    </>);
}

export default HomePage;