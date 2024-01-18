
import React from 'react';
import '../styles/ProgressBar.css';  // Asegúrate de importar el archivo CSS

const ProgressBar = ({ progress }) => {
  return (
    <div className="containerStyles">
      <div className="barStyles" style={{ width: `${progress}%` }}>
        <div className="percentageStyles">{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
