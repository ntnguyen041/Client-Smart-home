import React, { useEffect, useState, } from "react";
import Listing from "../Listing Section/Listing";
import Activity from "../Activity Section/Activity";
import Top from "../Top Section/Top";
const home =()=>{
    return(
      <div>
            <Top/>
            <div className="bottom flex">
                <Listing/>
                <Activity/>
            </div>
        </div>
    )
    
}
export default home