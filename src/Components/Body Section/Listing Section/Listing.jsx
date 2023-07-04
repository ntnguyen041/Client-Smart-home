import React, { useEffect, useState, useRef, useContext } from "react";
import { Line } from "react-chartjs-2";
import { NavLink,Link, useNavigate } from "react-router-dom";
import './Listing.css'
import Chart from 'chart.js/auto';
import { BsArrowRightShort } from 'react-icons/bs'
import socket from "../../../socket/socket";



const Listing = () => {
  const so = 20;
  const homeId=JSON.parse(localStorage.getItem("accessToKenHome"));
  const [listRoom,setListRoom] =useState("");
  useEffect(() => {
    if(homeId!==null){
        socket.emit("getitemhome",homeId)
        socket.on("listRoom",data=>{
            setListRoom(data)
        }) // console.log();
    }
  }, [homeId]);
 
  return (
    <div className="LisitingSection ">
      <div className="heading flex">
        <h1>Room Controll</h1>
            <NavLink to="/Room" className={"menuLink flex"}>
            <button className="btn flex">
              See all <BsArrowRightShort className="icon" />
            </button>               
        </NavLink>
      </div>
      <div className="secContainer flex">
        {listRoom ?
          listRoom.map((Room) =>
          <NavLink to={"Room/"+Room._id} key={Room._id} className="singleItem">
            <img src={Room.imageRoom} alt={Room.imageRoom} />
            <h3>{Room.nameRoom}</h3>
          </NavLink>
        )
          : ""}
      </div>
      <div className="chart">
        <h1>Temperature chart</h1>
        <Line
          data={{
            labels: [20, 40, 60, 80, 100],
            datasets: [
              {
                data: [0, so / 1.5, so * 0.7, so * 0.4, so],
                label: "nhiệt độ",
                borderColor: "#3e95cd",
                fill: false
              },
              {
                data: [0, so / 2, so * 0.3, so / 1.5, 55],
                label: "Độ ẩm",
                borderColor: "#8e5ea2",
                fill: false
              },
              {
                data: [0, so / 3, so, so, 20],
                label: "Độ ẩm",
                borderColor: "#8e5aa2",
                fill: false
              },
              {
                data: [0, so / 1.5, so / 2, so * 0.14, 11],
                label: "Độ ẩm",
                borderColor: "#8e5ss2",
                fill: false
              },
            ]
          }}
        />
      </div>
    </div>
  )
}
export default Listing