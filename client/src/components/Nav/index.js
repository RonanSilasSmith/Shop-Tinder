import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/Auth';

function Nav() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };



    return (    
        <header className="d-flex p-2 justify-content-between" >
            <h1><a href="/">Shop Tinder</a></h1>

            <nav>
                <ul className="d-flex flex-row">
                    <li className="p-2"><Link to="/">StorePage</Link></li>
                    <li className="p-2"><Link to="/cart">Cart</Link></li>
                    {Auth.loggedIn() ? (
                        <>
                            <li className="p-2"><a href="/" onClick={logout}>Logout</a></li>
                        </>
                    ) : (
                            <>
                                <li className="p-2"><Link to="/login">Login</Link></li>
                                <li className="p-2"><Link to="/signup">Signup</Link></li>
                            </>
                        )}
                </ul>
            </nav>
        </header>
    )

}


export default Nav;