import React,{useEffect,useState, useContext}from "react";
import { AppContext } from "../../../style/context/AppContext";
 
const Darkmode =()=>{
    const {themeStyle,setIsDay,isDay}=useContext(AppContext);

    const toggoleTheme =()=>{
        setIsDay(!isDay)
    }

    return(
        <div>
        <input type="checkbox" id="dark-mode"  value={isDay} onChange={toggoleTheme} checked={isDay}/>
           <label for="dark-mode"></label>
        <div class="background"></div>
      </div>
       
    )
}
export default Darkmode