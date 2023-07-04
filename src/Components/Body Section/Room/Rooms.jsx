import React from 'react'
import { useState, useEffect, useReducer } from 'react';
import socket from '../../../socket/socket';
import "./Rooms.css"
import { NavLink } from 'react-router-dom';
import RoomPage from './RoomPage';
 

const listRoominitstate = {
    loading: false,
    data: [],
    error: null
}


const listRoomReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ROOM_API':
            return {
                ...state,
                loading: true
            }
        case 'GET_ROOM_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_ROOM_ERR':
            return {
                ...state,
                data: [],
                error: action.data
            }
        default:
    }
}
 
export default function Rooms() {

    const homeId = JSON.parse(localStorage.getItem("accessToKenHome"));
    const [listRoom, listRoomdispatch] = useReducer(listRoomReducer, listRoominitstate)
    useEffect(() => {
        async function lisromm() {
            listRoomdispatch({
                type: 'GET_ROOM_API'
            });
            try {
                socket.emit("getitemhome", homeId)
                socket.on("listRoom", list => {
                    listRoomdispatch({
                        type: 'GET_ROOM_SUCCESS',
                        data: list
                        
                    });
                })
            } catch (errr) {
                listRoomdispatch({
                    type: 'GET_ROOM_ERR'
                });
            }
        }
        lisromm();
    }, [])
    //
   
    
    return (
        <div className="RomContainer">
            
            {listRoom.loading ? "" :
                listRoom.data.map((Room) =>
                    <div key={Room._id} className="singleItem flex">
                        <NavLink to={Room._id} className="content">
                            <h1 className='texth'>{Room.nameRoom}</h1>
                            <div className='imageRoom'>
                                <img src={Room.imageRoom} alt={Room.imageRoom} />
                            </div>
                        </NavLink>
                        
                    </div>
                )
            }
               <h1>You can add room from smarthome app</h1>
        </div>
    )
}
