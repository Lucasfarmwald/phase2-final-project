import React, {useState} from "react";


function SubmitYourOwn() {

const [title, setTitle] = useState('beef')


const handleSubmit = (e) => {
    e.preventDefault();
 

    console.log(title);
}   

   
const handleChange = (e) => {
    setTitle(e.target.value)
} 


    return(
       <div>
           <h1>Hello</h1>
           <form onSubmit={handleSubmit} >
           <input  onChange={handleChange} ></input>
           <button>change</button>
           </form>
           <p>{title}</p>
       </div>
    )
}

export default SubmitYourOwn