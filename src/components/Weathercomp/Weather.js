import React, { useState } from 'react'
import styled from 'styled-components'

export default function Weather() {
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "80c750ac17mshb567771a15d46e0p159832jsn48347c3a3b68",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      let [temp,setTemp]=useState("");
      let [max_temp,setmax]=useState("");
      let [min_temp,setmin]=useState("");
      let [humidity,sethum]=useState("");
      let [feels_like,setfeel]=useState("");
      let [city,setcity]=useState("");
      let [wind_speed,setwind_speed]=useState("");
      let [wind_degrees,setwind_degrees]=useState("");
      let [sunrise,setsunrise]=useState("");
      let [sunset,setsunset]=useState("");
      const weather = (city_val) => {
        setTimeout(
          () =>
            (setcity(city_val[0].toUpperCase() + city_val.slice(1)+" Weather")), 
          1000
        );
        fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
            city_val,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setTemp(response.temp + "°C");
            setfeel(response.feels_like + "°C");
            sethum( response.humidity);
            setmin( response.min_temp + "°C");
            setmax(response.max_temp + "°C");
            setwind_degrees(response.wind_degrees);
            setsunrise(response.sunrise);
            setsunset(response.sunset);
            setwind_speed(response.wind_speed);
          });
        
      };
      if(temp===""){
        weather("Delhi")
      }
      
  return (
    <div>
        <Bg>
              <nav className="navbar navbar-expand-lg bg-body-secondary" style={{marginTop:"80px"}} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Weather</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              id="search_val"
              placeholder="Enter Place"
              aria-label="Search"
              style={{backgroundColor: "rgb(69, 67, 67)"}}
              value=""
            />

            <button type="button" className="btn btn-outline-light" id="search_btn" onClick={()=>weather("chicago")}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <center>
      <h1 className="head my-5">
        <span id="city"  style={{color:"black"}}>{city}</span>
      </h1>
    </center>

    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mx-3">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Temperature</h4>
          </div>
          <div className="card-body" style={{backgroundColor:"#d3cbb1"}} >
            <h1 className="card-title pricing-card-title">
              <span id="temp1" style={{color:"black"}}>{temp}</span>
            </h1>
            <ul className="list-unstyled mt-3 mb-4" style={{color:"black"}}>
              <li>Temp is {temp} <span id="temp"></span></li>

              <li>Min Temp: {min_temp} <span id="min_temp"></span></li>
              <li>Max Temp: {max_temp} <span id="max_temp"></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Humidity</h4>
          </div>
          <div className="card-body" style={{backgroundColor:"#d3cbb1"}}>
            <h1 className="card-title pricing-card-title">
              <span id="humidity1" style={{color:"black"}}>{humidity}</span>
            </h1>
            <ul className="list-unstyled mt-3 mb-4" style={{color:"black"}}>
              <li>Humidity is {humidity}<span id="humidity"></span>%</li>
              <li>Feels like: {feels_like} <span id="feels_like"></span></li>
              <li>Wind Degrees: {wind_degrees} <span id="wind_degrees"></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Wind/Sun</h4>
          </div>
          <div className="card-body" style={{backgroundColor:"#d3cbb1"}}>
            <h1 className="card-title pricing-card-title">
              <span id="wind_speed1" style={{color:"black"}}>{wind_speed}</span>
            </h1>
            <ul className="list-unstyled mt-3 mb-4" style={{color:"black"}}>
              <li>Wind Speed is {wind_speed} <span id="wind_speed"></span> km/hr</li>
              <li>Sunrise: {sunrise} <span id="sunrise"></span></li>
              <li>Sunset: {sunset}<span id="sunset"></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Bg>
    </div>
  )
}

const Bg = styled.section`
    background-color:#d3cbb1;
    height:90vh;
`