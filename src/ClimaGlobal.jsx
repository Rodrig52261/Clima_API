import React, { createContext, useState } from 'react';

export const ClimaContext = createContext();

export function ClimaProvider({ children }) {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);

  return (
    <ClimaContext.Provider value={{ cidade, setCidade, dadosClima, setDadosClima }}>
      {children}
    </ClimaContext.Provider>
  );
}
