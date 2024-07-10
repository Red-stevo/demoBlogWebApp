import {Container, Navbar} from "react-bootstrap";
import './../Styling/HeaderStyles.css';
const HomeHeader = () => {
    return(
        <Navbar className="home-navbar">
            <Container fluid>
                <Navbar.Brand id={"brand"} href="#home">BloGit</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HomeHeader;