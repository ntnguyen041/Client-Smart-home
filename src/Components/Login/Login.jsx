import React from "react";
import { useEffect, useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {io} from "socket.io-client";
import { NavLink} from "react-router-dom";
const socket = io.connect('http://localhost:3001', {reconnect: true});
const Login=()=>{
    const userData ={uid:"0123a",nameUser:"duy",phoneUser:"0123456",imageUser:"abc.png",nameHome:"nhanho"};
    useEffect(() => {
        socket.on('connect', function () { console.log("socket connected"); });
    }, []);
    const load =()=>{
        socket.emit("createUser",(userData));
    }
    const navigate = useNavigate();
    const checkLogin=()=>{
        alert("nguyen");
        navigate("/")
    }
    

    ////////////////////
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handeLogin=(e)=>{
        e.preventDefault();
        console.log(email,password)
    }
    return(
       <section className="loginContainer">
        <div className="logintitle">Login</div>
        <form onSubmit={handeLogin}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter your Email"  onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Email</label>
            <input id="password" type="text" placeholder="Enter your PassWord"  onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
        <div className="Login-register">Don't have an account yet?</div>
        <NavLink to="/Register" className="login-register"> Register one for free</NavLink>
       </section>
    )

}
export default Login;