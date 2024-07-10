import HomeHeader from "../Components/HomeHeader.jsx";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return(
        <>
            <HomeHeader />
            <Outlet />
        </>);
}

export default HomePage;