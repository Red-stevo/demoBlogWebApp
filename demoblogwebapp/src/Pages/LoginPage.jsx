import {Button, Form} from "react-bootstrap";
import "./../Styling/loginPage.css"
import {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const LoginPage = () => {
    const [eye, setEye] = useState(false);
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
                    <div className={"input-eye"}>
                        <Form.Control type={"password"} id={"password"} value={loginDetails.password}
                                      onChange={(e) =>
                                          setLoginDetails({...loginDetails, password: e.target.value})}/>
                        {eye ? <Button id={"eye-open"} onClick={() => setEye(!eye)}><FaRegEyeSlash /></Button> :
                            <Button id={"eye-closed"} onClick={() => setEye(!eye)}><FaRegEye /></Button>}
                    </div>
                </Form.Group>
                <Button className={"m-2"} id={"login-button"} type={"submit"}>login</Button>
            </Form>
        </div>
    );
}

export default LoginPage;