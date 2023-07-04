import React from "react";
import { useEffect, useState, useRef,useParams} from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import { authentication } from "../../firebase-otp";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./Login.css"
import socket from "../../socket/socket";
import Layout from "../Layout/layout";
import logo from "../../Aseets/logo.png"

const Login = () => {
    const navigate = useNavigate();
    const countryCode = "+84";
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] = useState('');
    const [user, setUser] = useState();
    const generrateRecapcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
            }
        }, authentication);
    }
    const reqestOTP = (e) => {
        // setPhoneNumber(countryCode + phoneNumber.slice(1));
        e.preventDefault();
        // checkuser
        if (phoneNumber >= 11) {
            socket.emit("loginadmin", phoneNumber);
            socket.on("loginAD", (data) => {
                if (data !== null) {
                    setUser(data);
                    localStorage.setItem("accessToKen", JSON.stringify(data))
                    localStorage.setItem("accessToKenHome", JSON.stringify(data.homeId[0]))
                    setExpandForm(true);
                    // generrateRecapcha();
                    // let appVerifier = window.recaptchaVerifier;
                    // signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
                    // .then(confirmationResult=>{
                    //     window.confirmationResult = confirmationResult;
                    // }).catch((error)=>{
                    //     alert("Your account will be locked in a few hours")
                    //     navigate("/Login")
                    // })
                }
            })
        }
    }
    useEffect(() => {
        const user = localStorage.getItem("accessToKen");
        // setUser(user);
        if (user) {
            navigate("/")
        }
    }, [user]);

    const checkOTP = (e) => {
        let otp = e.target.value;
        setOTP(otp);
        if (otp.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                localStorage.setItem("accessToKen", JSON.stringify(user))
                navigate("/")
            }).catch((error) => {
                console.log("Your otp code is incorrect")
            })
        }
    }
    if (user) {
        <Layout />
    } else {
        return (
            <div className="backgoundbody">
                <h1 className="slg">SMART HOME INFINITY</h1>
                <section className="loginContainer">
                    <div className="logologin">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Sign in</h1>
                    <form onSubmit={reqestOTP}>
                        <div className="txt_field">
                            <input type="tel" className="form-control" id="phoneNumberInput" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <span id="phoneNumberHelp" className="form-text"></span>
                            {/* <span id="phoneNumberHelp" className="form-text">Please enter the one time sent to your phone</span> */}
                            {phoneNumber.length >= 10 ?
                                "" :
                                <label htmlFor="phoneNumberInput" className="form-label">Phone number</label>}
                        </div>
                        {expandForm === true ?
                            <>
                                <div className="txt_field">
                                    <input type="number" className="form-control" id="otpInput" value={OTP} onChange={checkOTP} />
                                    <span id="otpHelp" className="form-text"></span>
                                    {OTP === 6 ? "" :
                                        <label htmlFor="otpInput" className="form-label">OTP</label>
                                    }
                                </div>
                            </> : null}
                        {
                            expandForm === false ?
                                <button type="submit" className="btn">Request OTP</button>
                                : null
                        }
                        <div id="recaptcha-container"></div>
                    </form>
                </section>

            </div>
        )
    }
}
export default Login;


