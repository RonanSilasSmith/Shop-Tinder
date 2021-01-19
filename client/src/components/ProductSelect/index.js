import React, { useState } from "react";
import { Link } from "react-router-dom";


function ProductSelect() {
    const stock = [
        {
            id: 1,
            title: 'First Item',
            price: '$5.00',
            description: 'test one'
        },
        {
            id: 2,
            title: 'Second Item',
            price: '$10.00',
            description: 'test two'
        },
        {
            id: 3,
            title: 'Third Item',
            price: '$15.00',
            description: 'test three'
        }
    ];


    const [regItems, setItems] = useState([]);
    const [currentItems, setCurrentItems] = useState(
        {
            id: 1,
            title: 'First Item',
            price: '$5.00',
            description: 'test one'
        }
    );

    useEffect(async () => {stock})


    function addItem(shopItem) {
        setItems();
        setCurrentItems(current => [...current, shopItem.title, shopItem.price, shopItem.description]);
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
            <div className="card" style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}>
                <img class="card-img-top" src="https://dummyimage.com/640x360/fff/aaa" alt="Placeholder for products"></img>
                <div class="card-body">
                    <h5 class="card-title">Item Title</h5>
                    <h6 class="card-subtitle text-muted">$Price</h6>
                    <p class="card-text">Describe the item with however many words.</p>
                    <div className="d-flex justify-content-between">
                        <a href="/" class="btn btn-primary">Not interested...</a>
                        <a href="/" class="btn btn-danger"><Link to="/cart">I need this NOW</Link></a>
                        <a href="/" class="btn btn-primary"><Link to="/cart" onClick={()=>addItem(shopItem)}>Add to cart :)</Link></a>
                    </div>
                </div>
            </div>
        </main>
    )

}


export default ProductSelect;