import React from 'react'
import { useState, useEffect } from 'react';
import socket from '../../../socket/socket';
import "./Rooms.css"
export default function Rooms() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("accessToKen")));
     
    const [listRoom, setListRoom] = useState("");

    useEffect(() => {
        if (user !== null) {
            socket.emit("getitemhome", user.homeId[0])
            socket.on("listRoom", data => {
                setListRoom(data)
            })
            // console.log();
        }
    }, [user]);
    const ckeckClick=(e)=>{
         //e.currentTarget.classList.toggle('bg-salmon');
         
    }
    return (
        <div className="RomContainer">
            {listRoom ?
                listRoom.map((Room) =>
                    <div key={Room._id} className="singleItem flex">
                        <div className='content'>
                            <h3 className='texth'>{Room.nameRoom}</h3>
                            <div className='imageRoom'>
                                <img src={Room.imageRoom} alt={Room.imageRoom} />
                            </div>
                        </div>
                        <div className='diverRoom'>
                            nguyen
                        </div>

                    </div>
                )
                : ""}


            <div className={'singleItem flex'}>
                <div className='content'>
                    <h3 className='texth'>nguyeeennne</h3>
                    <div className='imageRoom'>
                        <img src="https://graceinmyspace.com/wp-content/uploads/2022/07/main-bedroom-bedding-768x1024.jpg" alt="adas" />
                    </div>
                </div>
                <div className='diverRoom'>
                    nguyen
                </div>
            </div>
                        
           
        </div>
    )
}
