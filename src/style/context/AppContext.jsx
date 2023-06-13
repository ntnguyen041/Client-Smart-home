import {createContext, useState} from "react";

export const AppContext =createContext({});

export const AppProvider = ({children})=>{
    const [isDay,setIsDay]=useState(true);
    const themeStyle ={
        light:'light',
        night:'night'
    }
    return <AppContext.Provider value={{isDay,setIsDay,themeStyle:themeStyle[isDay?'night':'light']}}>
        {children}
    </AppContext.Provider>
};