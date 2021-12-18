import React from 'react'
import style from './recipe.module.css'

function Recipe({title,Calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1> {title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li> {ingredient.text}</li>
                ))}
            </ol>
            <p>{Calories}</p>
            <img src={image} alt=''/>
        </div>
    )
}

export default Recipe
