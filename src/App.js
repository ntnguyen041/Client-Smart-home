
import { useEffect, useState,useRef } from 'react';
import Layout from './Components/Layout/layout';
import {io} from "socket.io-client";

// https://server-smart-home.onrender.com
//const socket = io(["http://localhost:3001","https://server-smart-home.onrender.com"]);

function App() {
 
  useEffect(() => {
    const  socket = io.connect("http://localhost:3001")
    socket.on("conneting",(data)=>{
      console.log(data)
    })
    socket.emit("getUser",data=>{
              console.log(data)
          })
  }, []);
  return <Layout/>
}

export default App;
