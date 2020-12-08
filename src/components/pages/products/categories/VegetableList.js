import React from "react"
import "./categories.css"


function VegetableList(props) {
    return (
        <div>
            <ul >
                <li className="container2">
                    <img src={props.vegetableImage} alt = "pic"/>
                    <h3>{props.vegetableName} - {props.vegetableWeight }</h3>
                    <p className="style">${props.vegetablePreviousPrice}</p>
                    <p className="add1">${props.vegetableActualPrice}</p>
                    <button type="submit" className="add">Add</button>
                    
                    
                </li>
                
            </ul>

        </div>
    )
}

export default VegetableList;