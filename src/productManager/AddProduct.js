import React from 'react';
import './styles.css';

export default class ClassName extends React.Component {
    render() {
        return (
            <div>
                <button className="btn">
                    Add +
                </button>
                <div className="modal-container">
                    <div className="content">
                        <i>X</i>
                        <h3>Product information</h3>
                        <span className="formElement">
                            <label htmlFor="">Name :</label>
                            <input type="text" placeholder="Name... "/>
                        </span>
                        <button>SAVE</button>
                    </div>
                </div>
            </div>
        );
    }
} 