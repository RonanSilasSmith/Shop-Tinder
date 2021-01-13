import React from "react";
//import { Link } from "react-router-dom";


function Nav() {
    function showNav(){
        return(
            <ul className="d-flex flex-row">
                <li className="p-2"><a href="/">StorePage</a></li>
                <li className="p-2"><a href="/">Cart</a></li>
                <li className="p-2"><a href="/">Login</a></li>
                <li className="p-2"><a href="/">Sign Up</a></li>
            </ul>
        )
    }

    return (
        <header className="d-flex p-2 justify-content-between" >
            <h1><a href="/">Shop Tinder</a></h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    )

}


export default Nav;