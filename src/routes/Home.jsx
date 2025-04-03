import React, { useContext } from 'react';
import { ClimaContext } from '../ClimaGlobal';

function Home() {
  const { dadosClima } = useContext(ClimaContext);

  return (
  <div className="container-clima"> 
    <div className='color'>
      <h1>Previsão do Tempo</h1>
      {dadosClima ? (
        <div className="previsao">
          <h3>{dadosClima.name}, {dadosClima.sys.country}</h3>
          <p><strong>Temperatura:</strong> {dadosClima.main.temp}°C</p>
          <p><strong>Clima:</strong> {dadosClima.weather[0].description}</p>
          <p><strong>Umidade:</strong> {dadosClima.main.humidity}%</p>
          <p><strong>Vento:</strong> {dadosClima.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Pesquise uma cidade para ver o clima.</p>
      )}
    </div>
  </div>   
  );
}

export default Home;
