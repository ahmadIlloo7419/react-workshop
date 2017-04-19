/**
 * Created by ahmad on 4/12/2017.
 */
import React from 'react';
import {Route} from 'react-router';
import HomePage from './Home';
import ProductManager from './productManager/ProductManager';
import RegisterForm from './forms/RegisterForm';
import App from './app';

export default  (<Route path="/" component={App}>
        <Route path="product-manager" component={ProductManager} />
        <Route path="register" component={RegisterForm} />
        <Route path="*"  component={HomePage} />
    </Route>);
