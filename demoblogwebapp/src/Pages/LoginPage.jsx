import {Button, Form} from "react-bootstrap";
import "./../Styling/loginPage.css"
import {useState} from "react";

const LoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({
        username:"",
        password:"",
    });


    return (
        <div className={"login-page"}>
            <Form id={"login-form"}>
                <Form.Label>Login</Form.Label>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"username-label"} htmlFor={"username"}>Username </Form.Label>
                    <Form.Control id={"username"} value={loginDetails.username}
                                  onChange={(e) =>
                                      setLoginDetails({...loginDetails, username: e.target.value})}/>
                </Form.Group>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"password-label"} htmlFor={"password"}>Password </Form.Label>
                    <Form.Control type={"password"} id={"password"} value={loginDetails.password}
                                  onChange={(e) =>
                                      setLoginDetails({...loginDetails, password: e.target.value})}/>
                    <div> </div>
                </Form.Group>
                <Button className={"m-2"} id={"login-button"} type={"submit"}>login</Button>
            </Form>
        </div>
    );
}

export default LoginPage;