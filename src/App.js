
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/Layout/layout';
import {io} from "socket.io-client";

function App() {
  
  const [username,setUsername]=useState("");
  const[user,setUser]=useState("");
  useEffect(()=>{
    const socket = io("https://server-smart-home.onrender.com");
    console.log(socket);
  },[])
  return <Layout/>
}

export default App;
