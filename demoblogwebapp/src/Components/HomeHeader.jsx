import {Container, Nav, Navbar} from "react-bootstrap";
import './../Styling/HeaderStyles.css';
const HomeHeader = () => {
    return(
        <Navbar expand={"lg"} className="home-navbar">
            <Container fluid >
                <Navbar.Brand id={"brand"} href="/">BloGit</Navbar.Brand>
                <Nav>
                    <Nav.Link id={"login"} href={"login"}>Login</Nav.Link>
                    <Nav.Link id={"get-started"} href={"reg"}>Get Started</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HomeHeader;
