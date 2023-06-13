import React, { useState,useContext } from "react";
import {io} from "socket.io-client";
import Sidebar from "../SideBar Section/Sidebar"
import Router from "../../routes/Route";

import '../../style/base/reset.css';
import { AppContext } from "../../style/context/AppContext";
const socket = io.connect("http://localhost:3001");

const Layout =()=>{
    const {themeStyle,isDay}=useContext(AppContext);
    return <div className={themeStyle}>
        <div className="container">
            <Sidebar/>  
            <div className="mainContent">
                    <Router/> 
            </div>
        </div>
    </div>
}
export default Layout 