import React, {useState, useEffect} from "react";


function CartItems() {
    // make a state for the cart
    const [cart, setCart] = useState([]);

    // in a useEffect
    // make an axios get request to the database to pull the cart based on user
    // setCart to the cart from the database
    return (
        <ul class="list-group list-group-flush" style={{ height: "400px", overflow: "auto" }}>
            <div class="card-body"><li class="list-group-item">
                <h5 class="card-title">Test Item</h5>
                <h6 class="card-subtitle text-muted">$Test Price</h6>
                <p>You have 3 ITEMNAMEs in your cart</p>
                <a href="#" class="card-link">Remove</a>
            </li></div>
        </ul>
    )
}


export default CartItems