import React from 'react';
import './styles.css';

export default class ShowProducts extends React.Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.productList.products.map(
                        (product,counter)=>{
                            return (
                                <div className="product" key={"productNO_"+counter}>
                                    <img src={product.imagePath} />
                                    <h4 className="title">{product.name}</h4>
                                    <div className="price">
                                        {product.price}
                                    </div>
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }
}