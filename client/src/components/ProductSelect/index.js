import React, { useState } from "react";
import { Link } from "react-router-dom";

const stock = [
    {
        id: 1,
        title: 'Green Hat',
        price: '$5.00',
        description: 'Hat that is green',
        image: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/691730'
    },
    {
        id: 2,
        title: 'Black hat',
        price: '$10.00',
        description: 'Hat that is black',
        image: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/30850'
    },
    {
        id: 3,
        title: 'propeller hat',
        price: '$15.00',
        description: 'Hat that is rainbow',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81StjJ9-goL._AC_UL1500_.jpg'
    }
];

function ProductSelect() {

    const [currentItem, setCurrentItem] = useState(stock[0]);
    const [itemIndex, setItemIndex] = useState(0)
    // When they click on "I Need This NOW," run addItem to cart (line 41)
    // That means that cart state gets updated (line 42)
    // Also current item moves to next index (lines 45, 46, 48)


    // useEffect(async () => {stock})


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

        moveToNextItem();
    }

    function moveToNextItem() {
        // move to the next index in the stock array
        const newIndex = itemIndex + 1;
        // if the newIndex is less than the stock.length, setItemIndex and setCurrentItem
        if (newIndex < stock.length) {
            setItemIndex(newIndex);
            setCurrentItem(stock[newIndex]);
        } else {
            alert("out of items");
        }
    }


    // function List(props) {
    //     return (
    //         <ul className="list-group">
    //           {props.stock.map(item => (
    //             <li className="list-group-item" key={item.id}>
    //               {item.name}, {item.title}, {item.price}, {item.description}
    //             </li>
    //           ))}
    //         </ul>
    //     );
    // }


    return (
        <main>
            <div className="card centerplace">
                <img className="card-img-top" src={currentItem.image} alt="Placeholder for products"></img>
                <div className="card-body">
                    <h5 className="card-title">{currentItem.title}</h5>
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