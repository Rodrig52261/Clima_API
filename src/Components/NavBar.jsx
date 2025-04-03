import React, { useState, useContext } from 'react';
import { ClimaContext } from '../ClimaGlobal'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

function NavBar() {
  const { setCidade, setDadosClima } = useContext(ClimaContext);
  const [cidadeInput, setCidadeInput] = useState("");
  const [erro, setErro] = useState(null);

  const buscarClima = async () => {
    if (!cidadeInput) return;

    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: cidadeInput,
          lang: "pt_br",
          units: "metric",
          appid: `${API_KEY}`,
        },
      });

      setCidade(cidadeInput);
      setDadosClima(response.data);
      setErro(null);
    } catch (error) {
      setErro("Cidade não encontrada. Procure outra.");
      setDadosClima(null);
    }
  };

  return (
    <div className="navbar">
      <h2>Clima Hoje</h2>
      <div className="navbar-busca">
        <input
          type="text"
          placeholder="Procure pela cidade"
          value={cidadeInput}
          onChange={(e) => setCidadeInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarClima()}
        />
        <button onClick={buscarClima}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {erro && <p style={{ color: "black" }}>{erro}</p>}
      </div>
    </div>
  );
}

export default NavBar;
