import logo from './logo.svg';
import './App.css';
import LogoCalc from './img/logocalc.png';
import Basurero from './img/basurero.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {
  
  const [numClics, setNumClics] = useState(0); 
  
  const manejarClic = () => {
    setNumClics(numClics + 1); 
  }

  const reiniciarContador = () => {
  setNumClics(0);
  }

  const restarUno = () => {
  setNumClics(numClics - 1);
  }


  return (
   
   <div className="App">

      <div className='contenedor-logo'>

        <img 
        alt='logocalculadora'  
        className='logocalc'
        src={LogoCalc} 
        />
        <div className='contenedor-logo-texto'>
            <h1 className='textodelogo'>CALCULADORA DE JERE</h1>
            <p className='textodelogo'>la más rapida del Oeste</p>
        </div>

      </div>

      <div className='contenedor-calculadora'>
          <div className='pantalla'>
            <Contador 
          numClics={numClics}
            />
          </div>

          <Boton 
          texto="+"
          />

          <Boton
          texto="-" 
          />

          <Boton
          texto="trash"
          />

      </div>

     
    </div>      
  );
}

export default App;
