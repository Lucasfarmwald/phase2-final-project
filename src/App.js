
import './App.css';
import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe';






function App(){

  const AppId = 'b2f09b87'
  const AppKey = '75e86e9ee8c70a1d2203700ad87b5f2e'
  
  const [recipes, setRecipes] = useState([])
  const [searchBar, setSearchBar] = useState("")

function handleSearchBar(event) {
  setSearchBar(event.target.value)
}  
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`)
    .then((response) => response.json())
    .then((data) => setRecipes(data.hits))
  }, [])
 
console.log(recipes)
console.log(searchBar)

  return(
    <div className='App' >
      <h1>
        Hello react
      </h1>
      <form>
        <input type="text" placeholder='Search for any recipe!' value={searchBar} onChange={handleSearchBar}></input>
        <button type='submit'>Search</button>
      </form>
      <div className='recipes' >
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        
        />
      ))}
      </div>
    </div>
  )
}
export default App;
