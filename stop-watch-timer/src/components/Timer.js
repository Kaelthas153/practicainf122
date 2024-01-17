import React, { useState } from "react";
import BotonesCronometro from "./Button.js"
import "../styles/Timer.css";

const Temporizador = () => {
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [milisegundos, setMilisegundos] = useState(0);
    const [intervalID, setIntervalID] = useState(null);
  
    const manejarTemporizador = () => {
      const newIntervalID = setInterval(() => {
        setMilisegundos((prevMilisegundos) => {
          const nuevoMilisegundos = (prevMilisegundos + 10) % 1000;
          setSegundos((prevSegundos) => {
            if (nuevoMilisegundos >= 990) {
              const nuevoSegundos = prevSegundos + 1;
              setMinutos((prevMinutos) => {
                if (nuevoSegundos >= 60) {
                  return prevMinutos + 1;
                }
                return prevMinutos;
              });
              return nuevoSegundos % 60;
            }
            return prevSegundos;
          });
          return nuevoMilisegundos;
        });
      }, 10);
  
      setIntervalID(newIntervalID);
    };
  
    const handleStart = () => {
      if (!intervalID) {
        manejarTemporizador();
      }
    };
  
    const handleStop = () => {
      clearInterval(intervalID);
      setIntervalID(null);
    };
  
    const handleReset = () => {
      setMinutos(0);
      setSegundos(0);
      setMilisegundos(0);
      clearInterval(intervalID);
      setIntervalID(null);
    };
  
    return(
        <div>
            
            <h1>{`${minutos}:${segundos < 10 ? `0${segundos}` : segundos}:${milisegundos}`}</h1>
                <BotonesCronometro onStart={handleStart} onStop={handleStop} onReset={handleReset} />
            
        </div>
    );
};
export default Temporizador;