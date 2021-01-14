import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    function showNav(){
        return(
            <ul className="d-flex flex-row">
                <li className="p-2"><Link to="/">StorePage</Link></li>
                <li className="p-2"><Link to="/cart">Cart</Link></li>
                <li className="p-2"><Link to="signup">Signup</Link></li>
                <li className="p-2"><Link to="/login">Login</Link></li>
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