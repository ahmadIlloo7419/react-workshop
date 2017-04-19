/**
 * Created by ahmad on 4/12/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import {
    Router ,
    Route,
    browserHistory,
    IndexRoute
}   from 'react-router';
//
import HomePage from './src/Home';
import ProductManager from './src/productManager/ProductManager';
import RegisterForm from './src/forms/RegisterForm';
import App from './src/app';
import BeforeRouter from './src/beforeRouter/BeforeRouter'
import NotFound from './src/NotFound';
import Slider from './src/slider/Slider';
import Comments from './src/comments/Comments';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="product-manager" component={ProductManager} />
        <Route path="register" component={RegisterForm} />
        <Route path="before-route" component={BeforeRouter} />
        <Route path="slider" component={Slider} />
        <Route path="comments" component={Comments} />
        <Route path="*"  component={NotFound} />
    </Route>
</Router>, document.getElementById("app"));