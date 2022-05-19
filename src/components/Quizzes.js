import React from "react";

import Quiz from "./Quiz";

export default function Quizzes({ questions, optionsClick, checkAnswers, correctAnswers }) {

    const quizzes = questions.map(quiz => (
        <Quiz
          key={quiz.id}
          id={quiz.id}
          question={quiz.question} 
          correctAnswer={quiz.correct_answer} 
          incorrectAnswer={quiz.incorrect_answers}
          optionsArray={quiz.options_array}
          optionSelected={quiz.option_selected}
          optionsClick={optionsClick}
          correctAnswers={correctAnswers}
        />
    ))

    return (
        <div className="main-container">
            <h1>Solve</h1>
            <div className="quizzes-container">
                {quizzes}
            </div>
            <div className="sumbit-container">
                <button className="submit-quiz" onClick={checkAnswers}>Submit</button>
            </div>
        </div>
    )
}