import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
export default function Searchbox({updateinfo}) {
    let [city,setCity] = useState("");
    let [err,seterr] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "0738d931fa0e1dc34c73580cf55e3244"

    
    let handleChange = (e) =>{
        setCity(e.target.value);
    };
    let handleSubmit = async (e)=> {
        try {
            e.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeather();
        updateinfo(newinfo);
        }catch(err){
            seterr(true);
        }

    };
    let getWeather = async ()=>{
        try {

            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonRes = await responce.json();
            let result = {
                city:city,
                tem:jsonRes.main.temp,
                temMax:jsonRes.main.temp_max,
                temMin:jsonRes.main.temp_min,
                humidity: jsonRes.main.humidity,
                feelslike: jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description,
    
            }
            console.log(result);
            return result;
    
    
        }catch(err){
            throw err;
            
        }
    };
    
    return (
        <div className = "Searchbox">
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label=" Search City" variant="outlined" 
        value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button className='btn'onClick ={handleSubmit}variant="contained" type="submit">Search</Button>
        {err&&<p style={{color:"red"}}>No Such Place Exists !</p>}
        </form>
        </div>
    );
}

