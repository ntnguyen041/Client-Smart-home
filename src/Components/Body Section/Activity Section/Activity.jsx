
import iro from '@jaames/iro';
import './Activity.css'
import React, { useEffect, useState, useContext } from "react";
import { BsArrowRightShort, BsDatabase } from 'react-icons/bs'
import { AppContext } from '../../../style/context/AppContext';
const Activity = () => {
  const { listUser } = useContext(AppContext);
  
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