import React from 'react'

import Option from './Option'

export default function Quiz({ question, correctAnswer, incorrectAnswer, correctAnswers, optionsArray, optionsClick, optionSelected, id }) {

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <Option
                key={id}
                correctAnswer={correctAnswer} 
                incorrectAnswer={incorrectAnswer} 
                optionsArray={optionsArray} 
                optionsClick={optionsClick}
                optionSelected={optionSelected}
                correctAnswers={correctAnswers}
                id={id}
            />
            <div className="horizontal-line"></div>
        </div>
    )
}