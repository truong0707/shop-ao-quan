import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = location.search ? location.search.split("=")[1] : "/";

    // use userRegister from store redux
    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate, redirect])

    // handle submit and kích hoạt action
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password))
    }

    return (
        <>
            <div style={{ marginTop: '50px' }} className="container d-flex flex-column justify-content-center align-items-center login-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input
                        value={name}
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" onClick={handleSubmit}>Register</button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            I Have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>  
        </>
    );
};

export default Register;
