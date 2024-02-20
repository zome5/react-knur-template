import { useEffect, useState } from "react";

export const Zadanie5 = () => {

    const [dane, setDane] = useState(false);
    const [latitude, setLatitude] = useState(52.52);
    const [longitude, setLongitude] = useState(13.41);
    const [alert, setAlert] = useState("");
    const linkDoAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    const changeLatitude = (e) => {
        if (e.target.value === "") setLatitude(e.target.value)
        else if (e.target.value*1 > -90 && e.target.value*1<90) setLatitude(e.target.value);
        else if (e.target.value* 1 >= 90) setLatitude(90);
        else if (e.target.value*1 <= -90) setLatitude(-90);

    }
    const changeLongitude = (e) => {
        if (e.target.value === "") setLongitude(e.target.value)
        else if (e.target.value*1 > -180 && e.target.value*1<180) setLongitude(e.target.value);
        else if (e.target.value* 1 >= 180) setLongitude(180)
        else if (e.target.value*1 <= -180) setLongitude(-180);
    }
    const mujFetchBozy = async () => {
        if (latitude !=="" && longitude !== "") {      
            const fetchedData = await fetch(linkDoAPI);
            const formatedData = await fetchedData.json();
            setDane(formatedData);
            formatedData.current.temperature_2m < -10 ? setAlert('!!!ALE PIZGA!!!') : setAlert("");
        }
    }
    const getColors = (temperature) => {
        if (temperature === undefined) return {backgroundColor: 'fff', color: '000'}
        const red = temperature*4;
        const blue = -temperature;
        return {
            backgroundColor: `rgb(${red} 0 ${blue})`,
            color: `rgb(${255-red} 130 ${255-blue})`
        }
    }
    // ustawia / usuwa interwał co każdą zmianę w dependency array i po zamontowaniu komponenta:
        useEffect(() =>{
        const interwał = setInterval(mujFetchBozy, 60*1000)
        return () => {
            clearInterval(interwał);
        }
    },[latitude, longitude])
    // pobiera dane po zmianie w depndency array:
         useEffect(()=>{
            (async()=>{mujFetchBozy()})()
        },[latitude, longitude])
    return(
    <div style={!dane ? null: {backgroundColor: getColors(dane?.current.temperature_2m).backgroundColor, color: getColors(dane?.current.temperature_2m).color}}>
      <hr/>
      <h2>Zadanie5</h2>
      <p>Latitude:</p>
      <input type="number" value={latitude} onChange={changeLatitude}/>
        <p>Longitude:</p>
      <input type="number" value={longitude} onChange={changeLongitude}/>
      <div>Aktualna temperatura: {!dane ? "pobieram dane..." : dane?.current.temperature_2m}{dane === false ? null : dane?.current_units.temperature_2m}</div>
      <div>Aktualna prękość wiatru: {!dane ? "pobieram dane..." : dane?.current.wind_speed_10m}{dane === false ? null : dane?.current_units.wind_speed10m}</div>
      <div>Aktualna godzina: {!dane ? "pobieram dane..." : dane?.current.time}</div>
      <h1 style={{color: 'red', background: `url('https://th.bing.com/th/id/OIP.KXYP-u7mRzawwrOtB_TrugHaE8?rs=1&pid=ImgDetMain')`, textAlign:"center"}}>{alert}</h1>
    </div>
    )
}