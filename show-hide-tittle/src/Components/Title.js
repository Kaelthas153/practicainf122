import React from 'react';
import "../Styles/Title.css"
const Title = ({ isVisible }) => {
  return isVisible ? <h2>Este es un titulo</h2> : null;
};

export default Title;
