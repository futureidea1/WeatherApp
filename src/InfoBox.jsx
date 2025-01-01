import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
export default function InfoBox({info}) {
    let IMG_URL = "https://images.unsplash.com/photo-1661487007936-857d6635319e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    let HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=1024x1024&w=is&k=20&c=QhEOtUgcu5E94FWjghUGyMZMUSF3DckCOvL7OqfgAVE="
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
    return (
        
        <div className="infobox">
        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(info.tem <= 15 && info.humidity <= 50) 
        ? COLD_URL 
        : info.humidity > 50 
            ? RAIN_URL 
            : HOT_URL}
          
          
        title="green iguana"
      />
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {(info.tem <= 15 && info.humidity <= 50) 
        ? <AcUnitSharpIcon/> 
        : info.humidity > 50 
            ? <ThunderstormSharpIcon/>
            : <WbSunnySharpIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
        <p>Temp = {(info.tem - 273.15).toFixed(1)}&deg;C</p>

          <p>Humidity = {info.humidity}</p>
          <p>MinTemp = {info.temMin}&deg;C</p>
          <p>MixTemp = {info.temMax}&deg;C</p>
          <p>The weather can be described as {info.weather} feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
        
    );
}