
import React from "react";
import './Top.css'
import { useState } from "react";
import { useEffect } from "react";
import img from '../../../Aseets/abc.png'

import {MdDarkMode} from 'react-icons/md'

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


    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1> Welcome to Smart Home</h1>
                    <p>Hello Nguyên Tấn, Welcome back! </p>
                </div>

                <div className="timeHome">
                    <h1 id="timet">{timeString}</h1>
                    <p id="timet">{date}</p>
                    
                </div>

                <div className="adminDiv flex">
                    <MdDarkMode  className="icon"/>
                    <div className="adminImage">
                        <img src={img} alt="Tan Nguyen" />
                    </div>
                </div>
            </div>
            
            
        </div>
       
    )
    
}

export default TopUser