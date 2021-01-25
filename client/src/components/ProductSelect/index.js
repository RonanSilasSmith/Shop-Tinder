import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../utils/queries'
//import { Link } from "react-router-dom";


function ProductSelect() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    console.log(data)


    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [data, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(product => product.category._id === currentCategory);
    }

    return (
        <main>
            <div className="card centerplace">
                <img class="card-img-top" src="https://dummyimage.com/640x360/fff/aaa" alt="Placeholder for products"></img>
                <div class="card-body">
                    <h5 class="card-title">Item Title</h5>
                    <h6 class="card-subtitle text-muted">$Price</h6>
                    <p class="card-text">Describe the item with however man words.</p>
                    <div className="d-flex justify-content-between">
                        <a href="/" class="btn btn-primary">Not interested..</a>
                        <a href="/" class="btn btn-danger">I need this NOW</a>
                        <a href="/" class="btn btn-primary">Add to cart :)</a>
                    </div>
                </div>
            </div>
        </main>
    )

}


export default ProductSelect;