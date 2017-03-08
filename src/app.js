/**
 * Created by ahmad on 2/28/2017.
 */
import React from 'react';
import {render} from 'react-dom';
//import RegisterForm from './forms/RegisterForm';
import ProductManager from './productManager/ProductManager';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
               <ProductManager />
            </div>
        );
    }

}
render(<App />, document.getElementById("app"));