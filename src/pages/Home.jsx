import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [weather, setWeather] = useState("");
  const [data, setData] = useState(null);
  const TOKEN = "e3b2b4ada691d782341413e2952e86e4";
  const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault();
    if (weather) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${TOKEN}&units=metric`)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function handleUser(){
    navigate('/users')
  }

  return (
    <div className=" flex flex-col w-[350px] rounded-md p-[8px] mt-[50px] border mx-auto">
      <h2>Live Weather Info</h2>
      <form className="flex mt-[10px]">
        <input
          type="text"
          value={weather}
          onChange={(e) => {
            setWeather(e.target.value);
          }}
          placeholder="Enter City"
          className="w-[300px] border p-[12px] rounded-md"
        />
        <button className="btn bg-blue-600 text-white p-[12px] rounded-md" onClick={handleClick}>Search</button>
      </form>
      {data && (
        <div className="weather-info mt-[30px] text-2xl p-10px rounded-md w-[300px] border">
          <h2>Harorat: {data.main.temp}°C</h2>
          <h2>Namlik: {data.main.humidity}%</h2>
          <h2>SHamol tezligi: {data.wind.speed} m/s</h2>
        </div>
      )}
      <button className="btn bg-blue-600 mt-[30px] text-white p-[12px] rounded-md" onClick={handleUser}>Users</button>
    </div>
  );
}

export default Home;
