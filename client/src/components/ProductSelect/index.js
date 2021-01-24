import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';


function ProductSelect(props) {

    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);

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

    // const { cart } = state

    // substitute for your post reuqest
    const addToCart = () => {
        // const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        // if (itemInCart) {
        //     dispatch({
        //         type: UPDATE_CART_QUANTITY,
        //         _id: _id,
        //         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        //     });
        // } else {
        //     dispatch({
        //         type: ADD_TO_CART,
        //         product: { ...props, purchaseQuantity: 1 }
        //     });
        // }
    }

    // make a gql get request to the backend to get all products, in a useEffect
    const [products, setProducts] = useState([]);

    const [currentItem, setCurrentItem] = useState(data[0]);
    const [itemIndex, setItemIndex] = useState(0);
    // When they click on "I Need This NOW," run addItem to cart (line 41)
    // That means that cart state gets updated (line 42)
    // Also current item moves to next index (lines 45, 46, 48)

    function addItem() {
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
        addToCart();
        moveToNextItem();
    }

    function moveToNextItem() {
        // move to the next index in the stock array
        const newIndex = itemIndex + 1;
        // if the newIndex is less than the stock.length, setItemIndex and setCurrentItem
        if (newIndex < data.length) {
            setItemIndex(newIndex);
            setCurrentItem(props[newIndex]);
        } else {
            alert("out of items");
        }
    }


    return (
        <main>
            <div className="card" style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}>
                <img className="card-img-top" src={`/images/${currentItem.image}`} alt="Placeholder for products"></img>
                <div className="card-body">
                    <h5 className="card-title">{currentItem.name}</h5>
                    <h6 className="card-subtitle text-muted">{currentItem.price}</h6>
                    <p className="card-text">{currentItem.description}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={moveToNextItem}>Not interested...</button>
                        <Link to="/cart" className="btn btn-danger">I need this NOW</Link>
                        <button className="btn btn-primary" onClick={addItem}>Add to cart :)</button>
                    </div>
                </div>
            </div>
        </main>
    )

}


export default ProductSelect;