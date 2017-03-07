/**
 * Created by ahmad on 2/28/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import RegisterForm from './forms/RegisterForm';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <RegisterForm
                    text="hello"/>
            </div>
        );
    }

}
render(<App />, document.getElementById("app"));