/**
 * Created by ahmad on 3/7/2017.
 */
import React from 'react';
import PageTitle from './PageTitle';
import ShowProducts from './ShowProducts'
import AddProduct from './AddProduct'
import {productsList} from './data';

export default class ProductManager extends React.Component {
    constructor(){
        super();
        this.state = {
            products : productsList.products
        };
        //
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct(productInformation){
        this.setState({products:[...this.state.products,productInformation]});
    }
    render(){
        return(
            <div>
                <AddProduct
                    addProduct={this.addProduct}/>
                <PageTitle />
                <ShowProducts
                    productList={this.state.products}/>
            </div>
        )
    }
}