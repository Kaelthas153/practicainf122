import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import "../styles/ProgressBarContainer.css"

const ProgressBarContainer = () => {
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);

    // Validar que el valor no sea menor que 0
    value = Math.max(value, 0);

    // Validar que el valor no supere 100
    value = Math.min(value, 100);

    setProgress(value);
  };

  return (
    <div className='main-box'>
      <label htmlFor="progressInput" className='input-label'>Introduce un número: </label>
      <input
        type="number"
        id="progressInput"
        value={progress}
        onChange={handleInputChange}
        max={100}  // Establecer el límite en el input
        className='input-number'
      />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgressBarContainer;
