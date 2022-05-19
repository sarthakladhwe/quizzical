import React from "react";

export default function Option({ correctAnswer, incorrectAnswer, checkingAnswers, optionsArray, optionSelected, optionsClick, id }) {

    function showAnswers() {
        if(optionSelected) {
            const checkingOptions = optionsArray.map(option => {
                if(option === optionSelected && optionSelected === correctAnswer) {
                    return (
                        <h3 key={option} className="question-option correct-answer">{option}</h3>
                    )
                } else if(option === optionSelected && optionSelected !== correctAnswer) {
                    return (
                        <h3 key={option} className="question-option wrong-answer">{option}</h3>
                    )
                } else if(option !== optionSelected && option === correctAnswer ) {
                    return (
                        <h3 key={option} className="question-option correct-answer">{option}</h3>
                    )
                } else {
                    return (
                        <h3 key={option} className="question-option">{option}</h3>
                    )
                }
            })
            return checkingOptions
        } else {
            const checkingOptions = optionsArray.map(option => (
                option === correctAnswer ?
                <h3 key={option} className="question-option correct-answer">{option}</h3> :
                <h3 key={option} className="question-option">{option}</h3>
            ))
            return checkingOptions;
        }
    }

    function showOptions() {
        return optionsArray.map(option => (
            <h3 key={option} className="question-option" onClick={(e) => optionsClick(e, id)} style={{backgroundColor: optionSelected === option && "#D6DBF5"}}>{option}</h3>
        ))
    }

    return(
        <div className="options-container">
            {
                checkingAnswers ?
                showAnswers() :
                showOptions()
            }
        </div>
    )
}