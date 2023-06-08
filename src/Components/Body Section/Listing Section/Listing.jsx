import React, { useEffect, useState, useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line   } from "react-chartjs-2";

import {uid} from 'uid';
 
import './Listing.css'
import Chart from 'chart.js/auto';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import img from '../../../Aseets/abc.png'

// ChartJS.register(ArcElement, Tooltip, Legend);


const Listing =()=>{
  const so=20;

   

  

    return(
        <div className="LisitingSection ">

            <div className="heading flex">
                <h1>Driver on and off</h1>
                <button className="btn flex">
                    See all <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">

                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img} alt="led" />
                <h3>home led</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img} alt="led" />
                <h3>home led</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img} alt="led" />
                <h3>home led</h3>
                </div>

                <div className="singleItem">
                <AiOutlineHeart className="icon"/>
                <img src={img} alt="led" />
                <h3>home led</h3>
                </div>
            </div>
        {/*  */}
        <Line
    data={{
      labels: [20,40,60,80,100],
      datasets: [
        {
          data: [0, so/1.5,so*0.7, so*0.4,so],
          label: "nhiệt độ",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: [0,so/2, so*0.3, so/1.5,55],
          label: "Độ ẩm",
          borderColor: "#8e5ea2",
          fill: false
        },
        {
          data: [0,so/3, so, so,20],
          label: "Độ ẩm",
          borderColor: "#8e5aa2",
          fill: false
        },
        {
          data: [0,so/1.5, so/2, so*0.14,11],
          label: "Độ ẩm",
          borderColor: "#8e5ss2",
          fill: false
        },
      ]
    }}
    
  />
        </div>
    )
}
export default Listing