import React, {useState} from "react";
import CartItems from "../components/CartItems";
import PayPal from "../components/PayPal";


function Cart() {

    const [checkout, setCheckOut] = useState(false)

    return (
        <main>
            <div className="card" style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}>
                <div className="card-body">
                    <h2 className="card-title">Your Cart:</h2>
                </div>
                <CartItems />
                <div className="card-body">
                    <h3>Place Order:   <div>  
                    {checkout ? (
                        <PayPal />
                    ) : (
                        <button 
                            onClick={() => {
                                setCheckOut(true);
                    }}
                    >
                    Checkout
                    </button>
                    )}
                    </div></h3>
                </div>
            </div>
        </main>
    )
}


export default Cart

//<button type="button" class="btn btn-primary">PayPal API stuff here</button