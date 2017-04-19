/**
 * Created by ahmad on 4/12/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import {
    Router ,
    Route,
    browserHistory
}   from 'react-router';
import routes from './src/routes';
//
import HomePage from './src/Home';
import ProductManager from './src/productManager/ProductManager';
import RegisterForm from './src/forms/RegisterForm';
import App from './src/app';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="product-manager" component={ProductManager} />
        <Route path="register" component={RegisterForm} />
        <Route path="*"  component={HomePage} />
    </Route>
</Router>, document.getElementById("app"));