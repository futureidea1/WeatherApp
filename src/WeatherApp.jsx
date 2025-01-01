import InfoBox from "./InfoBox"
import Searchbox from "./Searchbox"
import { useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]= useState({
        
            city: "Delhi",
            tem:23.3,
            temMax:24,
            temMin:2,
            humidity: 9,
            feelslike: 8,
            weather : "haze",
    
        
    });
    let updateinfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <>
        <div style={{textAlign:"center",color:"lightyellow"}}><h2>WeatherHub <CloudIcon/></h2></div>
        <Searchbox updateinfo={updateinfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}