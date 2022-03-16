import React from "react";

import Quiz from "./Quiz";

export default function Quizzes({ questions, optionsClick }) {

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
        />
    ))

    return (
        <div className="quizzes-container">
            {quizzes}
        </div>
    )
}