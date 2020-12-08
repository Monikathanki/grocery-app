import React from "react"
import VegatableList from "./VegetableList"
import vegetablesData from "./VegetablesData"
import Search from  "../Search"


class Vegetables extends React.Component {
    state = {
        vegetables: vegetablesData
    }

    render() {
        let vegetables = this.state.vegetables.map((veg, index) => {
            return (
                <VegatableList
                    key={index} vegetableImage={veg.vegetableImage} vegetableName={veg.vegetableName}
                    vegetablePreviousPrice={veg.vegetablePreviousPrice}
                    vegetableActualPrice={veg.vegetableActualPrice}
                    vegetableWeight = {veg.vegetableWeight}
                />
            )
        })
        return (
            <div>
                <Search />
                <header>
                    <h1>Vegetables</h1>
                </header>
                <div className="veg">
                    
                    {vegetables}
                    
                </div>
            </div>
        )
    }
}

export default Vegetables;