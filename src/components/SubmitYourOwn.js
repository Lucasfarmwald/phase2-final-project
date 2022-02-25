import React from "react";

function SubmitYourOwn() {
    return(
        <div>
            <form>
            <h1 className='add-your-own'>Add your own recipes</h1>
            <input className='add-your-own' type="text" placeholder='Add your own recipe!'></input>
            <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default SubmitYourOwn