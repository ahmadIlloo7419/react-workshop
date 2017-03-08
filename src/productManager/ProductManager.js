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
            products : productsList
        };
    }

    render(){
        return(
            <div>
                <AddProduct />
                <PageTitle />
                <ShowProducts
                    productList={this.state.products}/>
            </div>
        )
    }
}