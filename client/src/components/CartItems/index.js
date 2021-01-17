import React from "react";


function CartItems() {
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