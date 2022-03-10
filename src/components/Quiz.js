import React from 'react'

export default function Quiz({ question, correctAnswer, incorrectAnswer }) {

    const randomIndex = Math.floor(Math.random() * 4)
    //const optionsArray = incorrectAnswer.slice()
    console.log(incorrectAnswer)
    //optionsArray.splice(randomIndex, 0, correctAnswer)
    //console.log(optionsArray)


    return (
        <div>
            <h2>{question}</h2>

        </div>
    )
}