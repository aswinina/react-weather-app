import React from "react";
import "./weather.css";
export default function Weather(){
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
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07.00</li>
                <li>mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">6</span><span className="unit">ºc</span>
                </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}