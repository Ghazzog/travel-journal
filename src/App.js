import './App.css';
import data from "./data.js";
import React from "react"
import Travel from "./Travel.js";
import {FaMapMarkerAlt} from 'react-icons/fa';

function App() {
    const dataMap = data.map(data => {
      return(
      <div className="wrapper">
      <img src={data.imageUrl}></img>
      <div className="sub-wrapper">
        <div className="location-maps">    
          <p className="location"><FaMapMarkerAlt/>{data.location}</p>
          <a href={data.googleMapsUrl} target="_blank" className="links">View in google maps</a>    
        </div>

        <h1>{data.title}</h1>
        <p className="dates">{data.startDate} - {data.startDate}</p>
        <p>{data.description}</p>
      </div>
      </div>)
    })

 return (
  <div>
      <header>
        my travel journal
        </header>
      {dataMap}
  </div>
 )
}



export default App;
