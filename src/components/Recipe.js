import React from "react";

function Recipe({title,calories,image,ingredients}){
    return(
        <div>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <p>{ingredients}</p>
            <img src={image} alt="" />

        </div>
    )
}

export default Recipe
