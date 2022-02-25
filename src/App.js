
import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import Navbar from './components/Navbar';
import SubmitYourOwn from './components/SubmitYourOwn';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App(){

  const AppId = 'b2f09b87'
  const AppKey = '75e86e9ee8c70a1d2203700ad87b5f2e'
  const [recipes, setRecipes] = useState([]); 
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
    
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`)
    .then((response) => response.json())
    .then((data) => setRecipes(data.hits))
    
  }, [query])

 

  return(
    
    <div className='App' >
      <h1 className='header'>
        Insta {<img className='picture' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTGuFydYGbqBCW8lavBmMdrMFyX4D-Hv9iGjxKBbbKojgWi7wGunC7-JzaPRKW3VYg_Y&usqp=CAU' alt='fork-pic' />} cook
      </h1>
        <Navbar  />
        <form className='search-form' onSubmit={getSearch} >
          <input type="text" className='search-bar' 
          value={search} onChange={updateSearch} ></input>
          <button className='search-button' type='submit'>search</button>
        </form>
      <div className='recipes' >      
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
       
        />
      ))}
      </div>
      <div>
        <SubmitYourOwn />
      </div>
    </div>
    
  )
}



export default App;
