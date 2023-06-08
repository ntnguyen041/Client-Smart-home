import React from "react";
import { NavLink,Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Sidebar.css'

import logo from '../../Aseets/logo.png'
import {AiFillHome} from 'react-icons/ai'
import {HiOutlineViewGrid} from 'react-icons/hi'
import {RiRemoteControlLine} from 'react-icons/ri'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {AiFillSetting} from 'react-icons/ai'
const Sidebar =()=>{
    return(
        <div className="sideBar">
             <NavLink to="/">
                <div className="logoDiv flex">
                <img src={logo} alt="Smart Home" />
                    <h2>CKC IOT</h2>
                </div>
                </NavLink>
                <div className="menuDiv">
                    <h3 className="divTitle">
                        Start My Home
                    </h3>
                    <ul className="menuLists grid">
                        <li className="listItem">
                            <NavLink to="/" className={"menuLink flex"}>
                                <AiFillHome className="icon"/>
                                <span className="smailText">
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        
                        <li className="listItem">
                        <NavLink to="/seting" className={"menuLink flex"}>
                                <HiOutlineViewGrid className="icon"/>
                                <span className="smailText">
                                    Room
                                </span>
                        </NavLink>
                        </li>
                        
                        <li className="listItem">
                        <NavLink to="/Driver" className={"menuLink flex"}>
                                <RiRemoteControlLine className="icon"/>
                                <span className="smailText">
                                    Driver Controll
                                </span>
                        </NavLink>
                        </li>
                        <li className="listItem">
                        <NavLink to="/seting" className={"menuLink flex"}>
                                <AiFillSetting className="icon"/>
                                <span className="smailText">
                                    Settings
                                </span>
                        </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="www"></div>
                <div className="sideBarCard">
                    <AiOutlineQuestionCircle className="icon"/>
                    <div className="CardContent">
                        <h3>Help Center</h3>
                        <p>Having trouble in CKC IOT, please contact us from for more questions.</p>
                        <button className="btn"> Go to help center</button>
                    </div>
                </div>
        </div>
    )
}
export default Sidebar