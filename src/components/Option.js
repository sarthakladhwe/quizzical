import React from "react";

export default function Option({ correctAnswer, incorrectAnswer, correctAnswers, optionsArray, optionSelected, optionsClick, id }) {

    correctAnswers.checkAnswers === true && console.log(correctAnswers);
    if(correctAnswers.checkAnswers) {
        const options = optionsArray.map(option => {
            <h3 className="question-option" style={{backgroundColor: optionSelected === option && "#D6DBF5"}}>{option}</h3>
        })
    }

    const options = optionsArray.map(option => (
        <h3 className="question-option" onClick={(e) => optionsClick(e, id)} style={{backgroundColor: optionSelected === option && "#D6DBF5"}}>{option}</h3>
    ))

    return(
        <div className="options-container">
            {options}
        </div>
    )
}