import React from "react";

export default function Option({ correctAnswer, incorrectAnswer, optionsArray, optionSelected, optionsClick }) {

    const options = optionsArray.map(option => (
        <h3 className="question-option" onClick={optionsClick} style={{backgroundColor: optionSelected === option && "#D6DBF5"}}>{option}</h3>
    ))

    return(
        <div className="options-container">
            {options}
        </div>
    )
}