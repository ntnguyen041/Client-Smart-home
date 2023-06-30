
import iro from '@jaames/iro';
import './Activity.css'
import React, { useEffect, useState, useContext } from "react";
import { BsArrowRightShort, BsDatabase } from 'react-icons/bs'
import socket from '../../../socket/socket';
const Activity = () => {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("accessToKen")));
  const [listUser,setListUser] =useState("");
  useEffect(() => {
    if(user!==null){
      const id = user._id;
        // lay toan bo user
        socket.emit("getAllUser", id);
        socket.on('listUserView', (data) => {
            setListUser(data)
        })
    }
  }, [user]);
  if (listUser === "") {
    <div className='container-listuser'>
    </div>
  }
  else {
    const content = listUser.map((user) =>
      <div key={user._id} className="listuser flexx">
        <div className="adminImage">
          <img src={user.imageUser} alt={user.nameUser} />
        </div>
        <div>
          <h3>{user.nameUser}</h3>
          <p>{user.phoneUser}</p>
        </div>
      </div>
    );
    return (
      <div className='container-listuser'>
        <div className="usermanage flexx">
          <h1>User check</h1>
          <button type='button' className="btn flexx">
            See all <BsArrowRightShort className="icon" />
          </button>
        </div>
        <div className='content-user'>{content}</div>
      </div>
    )
  }


}
export default Activity