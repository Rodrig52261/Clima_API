import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import NavBar from './Components/NavBar';
import { ClimaProvider } from './ClimaGlobal';

function App() {
  return (
    <ClimaProvider> 
      <div className='App'>
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </ClimaProvider>
  );
}

export default App;
