import React from "react"
import "./product.css"


function ProductList(props) {
    return (
        <div>
            <ul>
                <li className="container">
                    <img src={props.GroceryImage} alt="cabbage pic"/>
                    <h3>{props.GroceryName} - {props.GroceryWeight}</h3><p>{props.GroceryCategory}</p>
                    <p className="style">${props.GroceryPreviousPrice}</p>
                    <p>${props.GroceryActualPrice}</p>
                    
                </li>
            </ul>
        </div>
    )

}



export default ProductList;