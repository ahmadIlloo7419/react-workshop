import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
    render() {
        alert('home')
        return (
            <div>
                    <Link to="product-manger" >product manger page </Link>
            </div>
        );
    }
} 