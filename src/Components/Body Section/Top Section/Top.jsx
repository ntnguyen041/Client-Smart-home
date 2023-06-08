
import React from "react";
import './Top.css'
import { useState } from "react";
import { useEffect } from "react";
import img from '../../../Aseets/abc.png'
import img2 from '../../../Aseets/abc.png'
import video from '../../../Aseets/video/video.mp4'
import {MdDarkMode} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
function formatDate(date){
    if(!date) return '';
    const h=`0${date.getHours()}`.slice(-2);
    const m =`0${date.getMinutes()}`.slice(-2);
    const s =`0${date.getSeconds()}`.slice(-2);
    return `${h}:${m}:${s}`;
}
const today= new Date();
const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


const Top =()=>{





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
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Install and view your home information</h1>
                    <p>Smart home system will serve you anytime, anywhere</p>

                    <div className="buttons flex">
                        <button className="btn">Download</button>
                        <button className="btn transparent">Start up</button>
                    </div>

                    <div className="videoDiv"> 
                    <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Start</h1>

                            <div className="flex">
                                <span> Today <br /> <small> 4 Oders</small> </span>
                                <span> this month <br /> <small> 127 Oders</small> </span>
                            </div>
                             <span className="flex link">
                                Go to
                                <BsArrowRightShort className="icon"/>
                             </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="led" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
       
    )
    
}

export default Top