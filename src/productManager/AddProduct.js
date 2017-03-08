import React from 'react';
import './styles.css';

export default class ClassName extends React.Component {
    constructor(){
        super();
        this.state = {
            isShow : false
        };
        //
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({isShow:!this.state.isShow});
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.toggleModal}>
                    Add +
                </button>
                <div className="modal-container" style={{display:(this.state.isShow?"block":"none")}}>
                    <div className="content">
                        <i onClick={this.toggleModal}>X</i>
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