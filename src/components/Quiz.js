import React from 'react'

export default function Quiz({ question, correctAnswer, incorrectAnswer }) {

    const randomIndex = Math.floor(Math.random() * 4)
    const optionsArray = incorrectAnswer.slice()
    optionsArray.splice(randomIndex, 0, correctAnswer)

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <div className="question-options">
                
            </div>
            <hr />
        </div>
    )
}