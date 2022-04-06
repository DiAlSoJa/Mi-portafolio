import './App.css';
import React,{useState} from 'react';


const api = {
  key: "6bb7851350cbd1e62be9a885258b91d1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState('');

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) =>{
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    
    let day = dias[d.getDay()];
    let date = d.getDate();
    let month = meses[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text" 
          onChange={(e) => setQuery(e.target.value)} 
          value={query}
          className="search-bar" 
          placeholder="Buscar..."
          onKeyPress={search}/>
        </div>
        {(typeof weather.main != "undefined")?
        <>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </>
        :
        ("")
        }
        
      </main>
    </div>
  );
}

export default App;
