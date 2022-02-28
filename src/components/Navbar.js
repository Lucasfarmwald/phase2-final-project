import React from "react";
import {NavLink} from "react-router-dom";




function Navbar(){
    return(
        <nav>
            <div className="Navbar" >
                
                <ul>
                    <li>
                    <NavLink exact to='/'>
                    Home
                </NavLink>
                    </li>
                    <li>
                    <NavLink exact to='/Api'>
                    Api
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/Love'>
                    Love
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/Funny'>
                    Funny
                </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
      

    )
}

export default Navbar