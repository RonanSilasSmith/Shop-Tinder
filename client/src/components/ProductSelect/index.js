import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../utils/queries'
import { Link } from "react-router-dom";


function ProductSelect() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const [currentItem, setCurrentItem] = useState(0);



    



    const addItem = () => {
        moveToNextItem();
    }

    const moveToNextItem = () => {
        console.log(product.length)
        setCurrentItem(currentItem + 1)
        if (currentItem >= product.length-2){
            setCurrentItem(0)
        }
    }

    let error = []
    for(let i=0; i<12; i++){
        error.push({
            name: 'Error',
            description:
                'This is only here because error',
            image: 'errorIMG.jpg',
            price: 99.99,
            quantity: 45
        })
    }
    console.log(error)
    console.log(currentItem)
    const product = data?.products || error

    // console.log(product[currentItem]._id)
    return (
        <main>
            <div className="card centerplace">
                <Link to={`/products/${product[currentItem]._id}`}>
                </Link>
                <img class="card-img-top" src={`/images/${product[currentItem].image}`} alt={product[currentItem].name}></img> 
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