import React,{useState} from "react";
import axios from "axios";
import "./weather.css";
export default function Weather(props){
    const[weatherData,setWeatherData] = useState({ready:false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({ready:true,temperature:response.data.main.temp,
            humidity:response.data.main.humidity,date:"wennesday 07:00",
            description:response.data.weather[0].description,
        iconUrl:"",
        wind:response.data.wind.speed, city: response.data.name});
    
    }
    
    if(weatherData.ready){
    return(
        <div className="Weather">
            <from>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." className="from-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </from>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)} </span>
                    <span className="unit">ºc</span>
                </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }
    else {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
    
    }
    
}