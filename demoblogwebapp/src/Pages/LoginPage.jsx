import {Button, Form} from "react-bootstrap";
import "./../Styling/loginPage.css"
import {useEffect, useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {userLogin} from "../Redux/Actions/Actions.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const userLoginDetails = useSelector((state) => state.userDetails)
    const [eye, setEye] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordFieldType, setPasswordFieldType] = useState("password")
    const [loginDetails, setLoginDetails] = useState({
        username:"",
        password:"",
    });

    const  updatePasswordInputField = () => {
        if(eye)
            setPasswordFieldType("text");
        else
            setPasswordFieldType("password");
    }

    useEffect(() => {
        updatePasswordInputField();
    }, [eye]);

    useEffect(() => {
        if(userLoginDetails.isLoggedIn)
            navigate("/user/user");
    }, [loginDetails]);

    const onSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(loginDetails));
        setLoginDetails({username:"", password:"",});
    }


    return (
        <div className={"login-page"}>
            <Form id={"login-form"} onSubmit={(e) => onSubmitLogin(e)}>
                <Form.Label id={"login-title"}>Login</Form.Label>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"username-label"} htmlFor={"username"}>Username </Form.Label>
                    <Form.Control id={"username"} value={loginDetails.username}
                                  onChange={(e) =>
                                      setLoginDetails({...loginDetails, username: e.target.value})}/>
                </Form.Group>
                <Form.Group className={"p-2"}>
                    <Form.Label id={"password-label"} htmlFor={"password"}>Password </Form.Label>
                    <div className={"input-eye"}>
                        <Form.Control type={`${passwordFieldType}`} id={"password"} value={loginDetails.password}
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