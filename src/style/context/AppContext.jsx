import {createContext, useState,useEffect} from "react";
// import { io } from "socket.io-client";
//const socket = io.connect(['http://localhost:3001','https://server-smart-home.onrender.com'], { reconnect: true });
// const socket = io.connect('http://localhost:3001', { reconnect: true });
import socket from "../../socket/socket";
export const AppContext =createContext();

export const AppProvider = ({children})=>{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("accessToKen")));
    const [listUser,setListUser] =useState([]);
    const [listRoom,setListRoom] =useState([]);
    useEffect(() => {
        if(user!==null){
            const id = user._id;
            socket.emit("joinRoom",  user._id);
            ////// lay lai du lieu user
            // socket.emit("getOneUser",id)
            // socket.on("getUser",(data)=>{
            //     setUser(data)
            // })
            // lay toan bo user
            // socket.emit("getAllUser", id);
            // socket.on('listUserView', (data) => {
            //     setListUser(data)
            // })

            // console.log();
        }
      }, [user]);
      
    const [isDay,setIsDay]=useState(true);
    const themeStyle ={
        light:'light',
        night:'night'
    }
    return (
        <AppContext.Provider value={{
            isDay,
            setIsDay,
            themeStyle:themeStyle[isDay?'night':'light'],
            user,
            }}>
        {children}
        </AppContext.Provider>
    )
};