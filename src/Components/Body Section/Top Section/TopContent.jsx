
import React from "react";
import './Top.css'
import img2 from '../../../Aseets/home.png'
import video from '../../../Aseets/video/video.mp4'
import {BsArrowRightShort} from 'react-icons/bs'
const TopContent =()=>{
    return(
        <div>
              <div className="topSection">
           
           <div className="cardSection flex">
               <div className="rightCard flex">
                   <h1>Install and Control your home information</h1>
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
        </div>
    )
}

export default TopContent