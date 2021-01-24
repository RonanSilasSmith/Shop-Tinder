import React, {useState} from "react";
import CartItems from "../components/CartItems";
import PayPal from "../components/PayPal";
import Auth from '../utils/Auth';

function Cart() {

    const [checkout, setCheckOut] = useState(false)

    return (
        <main>
            {Auth.loggedIn()?(
                <div className="card centerplace">
                    <div className="card-body">
                        <h2 className="card-title">Your Cart:</h2>
                    </div>
                    <CartItems />
                    <div className="card-body">
                        <h3>Place Order:   <div>
                            {/* {checkout ? (
                        <PayPal />
                    ) : (
                        <button 
                            onClick={() => {
                                setCheckOut(true);
                    }}
                    >
                    Checkout
                    </button>
                    )} */}
                            <PayPal />
                        </div></h3>
                    </div>
                </div>
            ):(
                <p>Log in to see cart!! </p>
            )}
            
        </main>
    )
}


export default Cart

//<button type="button" class="btn btn-primary">PayPal API stuff here</button