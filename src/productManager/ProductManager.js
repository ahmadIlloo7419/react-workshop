/**
 * Created by ahmad on 3/7/2017.
 */
import React from 'react';
import PageTitle from './PageTitle';
import ShowProducts from './ShowProducts'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import {productsList} from './data';

export default class ProductManager extends React.Component {
    constructor(){
        super();
        this.state = {
            products : productsList.products ,
            isShowEdit : false ,
            editedProductInformation : {}
        };
        //
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.showEditProduct = this.showEditProduct.bind(this);
        this.closeEditShow = this.closeEditShow.bind(this);
    }
    addProduct(productInformation){
        this.setState({products:[...this.state.products,productInformation]});
    }
    removeProduct(event){
        const productName = event.target.id;
        this.setState({products:this.state.products.filter(item=>item.name!=productName)});

        //this.setState({products:this.state.products.filter(
        //    function(item) {
        //        return item.name != productName
        //    }
        //)})
    }
    showEditProduct(productName){
        const productInformation = this.state.products.find(item=>item.name==productName);
        this.setState(
            {

                editedProductInformation : productInformation ,
                isShowEdit : true
            }
        );
    }
    closeEditShow(){
        this.setState({isShowEdit:false});
    }
    render(){
        return(
            <div>
                <AddProduct
                    addProduct={this.addProduct}/>
                <EditProduct
                    isShow={this.state.isShowEdit}
                    closeModal={this.closeEditShow}
                    productInformation={this.state.editedProductInformation}/>
                <PageTitle />
                <ShowProducts
                    productList={this.state.products}
                    removeProduct={this.removeProduct}
                    showEditModal={this.showEditProduct}/>
            </div>
        )
    }
}