
import './App.css';
import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe';
import Navbar from './components/Navbar';






function App(){

  const AppId = 'b2f09b87'
  const AppKey = '75e86e9ee8c70a1d2203700ad87b5f2e'
  
  const [recipes, setRecipes] = useState([])
  const [searchBar, setSearchBar] = useState("")
  const [query, setQuery] = useState('chicken')

function handleSearchBar(event) {
  setSearchBar(event.target.value)
}  

function handleQuery(event) {
  event.preventDefault()
  setQuery(searchBar)
}
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`)
    .then((response) => response.json())
    .then((data) => setRecipes(data.hits))
  }, [])
 
console.log(recipes)
console.log(searchBar)

  return(
    <div className='App' >
      
      <h1 className='header'>
        Insta {<img className='picture' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTGuFydYGbqBCW8lavBmMdrMFyX4D-Hv9iGjxKBbbKojgWi7wGunC7-JzaPRKW3VYg_Y&usqp=CAU' alt='fork-pic' />} cook
      </h1>
      <div className='navbar'>
        <Navbar  />
      </div>
      <form className='form-submit' onSubmit={handleQuery} >
        <input className='search-bar' type="text" placeholder='Search for any recipe!' value={searchBar} onChange={handleSearchBar}></input>
        <button className='search-button' type='submit'>Search</button>
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
