import React from 'react';
import './styles.css';

export default class ClassName extends React.Component {
    constructor(){
        super();
        this.state = {
            isShow : false ,
            formValues : {}
        };
        //
        this.toggleModal = this.toggleModal.bind(this);
        this.changeFieldHandler = this.changeFieldHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    toggleModal(){
        this.setState({isShow:!this.state.isShow});
    }
    changeFieldHandler(event){
        const data  = {[event.target.id] : event.target.value};
        this.setState({formValues : Object.assign({},this.state.formValues,data)});
    }
    submitHandler(){
        this.toggleModal();
        this.props.addProduct(this.state.formValues);
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
                            <label htmlFor="name">Name :</label>
                            <input type="text" placeholder="Name... " id="name" onChange={this.changeFieldHandler}/>
                        </span>
                        <span className="formElement">
                            <label htmlFor="price">Price :</label>
                            <input type="text" placeholder="Price... " id="price"  onChange={this.changeFieldHandler}/>
                        </span>
                        <span className="formElement">
                            <label htmlFor="imagePath">Image :</label>
                            <input type="text" placeholder="Image path... " id="imagePath"  onChange={this.changeFieldHandler}/>
                        </span>
                        <button onClick={this.submitHandler}>SAVE</button>
                    </div>

                </div>
            </div>
        );
    }
} 