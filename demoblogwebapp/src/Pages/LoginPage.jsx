import {Button, Form} from "react-bootstrap";
import "./../Styling/loginPage.css"

const LoginPage = () => {
    return (
        <div className={"login-page"}>
            <Form id={"login-form"}>
                <Form.Label>Login</Form.Label>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"username-label"} htmlFor={"username"}>Username </Form.Label>
                    <Form.Control id={"username"}/>
                </Form.Group>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"password-label"} htmlFor={"password"}>Password </Form.Label>
                    <Form.Control id={"password"} />
                </Form.Group>

                <Button className={"m-2"} id={"login-button"} type={"submit"}>login</Button>
            </Form>
        </div>
    );
}

export default LoginPage;