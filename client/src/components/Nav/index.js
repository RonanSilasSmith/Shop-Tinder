import React from "react";
//import { Link } from "react-router-dom";


function Nav() {
    function showNav(){
        return(
            <ul className="flex-row">
                <ul>
                    <li>StorePage</li>
                    <li>Cart</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </ul>
        )
    }

    return (
        <header className="flex-row px-1">
            <h1>Shop Tinder</h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    )

}


export default Nav;