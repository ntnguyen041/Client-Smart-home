
import React from "react";
import './Top.css'
import img2 from '../../../Aseets/home.png'
import video from '../../../Aseets/video/video.mp4'
 
const TopContent =()=>{
    return(
        <div>
              <div className="topSection">
           
           <div className="cardSection flex">
               <div className="rightCard flex">
                   <h1>Install and Control your home information</h1>
                   <p>Smart home system will serve you anytime, anywhere</p>

                   <div className="buttons flex">
                       <button className="btn"> IOS </button>
                       <button className="btn transparent">Android</button>
                   </div>

                   <div className="videoDiv"> 
                   <video src={video} autoPlay loop muted></video>
                   </div>
               </div>

               <div className="leftCard flex">
                   <div className="main flex">
                       <div className="textDiv">
                           <h1>My Home</h1>
                           <div className="flex">
                               <span> Heat <br /> <small> 28 °C</small> </span>
                               <span> Humidity <br /> <small>97 %</small></span>
                           </div>
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