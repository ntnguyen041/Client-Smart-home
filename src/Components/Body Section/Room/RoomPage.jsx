import React from 'react'
import TopUser from '../Top Section/TopUser'
import { NavLink, json, useLocation, } from 'react-router-dom'
import { useReducer, useEffect, useState } from 'react'
import socket from '../../../socket/socket'

const listDeviceinitstate = {
    loading: false,
    data: [],
    //device: [],
    error: null
}
const listDeviceReducer = (state, action) => {
    switch (action.type) {
        case 'GET_API':
            return {
                ...state,
                loading: true
            }
        case 'GET_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data,
                //device: action.data,
            }
        case 'GET_ERR':
            return {
                ...state,
                data: [],
                //device: [],
                error: action.data
            }
        default:
    }
}
export default function RoomPage(img,name) {
    const [user] = useState(JSON.parse(localStorage.getItem("accessToKen")));
    const Roomid = useLocation();
    const [listDevce, listDevcedispatch] = useReducer(listDeviceReducer, listDeviceinitstate)

    useEffect(() => {
        async function lisdevice() {
            listDevcedispatch({
                type: 'GET_API'
            });
            setTimeout(() => {
                try {
                    socket.emit("getDevices", { _id: user._id, roomId: Roomid.pathname.slice(6) })
                    socket.on("listDevices", list => {
                        console.log(list)
                        listDevcedispatch({
                            type: 'GET_SUCCESS',
                            data: list,
                           // device: list.devicesId
                        });
                    })
                } catch (errr) {
                    listDevcedispatch({
                        type: 'GET_ERR'
                    });
                }
            }, 300)

        }
        lisdevice();
    }, [])
    return (
        <div>
            <TopUser />
            <div className='containerRoom'>
              
                    <div className="singleItem flex">
                        <NavLink to="/Room" className="content">
                            <h1 className='texth'>{name}</h1>
                            <div className='imageRoom'>
                                <img src={img} alt={img} />
                            </div>
                        </NavLink>
                    </div>
              
                 {listDevce.loading ? "loading..." :
                     (listDevce.data).map((device)=>(
                        <div key={device._id}>sadasd
                        
                            <h1>asdasdasd</h1>
                        </div>
                     ))

                    // console.log(listDevce.data.devicesId)
                
                }
            </div>

        </div>
    )
}
