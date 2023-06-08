import React, { useEffect, useState, } from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Seting from "../Components/Body Section/pages/setings";
import Home from "../Components/Body Section/pages/home";
 

const Router =()=>{
    return(
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/seting" element={<Seting/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
       
    )
}
export default Router