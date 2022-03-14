import React from "react";

export default function Option({ correctAnswer, incorrectAnswer, optionsArray }) {

    const options = optionsArray.map(option => (
        <h3 className="question-option">{option}</h3>
    ))

    return(
        <div className="options-container">
            {options}
        </div>
    )
}