import React from "react";

export default function FormattedDate(props){
    console.log(props.date);
    let days=["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[props.data.getDay()];
    let hours=props.data.getHours();
    if(hours < 10){
        hours = `0${hours}`;
    }
let minutes = props.date.getMinutes();
if(minutes < 10){
    minutes = `0${minutes}`;
}
return(<div>{day} {hours}:{minutes}</div>);
}