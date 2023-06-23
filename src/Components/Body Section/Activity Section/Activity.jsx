
import iro from '@jaames/iro';
import './Activity.css'
import React, { useEffect, useState, } from "react";
import ColorPicker from './colorPicker'
import { BsArrowRightShort, BsDatabase } from 'react-icons/bs'
import { io } from "socket.io-client";
const socket = io.connect('http://localhost:3001', { reconnect: true });
const Activity = () => {

  const [user, setUser] = useState();

  const userName ="123";
  socket.emit("joinRoom", userName);
 
  const handleLogin = (userName) => {
    console.log(user)
    console.log(user[0]._id)
    
  }
  useEffect(() => {
    socket.emit("getAllUser", {uid: userName});
    socket.on('listUserView', (data) => {
      setUser(data)
     
    })
  }, [user]);

  
  return (
    
    <div>
      <div className="usermanage flex">
        <h1>User check</h1>
        <button type='button' className="btn flex" onClick={handleLogin}>
          See all <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className='aaaaa'>
      </div>
       
    </div>
  )

}
export default Activity