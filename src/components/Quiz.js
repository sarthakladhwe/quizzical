import React from 'react'

import Option from './Option'

export default function Quiz({ question, correctAnswer, incorrectAnswer, optionsArray }) {

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <Option correctAnswer={correctAnswer} incorrectAnswer={incorrectAnswer} optionsArray={optionsArray}/>
            <div className="horizontal-line"></div>
        </div>
    )
}