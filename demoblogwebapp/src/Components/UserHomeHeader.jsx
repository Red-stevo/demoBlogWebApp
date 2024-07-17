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
                    <NavLink id={"companies"} href={"#companies"}>Companies</NavLink>
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
