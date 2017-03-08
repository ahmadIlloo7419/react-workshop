import React from 'react';
import './styles.css';

export default class ShowProducts extends React.Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.productList.map(
                        (product,counter)=>{
                            return (
                                <div className="product" key={"productNO_"+counter}>
                                    <img src={product.imagePath} onClick={this.props.showEditModal.bind(null,product.name)}/>
                                    <h4 className="title">{product.name}</h4>
                                    <div className="price">
                                        {product.price}
                                    </div>
                                    <button onClick={this.props.removeProduct} id={product.name}>Delete</button>
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }
}