import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let date = new Date()
let curTime = date.getHours()
let value = ""
if (curTime>=1 && curTime<12){
  value = "Mornig"
}
else if(curTime>=12 && curTime<19){
  value = "Afternoon"
}
else{
  value = "Night"
}
ReactDOM.render(
  <>
    <img src={`https://source.unsplash.com/1000x1000/?nature,${value}`} alt="img"></img>
    <h1>Hellow Sir, Good {value}</h1>
  </>,
  document.getElementById("root")
);
