import React from "react";

import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App() {

  const [startQuiz, setStartQuiz] = React.useState(false)
  // Store the response of all the categories through API 
  const [categories, setCategories] = React.useState([]);

  const [questions, setQuestions] = React.useState([])

  const [difficultyOptions, setDifficultyOptions] = React.useState([
    {
        difficulty: "easy",
        selected: true
    },
    {
        difficulty: "medium",
        selected: false
    },
    {
        difficulty: "hard",
        selected: false
    }
  ])

  const selectedDifficulty = difficultyOptions.forEach(option => (
    option.selected && option.difficulty
  ))

  console.log(selectedDifficulty)

  const [apiObj, setApiObj] = React.useState({
    category: 19,
    amount: 10,
    difficulty: selectedDifficulty
  })
  
  React.useEffect(() => (
    fetch(`https://opentdb.com/api_category.php`)
      .then(response => response.json())
      .then(data => setCategories(data.trivia_categories))
  ),[])

  React.useEffect(() => (
    fetch(`https://opentdb.com/api.php?amount=${apiObj.amount}&category=${apiObj.category}&difficulty=${apiObj.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  ),[startQuiz])

  function handleAPIChange(event) {
    setApiObj(prevObj => (
      {
        ...prevObj,
        [event.target.name]: event.target.value
      }
    ))
  }

  function difficultySelected(event) {
    setDifficultyOptions(prevSelected => prevSelected.map(diff => (
      event.target.innerHTML === diff.difficulty ? {...diff, selected: true } : {...diff, selected: false }
    )))
  }

  console.log(questions)

  const quizzes = questions.map(quiz => (
    <Quiz 
      question={quiz.question} 
      correctAnswer={quiz.correct_answer} 
      incorrectAnswer={quiz.incorrect_answers} 
    />
  ))

  return (
    <div className="App">
      <div className="block first-block"></div>
      <div className="block second-block"></div>
      { 
        !startQuiz && 
        <Start 
          startQuiz={() => setStartQuiz(prevVal => !prevVal)}
          apiObj={apiObj} 
          listoFCategories={categories} 
          difficultyOptions={difficultyOptions}
          handleChange={handleAPIChange}
          difficultySelected={difficultySelected}
          />
      }
      { 
        startQuiz &&
        quizzes
      }
    </div>
  );
}

export default App;
