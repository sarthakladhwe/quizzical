import React from "react";
import { nanoid } from 'nanoid'

import Start from "./components/Start";
import Quizzes from "./components/Quizzes";

function App() {

  const [startQuiz, setStartQuiz] = React.useState(false)
  // Store the response of all the categories through API 
  const [categories, setCategories] = React.useState([])

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

  // An object to hold the values that can be used in API calls
  const [apiObj, setApiObj] = React.useState({
    category: 9,
    amount: 10,
    difficulty: difficultyOptions.filter(e => e.selected)
  })

  // An API call to fetch all the available categories
  React.useEffect(() => (
    fetch(`https://opentdb.com/api_category.php`)
      .then(response => response.json())
      .then(data => setCategories(data.trivia_categories))
  ),[])

  React.useEffect(() => (
    setApiObj(prevObj => (
      {
        ...prevObj,
        difficulty: difficultyOptions.filter(e => e.selected)
      }
    ))
  ),[difficultyOptions])

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${apiObj.amount}&category=${apiObj.category}&difficulty=${apiObj.difficulty[0].difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        setQuestions(
          data.results.map(res => (
            {
              question: res.question,
              correct_answer: res.correct_answer,
              incorrect_answers: res.incorrect_answers,
              options_array: optionsAnswers(res.correct_answer, res.incorrect_answers),
              difficulty: res.difficulty,
              id: nanoid(),
              option_selected: ""
            }
          ))
        )
      })
  },[apiObj])

  // Function to create a random options array to display on UI - merging correct and incorrect answers
  function optionsAnswers(correct_Answer, incorrect_Answers) {
    const randomIndex = Math.floor(Math.random() * 4)
    const optionsArray = incorrect_Answers.slice()
    optionsArray.splice(randomIndex, 0, correct_Answer)
    return optionsArray
  }

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

  function optionsClick(event, id) {
    setQuestions(prevQuestions => prevQuestions.map(question => (
      question.id === id ?
      {
        ...question,
        option_selected: event.target.innerHTML
      } :
      question
    )))
  }

  function startAgain() {
    setStartQuiz(prevValue => !prevValue)
    setDifficultyOptions(prev => prev.map(diff => (
      diff.difficulty === "easy" ? {...diff, selected: true} : {...diff, selected: false}
    )))
  }

  return (
    <div className="App">
      <div className="block first-block"></div>
      <div className="block second-block"></div>
      { 
        !startQuiz &&
        <Start
          key={nanoid()}
          startQuiz={() => setStartQuiz(prevValue => !prevValue)}
          apiObj={apiObj}
          listoFCategories={categories} 
          difficultyOptions={difficultyOptions}
          handleChange={handleAPIChange}
          difficultySelected={difficultySelected}
        />
      }
      { 
        startQuiz &&
        <Quizzes 
          key={nanoid()} 
          questions={questions}
          optionsClick={optionsClick}
          startAgain={startAgain}
        />
      }
    </div>
  );
}

export default App;
