
import React, { useState, useEffect, useReducer, useContext } from "react";
import './Top.css'
import img2 from '../../../Aseets/home.png'
import video from '../../../Aseets/video/video.mp4'
import socket from '../../../socket/socket';
import { Navigate } from "react-router-dom";
import { AppContext } from "../../../style/context/AppContext";

const listhomeinitstate = {
    loading: false,
    data: [],
    error: null
}
const listhomeReduduces = (state, action) => {
    switch (action.type) {
        case 'GET':
            return {
                ...state,
                loading: true
            }
        case 'OK':
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case 'ER':
            return {
                ...state,
                data: [],
                error: action.data
            }
        default:
    }
}

const TopContent = () => {
    const {sethomeid}=useContext(AppContext);
    const user = JSON.parse(localStorage.getItem("accessToKen"));
    //const [listhome, listhomedispatch] = useReducer(listhomeReduduces, listhomeinitstate)
    const homec = JSON.parse(localStorage.getItem("accessToKenHome"));
    // useEffect(() => {
    //     async function loadname() {
    //         listhomedispatch({
    //             type: 'GET'
    //         });
    //         try {
    //             socket.emit("getHomeUser", { _id: user._id, homeId: user.homeId })
    //             socket.on("listHomeUser", list => {
    //                 listhomedispatch({
    //                     type: 'OK',
    //                     data: list,
    //                 });
    //             })
    //         } catch (error) {
    //             listhomedispatch({
    //                 type: 'ER'
    //             });
    //         }

    //     }
    //     loadname();
    // }, [])
    const {listhome} =useContext(AppContext)
    function checkhome(newhome) {
        localStorage.setItem("accessToKenHome", JSON.stringify(newhome))
        sethomeid(newhome);
       // window.location.reload(true);
    }

    return (
        <div>
            <div className="topSection">

                <div className="cardSection flex">
                    <div className="rightCard flex">
                        <h1>Install and Control your home information</h1>
                        <p>Smart home system will serve you anytime, anywhere</p>

                        <div className="buttons flex">
                            {listhome.loading ? "" :
                                <select name="namehome" id="namehome" className="btn" value={homec} onChange={(event) => {checkhome(event.target.value)}}>
                                    {listhome.data.map((home) => (
                                        <option key={home._id} value={home._id}>{home.nameHome}</option>
                                    ))}
                                </select>
                            }
                            <button className="btn"> IOS </button>
                            <button className="btn transparent">Android</button>
                        </div>

                        <div className="videoDiv">
                            <video src={video} autoPlay loop muted></video>
                        </div>
                    </div>

                    <div className="leftCard flex">
                        <div className="main flex">
                            <div className="textDiv">
                                <h1>My Home</h1>
                                <div className="flex">
                                    <span> Heat <br /> <small> 28 °C</small> </span>
                                    <span> Humidity <br /> <small>97 %</small></span>
                                </div>
                            </div>

                            <div className="imgDiv">
                                <img src={img2} alt="led" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent