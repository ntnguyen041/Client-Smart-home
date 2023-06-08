import React from "react";
import {io} from "socket.io-client";
import Sidebar from "../SideBar Section/Sidebar"
import Router from "../../routes/Route";
import Top from "../Body Section/Top Section/Top"
import './layout.css'
const socket = io.connect("http://localhost:3001");

const Layout =()=>{
    return <div className="container">
    <Sidebar/>  
    <div className="mainContent">
            <Router/> 
    </div>
    </div>
        
    
}
export default Layout 