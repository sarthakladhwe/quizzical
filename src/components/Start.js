import React from 'react'

import Option from './Option'

export default function Start({ startQuiz, apiObj, handleChange, listoFCategories }) {

    const options = listoFCategories.map(cat => (
        <option value={cat.id}>{cat.name}</option>
    ))

    const difficulty = ["Easy", "Medium", "Hard"]

    const difficultyOptions = difficulty.map(diff => (
        <Option difficulty={diff} handleChange={handleChange} />
    ))

    return (
        <div className="start-container">
            <h1>Quizzical</h1>
            <form>
                <label>
                    Category: 
                    <select value={apiObj.category} onChange={handleChange} name="category">
                        {options}
                    </select>
                </label>
                <div className="difficulty">
                    {difficultyOptions}
                </div>
            </form>
            <button className="start-button" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}