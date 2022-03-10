import React from "react";

import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App() {

  const [startQuiz, setStartQuiz] = React.useState(false)
  const [categories, setCategories] = React.useState([]);

  const [questions, setQuestions] = React.useState([])

  const [apiObj, setApiObj] = React.useState({
    category: 19,
    amount: 10,
    difficulty: "easy"
  })
  
  React.useEffect(() => (
    fetch(`https://opentdb.com/api_category.php`)
      .then(res => res.json())
      .then(data => setCategories(data.trivia_categories))
  ),[])

  React.useEffect(() => (
    fetch(`https://opentdb.com/api.php?amount=${apiObj.amount}&category=${apiObj.category}&difficulty=${apiObj.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  ),[startQuiz])

  function handleAPIChange(event) {
    console.log(event.target.innerHTML)
    setApiObj(prevObj => (
      {
        ...prevObj,
        [event.target.name]: event.target.value
      }
    ))
  }

  const quizzes = questions.map(quiz => (
    <Quiz 
      question={quiz.question} 
      correctAnswer={quiz.correct_answer} 
      incorrectAnswer={quiz.incorrectAnswer} 
    />
  ))

  return (
    <div className="App">
      <div className="block first-block"></div>
      <div className="block second-block"></div>
      { 
        !startQuiz && 
        <Start startQuiz={() => setStartQuiz(prevVal => !prevVal)} apiObj={apiObj} listoFCategories={categories} handleChange={handleAPIChange}/>
      }
      { 
        startQuiz &&
        quizzes
      }
    </div>
  );
}

export default App;
