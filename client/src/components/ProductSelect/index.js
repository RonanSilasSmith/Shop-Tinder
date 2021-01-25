import React, { useEffect, useState} from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../utils/queries'
import { Link } from "react-router-dom";


function ProductSelect() {
    const [currentItem, setCurrentItem] = useState(0);

    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    console.log(currentItem)
    const product = data?.products || []
    console.log(product)

    const addItem = () => {
        
        // add currentItem to the cart, and change the state of the cart (lines 41 and 42)
        // temporary post request, it will reset when you refresh
        //cart.push(stock[itemIndex]);
        //console.log(cart);
        //setCart(cart);

        // more permanent
        // make an axios call to save the cart item to the database
        // post request
        // it'll be a permanent change in case someone accidentally refreshes the page or loses internet connection while tindering
        //alert("added to cart");

        moveToNextItem();
    }


    const moveToNextItem = () => {
        setCurrentItem(currentItem+1)
        console.log(currentItem)
    }



    return (
        <main>
            
            <div className="card centerplace">
                <Link to={`/products/${product[currentItem]._id}`}>
                    <img
                        alt={product[currentItem].name}
                        src={`/images/${product[currentItem].image}`}
                    />
                </Link>
                <img class="card-img-top" src="https://dummyimage.com/640x360/fff/aaa" alt="Placeholder for products"></img>
                <div class="card-body">
                    <h5 class="card-title">{product[currentItem].name}</h5>
                    <h6 class="card-subtitle text-muted">${product[currentItem].price}</h6>
                    <p class="card-text">{product[currentItem].description}</p>
                    <div className="d-flex justify-content-between">
                        <button class="btn btn-primary" onClick={moveToNextItem}>Not interested..</button>
                        <button class="btn btn-danger">I need this NOW</button>
                        <button class="btn btn-primary" onClick={addItem}>Add to cart :)</button>
                    </div>
                </div>
            </div>
        </main>
    )

}


export default ProductSelect;