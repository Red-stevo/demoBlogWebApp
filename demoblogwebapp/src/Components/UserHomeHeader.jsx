import {Navbar, NavLink} from "react-bootstrap";
import {Outlet} from "react-router-dom";

const UserHomeHeader = () => {
    return(
        <>
        <Navbar>
            <Navbar.Brand>
                UserName:
            </Navbar.Brand>
            <NavLink href={"#companies"}>Companies</NavLink>
            <NavLink href={"#logout"}>Logout</NavLink>
        </Navbar>
        <Outlet />
        </>
    );
}

export default UserHomeHeader;
