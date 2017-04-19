/**
 * Created by ahmad on 2/28/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import Navigation from './navigation/Navigation';

export default class App extends React.Component {
    static propTypes: {
        children: React.PropTypes.element
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <Navigation />
               {this.props.children}
           </div>
        );
    }
}
