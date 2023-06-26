
import React, { useContext } from "react";
import './Top'
import { useState } from "react";
import { useEffect } from "react";
import img from '../../../Aseets/abc.png'
import { AppContext } from "../../../style/context/AppContext";

import Darkmode from "./darkmode";

function formatDate(date){
    if(!date) return '';
    const h=`0${date.getHours()}`.slice(-2);
    const m =`0${date.getMinutes()}`.slice(-2);
    const s =`0${date.getSeconds()}`.slice(-2);
    return `${h}:${m}:${s}`;
}
const today= new Date();
const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


const TopUser =()=>{
    const [timeString,setTimeString]=useState('');
    useEffect(()=>{
        setInterval(()=>{
            const now = new Date();
            const newTimeS = formatDate(now);
            setTimeString(newTimeS);
        },1000);
    },[]);

    const {user}=useContext(AppContext);


    return(
        <div className="topSection">
             <div className="headerSection flex">
                <div className="title">
                    <h1> Welcome to Smart Home</h1>
                    <p>Hello {user.nameUser}, Welcome back! </p>
                </div>
               
                <div className="timeHome">
                    <h1 id="timet">{timeString}</h1>
                    <p id="timet">{date}</p>
                </div>

                <div className="adminDiv flex">
                    <Darkmode/>
                    <div className="adminImage">
                        <img src={user.imageUser} alt="Tan Nguyen" />
                    </div>
                </div>
            </div>
        </div>
           
    )
    
}

export default TopUser