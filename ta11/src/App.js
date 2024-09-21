import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [temporizador, setTemporizador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTemporizador(prevTemporizador => prevTemporizador + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);


  return (
    <div className="App">
      <h1>Temporizador: {temporizador} segundos</h1>
    </div>
  );
}

export default App;
