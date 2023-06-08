 
import iro from '@jaames/iro';
import './Activity.css'
import React, { useEffect, useState, } from "react";
import ColorPicker from './colorPicker'


 

const Activity =({ color, onChange } )=>{
    const [state, setstate] = useState({
        color: '#ffffff',
      })
    return(
        <div>
           
        <ColorPicker
          color={state.color}
          onChange={(color) => setstate({ ...state, color: color })}
        />
        
      </div>
    )
    
}
export default Activity