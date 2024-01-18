import React, { useState } from 'react';
import "../Styles/Button.css";
const Button = ({ toggleTitle }) => {
  return (
    <button  onClick={toggleTitle} className='button'>
      Mostrar/Ocultar Título
    </button>
  );
};

export default Button;
