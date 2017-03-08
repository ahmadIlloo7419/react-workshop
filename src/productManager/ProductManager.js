/**
 * Created by ahmad on 3/7/2017.
 */
import React from 'react';
import PageTitle from './PageTitle';
import ShowProducts from './ShowProducts'
import AddProduct from './AddProduct'

export default class ProductManager extends React.Component {
    render(){
        return(
            <div>
                <AddProduct />
                <PageTitle />
                <ShowProducts />
            </div>
        )
    }
}