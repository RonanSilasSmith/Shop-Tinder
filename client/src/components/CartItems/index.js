import React, {useState, useEffect} from "react";


function CartItems() {
    // make a state for the cart
    const [cart, setCart] = useState([]);

    // in a useEffect
    // make an axios get request to the database to pull the cart based on user
    // setCart to the cart from the database
    return (
        <ul className="list-group list-group-flush" style={{ height: "400px", overflow: "auto" }}>
            <li className="list-group-item">Item1</li>
            <li className="list-group-item">Item2</li>
            <li className="list-group-item">Item3</li>
            <li className="list-group-item">Item4</li>
            <li className="list-group-item">Item5</li>
            <li className="list-group-item">Item6</li>
            <li className="list-group-item">Item7</li>
            <li className="list-group-item">Item8</li>
            <li className="list-group-item">Item9</li>
            <li className="list-group-item">Item10</li>
            <li className="list-group-item">Item11</li>
            <li className="list-group-item">Item12</li>
            <li className="list-group-item">Item13</li>
            <li className="list-group-item">Item14</li>
            <li className="list-group-item">Item15</li>
        </ul>
    )
}


export default CartItems