import React from "react";
import Weather from "./weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div classNmae="container">
        <Weather defaultCity="New York"/>
      <footer>
        This project was coded by{" "}<a href="https://aswinisureddy-profile.netlify.app/" target="_blank" rel=" " >Aswini Sureddy </a> {" "} and is {""}
      <a href="https://github.com/aswinina/react-weather-app" target="_blank" rel=" ">open sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

 