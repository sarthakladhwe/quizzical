import React from "react";

export default function Option({ difficulty, handleChange }) {
    return(
        <h3 className="option" onClick={handleChange} value={difficulty} name={difficulty}>{difficulty}</h3>
    )
}