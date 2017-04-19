import React from 'react';
import {Link} from 'react-router';
import './styles.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/" className="navItem">Home page</Link>
                <Link to="/register" className="navItem">Register form</Link>
                <Link to="/product-manager" className="navItem">Product Manager</Link>
                <Link to="/before-route" className="navItem">before router</Link>
                <Link to="/slider" className="navItem">slider</Link>
                <Link to="/comments" className="navItem">comments</Link>
            </div>
        );
    }
} 