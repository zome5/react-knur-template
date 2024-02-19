import { useEffect, useState } from "react";

export const Zadanie5 = () => {

    const [dane, setDane] = useState(false);
    const [latitude, setLatitude] = useState(52.52);
    const [longitude, setLongitude] = useState(13.41);
    const linkDoAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    const changeLatitude = (e) => {
        if (e.target.value !== "") setLatitude(e.target.value)
        else if (e.target.value * 1 > 90) setLatitude(90);
        else if (e.traget.value*1 < 90) setLatitude(-90);
        else {
    setLatitude(oldge=>oldge)
}
    }
    const changeLongitude = (e) => {
        setLongitude(e.target.value);
    }
    const mujFetchBozy = async () => {
        const fetchedData = await fetch(linkDoAPI);
        const formatedData = await fetchedData.json();
        console.log("pobrano dane z API");
        console.log(formatedData);
        setDane(formatedData);
    }
        useEffect(() =>{
        const interwał = setInterval(mujFetchBozy, 6*1000)
        return () => {
            clearInterval(interwał);
        }
    },[latitude, longitude])

        useEffect(()=>{
            console.log('wykonuje sie');
            (async()=>{mujFetchBozy()})()
        },[])
         useEffect(()=>{
            console.log('wykonuje sie');
            (async()=>{mujFetchBozy()})()
        },[latitude, longitude])
    return(
    <>
      <hr/>
      <h2>Zadanie5</h2>
      <p>Latitude:</p>
      <input type="number" placeholder="ustaw latitude od -90 do 90" value={latitude} onChange={changeLatitude}/>
        <p>Longitude:</p>
      <input type="number" placeholder="ustaw longitude od -180 do 180" value={longitude} onChange={changeLongitude}/>
      <p>{latitude}, {longitude}</p>
      <div>Aktualna temperatura: {dane === false ? "pobieram dane..." : dane.current.temperature_2m}{dane === false ? null : dane.current_units.temperature_2m}</div>
      <div>Aktualna prękość wiatru: {dane === false ? "pobieram dane..." : dane.current.wind_speed_10m}{dane === false ? null : dane.current_units.wind_speed10m}</div>
      <div>Aktualna godzina: {dane === false ? "pobieram dane..." : dane.current.time}</div>
    </>
    )
}