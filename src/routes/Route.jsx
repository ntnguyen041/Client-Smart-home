import React, { useEffect, useState, } from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Seting from "../Components/Body Section/pages/setings";
import Home from "../Components/Body Section/pages/home";
import Room from "../Components/Body Section/pages/Room"
import Driver from "../Components/Body Section/pages/Driver"
import Login from "../Components/Login/Login";

const Router =()=>{
    return(
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/seting" element={<Seting/>} />
          <Route path="/room" element={<Room/>} />
          <Route path="/Driver" element={<Driver/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
       
    )
}
export default Router