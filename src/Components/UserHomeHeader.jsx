import {Navbar, NavLink} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import "./../Styling/UserHomePage.css";
const UserHomeHeader = () => {
    return(
        <div>
            <Navbar expand={"md"} id={"user-nav-bar"}>
                <Navbar.Brand id={"user-nav-brand"}>
                    UserName:
                </Navbar.Brand>
                <Navbar.Text id={"user-hom-icons"}>
                    <div id={"navigators"}>
                        <NavLink id={"home-user"} href={"/user/user"}>Home</NavLink>
                        <NavLink id={"companies"} href={"#companies"}>Companies</NavLink>
                    </div>
                    <NavLink id={"logout"} href={"#logout"}>Logout</NavLink>
                </Navbar.Text>
            </Navbar>
            <div id={"outlet"}>
            <Outlet />
            </div>
        </div>
    );
}

export default UserHomeHeader;
