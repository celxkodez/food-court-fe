import React, {useContext, useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import { AuthUtil } from "../utils/AuthUtil";
import {AuthContext} from "../contexts/Auth";
import {redirect, useNavigate} from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [isLoading, setIsLoading] = useState(false)
    const togglePassword =()=>{
        passwordType === 'password' ? setPasswordType("text") : setPasswordType("password")
    }

    const { user, setUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleLogin = async (event: any) => {
        setIsLoading(true);
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        setIsLoading(true);
        const { login } = AuthUtil();

        const response = await login({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        })

        if (response) {
            setUser(response)

            navigate('/profile', {replace: true})
        }
        setIsLoading(false)

    }

    let errors: any = {};

    return (
        <>
            <div className={'bg-white rounded p-sm-5 p-2 w-75'}>
                <div>
                    <div>
                        <h2 className="lg-fs-24">Login to your dashboard</h2>
                        <p className="lg-fs-16">Provide details to login to your account </p>
                    </div>

                    <form action="" onSubmit={handleLogin} method={'post'}>
                        <div className="mb-3 p-2">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email"
                                   name="email"
                                   className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <span className="invalid-feedback">{errors.email?.message}</span>
                        </div>

                        <div className="mb-3 p-2">
                            <label htmlFor="" className="form-label">
                                Password
                            </label>

                            <div className="input-group">
                                <input type={passwordType}
                                       name="password"
                                       className="form-control" placeholder="Password"

                                />
                                <button
                                    style={{width: '55px', background: '#e7f0fe', color: '#4D4D4D', borderStyle: 'none'}}
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={togglePassword}>
                                    {passwordType === "password" ? <i style={{width: '16px'}}><FontAwesomeIcon icon={faEye}/></i>
                                        : <i style={{width: '16px'}}><FontAwesomeIcon icon={faEyeSlash}/></i>}
                                </button>

                            </div>
                        </div>

                        <div className="mb-3 p-2">
                            <button type="submit"
                                    className="btn btn-success form-control border-0 rounded-5"
                                    style={{backgroundColor: '#1CC578'}}
                                    disabled={isLoading}
                            >
                                {
                                    isLoading ? <Spinner />  : "Sign In"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Login.layout = 'auth';
export default Login;