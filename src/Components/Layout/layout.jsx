import React, { useState,useContext, useEffect } from "react";
import {io} from "socket.io-client";
import Sidebar from "../SideBar Section/Sidebar"
import Router from "../../routes/Route";

import '../../style/base/reset.css';
import { AppContext } from "../../style/context/AppContext";
import { Navigate, Outlet } from "react-router-dom";
 

const Layout =()=>{
   
    const [user,setUser]=useState(localStorage.getItem("accessToKen"));
    useEffect(()=>{
        const login =localStorage.getItem("accessToKen");
        if(login){
            setUser(login);
        }
    },[]);
    const {themeStyle}=useContext(AppContext);
    if(user===null){
        return <Navigate replace to="/Login"/>
    } else{
        return (
            <div className={themeStyle}>
            <div className="container">
                <Sidebar/>  
                <div className="mainContent">
                        <Outlet/>
                </div>
            </div>
        </div>
        )
    }
    
}
export default Layout 