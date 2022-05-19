import React from "react";

import Quiz from "./Quiz";

export default function Quizzes({ questions, optionsClick, startAgain }) {

    const [checkingAnswers, setCheckingAnswers] = React.useState(false)

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
          checkingAnswers={checkingAnswers}
        />
    ))

    function countCorrectAnswers() {
        const count = questions.filter(que => (
            que.option_selected === que.correct_answer
        ))
        return count.length
    }

    return (
        <div className="main-container">
            <h2 style={{margin: "0 auto 20px", zIndex: "100", borderBottom: "2px solid lightblue"}}>
                Select the correct answer!
            </h2>
            <div className="quizzes-container">
                {quizzes}
            </div>
            {
                checkingAnswers ?
                (   
                    <div className="submit-container">
                        <h3>You've got {countCorrectAnswers()}/10 questions correct!</h3>
                        <button className="submit-quiz" onClick={startAgain}>Start Again</button>
                    </div>
                ) :
                (   
                    <div className="submit-container">
                        <button 
                            className="submit-quiz" 
                            onClick={() => setCheckingAnswers(prev => !prev)}
                        >
                            Check My Answers
                        </button>
                    </div>
                )
            }
        </div>
    )
}