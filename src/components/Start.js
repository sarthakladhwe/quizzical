import React from 'react'
import { nanoid } from 'nanoid'

export default function Start(props) {

    const { startQuiz, apiObj, handleChange, difficultySelected, listoFCategories, difficultyOptions } = props
    
    const options = listoFCategories.map(cat => (
        <option key={nanoid()} value={cat.id}>{cat.name}</option>
    ))

    const difficulty = difficultyOptions.map(option => (
        <h3 key={nanoid()} className="difficulty-option" onClick={difficultySelected} style={{backgroundColor: option.selected && "#D6DBF5"}}>{option.difficulty}</h3>
    ))

    return (
        <div className="start-container">
            <h1>Quizzical</h1>
            <h3>How much do you know?</h3>
            <label>
                Category:
                <select  value={apiObj.category} onChange={handleChange} name="category" className="categories">
                    {options}
                </select>   
            </label>
            <div className="difficulty">
                {difficulty}
            </div>
            <button className="start-button" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}