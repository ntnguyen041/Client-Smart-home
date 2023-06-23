import React, { useState,useContext } from "react";
import {io} from "socket.io-client";
import Sidebar from "../SideBar Section/Sidebar"
import Router from "../../routes/Route";

import '../../style/base/reset.css';
import { AppContext } from "../../style/context/AppContext";
import { Outlet } from "react-router-dom";

const Layout =()=>{
  

    const {themeStyle}=useContext(AppContext);
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
export default Layout 