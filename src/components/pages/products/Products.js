import React from "react"
import ProductData from "./productData"
import ProductList from "./ProductList"
import "./product.css"
import Search from "./Search"


class Products extends React.Component{
    state = {
        products: ProductData
    }

    render() {
        let products = this.state.products.map((product, index) => {
            return (
                <ProductList key={index} GroceryName={product.GroceryName} GroceryImage={product.GroceryImage} GroceryCategory={product.GroceryCategory} GroceryActualPrice={product.GroceryActualPrice}
                    GroceryPreviousPrice={product.GroceryPreviousPrice}
                    GroceryWeight={product.GroceryWeight}    
                />
            )
        })
        return (
            <div>
                <Search />
                <div className="product">
                    {products}
                </div>
            </div>
        )
    }
}

export default Products