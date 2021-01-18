import React from "react";
import { Redirect } from "react-router-dom";


function ProductSelect() {


    return (
        <main>
            <div className="card" style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}>
                <img class="card-img-top" src="https://dummyimage.com/640x360/fff/aaa" alt="Placeholder for products"></img>
                <div class="card-body">
                    <h5 class="card-title">Item Title</h5>
                    <h6 class="card-subtitle text-muted">$Price</h6>
                    <p class="card-text">Describe the item with however many words.</p>
                    <div className="d-flex justify-content-between">
                        <a href="/" class="btn btn-primary" onClick={() =>{}}>Not interested...</a>
                        <a href="/" class="btn btn-danger" onClick={() => {<Redirect from="/" to="/cart/" />}}>I need this NOW</a>
                        <a href="/" class="btn btn-primary" onClick={() => {<Redirect from="/" to="/cart/" />}}>Add to cart :)</a>
                    </div>
                </div>
            </div>
        </main>
    )

}


export default ProductSelect;