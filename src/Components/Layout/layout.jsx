import React from "react";
import {io} from "socket.io-client";
import Sidebar from "../SideBar Section/Sidebar"
import Router from "../../routes/Route";
import './layout.css';
import '../../style/_main.scss'
const socket = io.connect("http://localhost:3001");

const Layout =()=>{
    return <div className="dark">
        <div className="container">
            <Sidebar/>  
            <div className="mainContent">
                    <Router/> 
            </div>
        </div>
    </div>
   
        
    
}
export default Layout 