import React from 'react'

import Option from './Option'

export default function Start(props) {

    const { startQuiz, apiObj, handleChange, difficultySelected, listoFCategories, difficultyOptions } = props
    
    const options = listoFCategories.map(cat => (
        <option value={cat.id}>{cat.name}</option>
    ))

    const difficulty = difficultyOptions.map(option => (
        <h3 className="difficulty-option" onClick={difficultySelected} style={{backgroundColor: option.selected && "#D6DBF5"}}>{option.difficulty}</h3>
    ))

    return (
        <div className="start-container">
            <h1>Quizzical</h1>
                <label>
                    Category: 
                    <select value={apiObj.category} onChange={handleChange} name="category">
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