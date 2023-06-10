 
import iro from '@jaames/iro';
import './Activity.css'
import React, { useEffect, useState, } from "react";
import ColorPicker from './colorPicker'
import {BsArrowRightShort} from 'react-icons/bs'


const Activity =({ color, onChange } )=>{
    const [state, setstate] = useState({
        color: '#ffffff',
      })
    
    return(
        <div>
          <div>
          <div className=" ">
                <h1>User online</h1>
                <button className="btn flex">
                    See all <BsArrowRightShort className="icon"/>
                </button>
            </div>
            <br /><br />
            <div className=" ">
                <h1>User online</h1>
                <button className="btn flex">
                    See all <BsArrowRightShort className="icon"/>
                </button>
            </div>
            <br /><br />
          </div>



        <div>
          <h1>Logo Color</h1>
        <ColorPicker
          color={state.color}
          onChange={(color) => setstate({ ...state, color: color })}
        />
        </div>
       
      </div>
    )
    
}
export default Activity