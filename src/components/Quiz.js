import React from 'react'

import Option from './Option'

export default function Quiz({ question, correctAnswer, incorrectAnswer, optionsArray, optionsClick, optionSelected, id }) {

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <Option
                correctAnswer={correctAnswer} 
                incorrectAnswer={incorrectAnswer} 
                optionsArray={optionsArray} 
                optionsClick={optionsClick}
                optionSelected={optionSelected}
                id={id}
            />
            <div className="horizontal-line"></div>
        </div>
    )
}