import React from "react";
import "../styles/Button.css";

const BotonesCronometro = ({ onStart, onStop, onReset}) =>{
    return(
        <div className="button-box">
            <button className="start" onClick={onStart}>Start</button>
            <button className="stop" onClick={onStop}>Stop</button>
            <button className="reset" onClick={onReset}>Reset</button>
        </div>
    );
};

export default BotonesCronometro;