import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Weather() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80c750ac17mshb567771a15d46e0p159832jsn48347c3a3b68",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const [temp, setTemp] = useState("");
  const [max_temp, setmax] = useState("");
  const [min_temp, setmin] = useState("");
  const [humidity, sethum] = useState("");
  const [feels_like, setfeel] = useState("");
  const [city, setcity] = useState("");
  const [wind_speed, setwind_speed] = useState("");
  const [wind_degrees, setwind_degrees] = useState("");
  const [sunrise, setsunrise] = useState("");
  const [sunset, setsunset] = useState("");
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("Delhi");
  const [error, seterror] = useState(false);

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    const formattedDateTime = date.toUTCString(); 
    return formattedDateTime;
  };

  const popular_cities = [
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Bangalore",
    "Tokyo",
    "New York",
    "London",
    "Paris",
    "Dubai",
  ];

  const weather = (city_val) => {
    setcity(city_val[0].toUpperCase() + city_val.slice(1) + " Weather");
    setloading(true);
    setcity(city_val[0].toUpperCase() + city_val.slice(1) + " Weather");
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        city_val,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.error);
        if (response.error !== undefined) seterror(true);
        else {
          console.log("here");
          seterror(false);
          setTemp(response.temp);
          setmax(response.max_temp);
          setmin(response.min_temp);
          sethum(response.humidity);
          setfeel(response.feels_like);
          setwind_speed(response.wind_speed);
          setwind_degrees(response.wind_degrees);
          setsunrise(convertTimestamp(response.sunrise));
          setsunset(convertTimestamp(response.sunset));
          setloading(false);
        }
      });
  };

  useEffect(() => {
    weather("delhi");
  }, []);

  return (
    <Bg>
      <nav
        className="navbar navbar-expand-lg bg-body-secondary"
        style={{ marginTop: "80px", paddingInline: "30px" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div
            className="navbar-brand"
            style={{ marginLeft: "30px", fontSize: "23px" }}
          >
            Weather
          </div>
          <div id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                id="search_val"
                placeholder="Enter Place"
                aria-label="Search"
                style={{ backgroundColor: "rgb(69, 67, 67)" }}
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-light"
                id="search_btn"
                onClick={() => weather(search)}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {error ? (
        <div
          style={{
            color: "black",
            marginRight: "10px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          Could not find weather of searched location{" "}
        </div>
      ) : loading ? (
        <center style={{ marginTop: "20px" }}>
          <span
            style={{ color: "black", marginRight: "10px", fontSize: "20px" }}
          >
            Fetching weather details
          </span>
          <img src="./images/Spin.gif"></img>
        </center>
      ) : (
        <>
          <center>
            <h1 className="head my-5">
              <span id="city" style={{ color: "black", fontSize: "60px" }}>
                {city}
              </span>
            </h1>
          </center>

          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mx-3">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Temperature</h4>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#d3cbb1" }}
                >
                  <h1 className="card-title pricing-card-title">
                    <span id="temp1" style={{ color: "black",fontSize:"40px" }}>
                      {temp}&#xb0;C
                    </span>
                  </h1>
                  <ul
                    className="list-unstyled mt-3 mb-4"
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <li style={{ fontSize: "20px" }}>
                      Min Temp: {min_temp}&#xb0;C <span id="min_temp"></span>
                    </li>
                    <li style={{ fontSize: "20px" }}>
                      Max Temp: {max_temp}&#xb0;C <span id="max_temp"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Humidity</h4>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#d3cbb1" }}
                >
                  <h1 className="card-title pricing-card-title">
                    <span id="humidity1" style={{ color: "black",fontSize:"40px"}}>
                      {humidity}%
                    </span>
                  </h1>
                  <ul
                    className="list-unstyled mt-3 mb-4"
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <li style={{ fontSize: "20px" }}>
                      Feels like: {feels_like}&#xb0;C{" "}
                      <span id="feels_like"></span>
                    </li>
                    <li style={{ fontSize: "20px" }}>
                      Wind Degrees: {wind_degrees}{" "}
                      <span id="wind_degrees"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Wind/Sun</h4>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#d3cbb1" }}
                >
                  <h1 className="card-title pricing-card-title">
                    <span id="wind_speed1" style={{ color: "black",fontSize:"40px" }}>
                      {wind_speed} km/hr
                    </span>
                  </h1>
                  <ul
                    className="list-unstyled mt-3 mb-4"
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <li style={{ fontSize: "20px" }}>
                      Sunrise: {sunrise} <span id="sunrise"></span>
                    </li>
                    <li style={{ fontSize: "20px" }}>
                      Sunset: {sunset}
                      <span id="sunset"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="text-dark"
          style={{ fontSize: "30px", marginBottom: "10px" }}
        >
          Weather of some popular cities
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Cities</th>
              <th scope="col">Temp</th>
              <th scope="col">Max</th>
              <th scope="col">Min</th>
              <th scope="col">Humidity</th>
              <th scope="col">Feels Like</th>
              <th scope="col">Wind Speed</th>
              <th scope="col">Wind Degrees</th>
              <th scope="col">Sunrise</th>
              <th scope="col">Sunset</th>
            </tr>
          </thead>
          <tbody>
            {popular_cities.map((city, index) => {
              return <City_row city={city} key={index}></City_row>;
            })}
          </tbody>
        </table>
      </div>
    </Bg>
  );
}
const City_row = ({ city }) => {

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDateTime = date.toUTCString();
    return formattedDateTime;
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80c750ac17mshb567771a15d46e0p159832jsn48347c3a3b68",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const [temp, setTemp] = useState("");
  const [max_temp, setmax] = useState("");
  const [min_temp, setmin] = useState("");
  const [humidity, sethum] = useState("");
  const [feels_like, setfeel] = useState("");
  const [wind_speed, setwind_speed] = useState("");
  const [wind_degrees, setwind_degrees] = useState("");
  const [sunrise, setsunrise] = useState("");
  const [sunset, setsunset] = useState("");

  useEffect(() => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTemp(response.temp);
        setmax(response.max_temp);
        setmin(response.min_temp);
        sethum(response.humidity);
        setfeel(response.feels_like);
        setwind_speed(response.wind_speed);
        setwind_degrees(response.wind_degrees);
        setsunrise(convertTimestamp(response.sunrise));
        setsunset(convertTimestamp(response.sunset));
      });
  }, []);

  return (
    <tr>
      <td style={{fontWeight:"bold"}}>{city}</td>
      <td>{temp}&#xb0;C</td>
      <td>{feels_like}&#xb0;C</td>
      <td>{max_temp}&#xb0;C</td>
      <td>{min_temp}&#xb0;C</td>
      <td>{humidity}</td>
      <td>{wind_speed} km/hr</td>
      <td>{wind_degrees}</td>
      <td>{sunrise}</td>
      <td>{sunset}</td>
    </tr>
  );
};
const Bg = styled.section`
  background-color: #d3cbb1;
  height: max-content;
  padding-bottom: 10px;
`;
